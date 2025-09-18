
# Snipahh Portfolio - Static Site

This is the static version of the Snipahh portfolio website, optimized for hosting on platforms like GitHub Pages.

## Development

```bash
cd client
npm install
npm run dev
```

## Building for Production

```bash
cd client
npm run build
```

The built files will be in the `client/dist` directory.

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Set source to "GitHub Actions"
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: cd client && npm install
    - run: cd client && npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./client/dist
```

### Replit Static Deployment
Use the Deployments tab and select "Static" deployment type.
- Build command: `cd client && npm install && npm run build`
- Public directory: `client/dist`
