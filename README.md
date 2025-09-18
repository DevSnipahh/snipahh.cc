# Static Portfolio Website

This is a static React-based portfolio website configured for GitHub Pages deployment.

## 🚀 Features

- **100% Static**: No server required, runs entirely in the browser
- **GitHub Pages Ready**: Automated deployment with GitHub Actions
- **Config-Driven**: All content managed through `public/config.json`
- **Responsive Design**: Mobile-first approach with dark theme
- **Modern Stack**: React + Vite + Tailwind CSS

## 📁 Project Structure

```
├── public/
│   └── config.json          # Site configuration and content
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   └── index.css           # Global styles and theme variables
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages deployment
└── dist/                   # Build output (generated)
```

## 🛠️ Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 📝 Configuration

Edit `public/config.json` to customize all website content:

- **Developer info**: Name, title, bio
- **Hero section**: Main heading and call-to-action buttons
- **Skills**: Technical skills with descriptions
- **Projects**: Portfolio projects with technologies used
- **Services**: Service offerings with pricing
- **Contact**: Social media and contact links

## 🎨 Theming

The site uses CSS custom properties for theming. Colors can be modified in `src/index.css`:

- Dark purple gradient background inspired by modern Discord bots
- Purple accent colors with high contrast text
- Glass morphism effects for cards and overlays

## 🚀 Deployment

### GitHub Pages (Recommended)

1. Push to your GitHub repository
2. Go to Settings → Pages
3. Set source to "GitHub Actions"
4. The site will automatically deploy on every push to main/master

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist/` folder to any static hosting service
3. Ensure your hosting supports SPA routing (or use the included 404.html)

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Progressive Web App ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build: `npm run build`
5. Submit a pull request

---

Built with ❤️ using React, Vite, and Tailwind CSS