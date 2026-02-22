import PocketBase from 'pocketbase';

// Client-side PocketBase instance (no admin auth needed for public data)
class PocketBaseClient {
  private static instance: PocketBaseClient;
  private readonly pb: PocketBase;

  private constructor() {
    const url = import.meta.env.VITE_POCKETBASE_URL || 'http://127.0.0.1:8090';
    this.pb = new PocketBase(url);
  }

  public static getInstance(): PocketBaseClient {
    if (!PocketBaseClient.instance) {
      PocketBaseClient.instance = new PocketBaseClient();
    }
    return PocketBaseClient.instance;
  }

  public getClient(): PocketBase {
    return this.pb;
  }
}

export { PocketBaseClient };
