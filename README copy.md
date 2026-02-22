# fluttermalawi

Our goal with this community is to create a friendly and engaging space for developers in Malawi who are interested in learning and developing using Flutter.

## Illustations used

- [Illustrations](https://pixels.market/)
- [Fonts](https://fonts.google.com/)
- [Icons](https://iconoir.com/)

# Welcome to Remix

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
-

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

## PocketBase

1. Open a terminal and navigate to the ./pb
2. Run the following command:

```bash
./pocketbase serve
```

That's it! A web server will start with the following routes:

- `http://127.0.0.1:8090` - If `pb_public` directory exists, serves static content from it (HTML, CSS, images, etc.)
- `http://127.0.0.1:8090/_/` - Admin dashboard UI
- `http://127.0.0.1:8090/api/` - REST API

## First-Time Setup

When you first access the Admin dashboard UI, you'll be prompted to create your initial admin account (email and password).

## Directory Structure

The PocketBase executable will automatically create and manage two new directories:

- `pb_data`: Stores your application data, uploaded files, etc. (typically added to `.gitignore`)
- `pb_migrations`: Contains JS migration files with your collection changes (can be safely committed to your repository)

For more information on writing custom migration scripts, check the [JS migrations docs](https://pocketbase.io/docs/migrations/).

## License

PocketBase is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
