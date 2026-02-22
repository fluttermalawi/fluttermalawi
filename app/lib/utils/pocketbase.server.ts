import PocketBase from 'pocketbase';

if (!process.env.POCKETBASE_URL) {
  throw new Error(
    'POCKETBASE_URL is not defined in environment variables'
  );
}

if (
  !process.env.POCKETBASE_ADMIN_EMAIL ||
  !process.env.POCKETBASE_ADMIN_PASSWORD
) {
  throw new Error(
    'PocketBase admin credentials not found in environment variables'
  );
}

// Initialize PocketBase client with authentication
class AuthenticatedPocketBase {
  private static instance: AuthenticatedPocketBase;
  private readonly pb: PocketBase;
  private isAuthenticated: boolean = false;

  private constructor() {
    this.pb = new PocketBase(process.env.POCKETBASE_URL);
  }

  public static getInstance(): AuthenticatedPocketBase {
    if (!AuthenticatedPocketBase.instance) {
      AuthenticatedPocketBase.instance =
        new AuthenticatedPocketBase();
    }
    return AuthenticatedPocketBase.instance;
  }

  private async authenticate() {
    if (!this.isAuthenticated) {
      try {
        await this.pb.admins.authWithPassword(
          process.env.POCKETBASE_ADMIN_EMAIL!,
          process.env.POCKETBASE_ADMIN_PASSWORD!
        );
        this.isAuthenticated = true;
        // TODO.log("Successfully authenticated with PocketBase");
      } catch (error) {
        // TODO.error("PocketBase authentication failed:", error);
        throw new Error('Failed to authenticate with PocketBase');
      }
    }
  }

  public async getClient(): Promise<PocketBase> {
    await this.authenticate();
    return this.pb;
  }
}

export { AuthenticatedPocketBase };
