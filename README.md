<!-- Tech Stack Badges -->
[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=flat&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18.2-0055FF?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![MDX](https://img.shields.io/badge/MDX-2.0.13-000000?style=flat&logo=mdx&logoColor=white)](https://mdxjs.com)
[![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-111827?style=flat&logo=shadcnui&logoColor=white)](https://ui.shadcn.com)

# Portfolio (Public Version)

>This is the public version of my portfolio website, based on the old version of my private portfolio at [https://rifk7s.vercel.app](https://rifk7s.vercel.app). Anyone is welcome to fork and use this as a starting point for their own site.


## Tech Stack

- **Next.js 15.3.5** (React framework with App Router)
- **React 19.1.0** (UI library)
- **TypeScript 5.8.3** (type-safe JavaScript)
- **Tailwind CSS 3.4.17** (utility-first CSS framework)
- **Shadcn/ui** (modern component library)
- **Magic UI** (additional UI components for animations)
- **Framer Motion 11.18.2** (animation library)
- **Motion 12.7.4** (advanced animations)
- **React Icons 5.5.0** (comprehensive icon library)
- **Lucide React 0.395.0** (beautiful icon library)
- **MDX 2.0.13** (markdown with JSX support)
- **Next Themes 0.3.0** (theme switching)
- **Radix UI** (accessible component primitives)

## Features
- Minimalist, performant portfolio template
- Modern UI components with Shadcn UI and Magic UI
- Dark/light theme toggle
- Blog support with MDX
- Responsive design with Tailwind CSS
- TypeScript for type safety
- Animated components with Framer Motion
- Icon support with React Icons
- Easy to customize and extend

## Getting Started

> [!IMPORTANT]
> Make sure you have Node.js 18+ and pnpm installed on your system.

1. **Clone the repository**
   ```bash
   git clone https://github.com/rifk7s/portfolio
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # Reusable UI components
│   ├── data/               # Data files for resume and blog
│   └── lib/                # Utility functions
├── content/                # MDX blog posts
├── public/                 # Static assets
└── ...config files
```

## Customization

> [!TIP]
> To personalize your portfolio, start by editing the files in `src/data/` directory.

### Adding Blog Posts
Place your `.mdx` files in the `content/` directory. The blog system will automatically detect and render them.

### Updating Resume Data
Edit `src/data/resume.tsx` to update your personal information, experience, and skills.

### Modifying Components
All UI components are in `src/components/`. You can customize them to match your design preferences.

## Notes and Warnings

> [!NOTE]
> This portfolio is built with Next.js 15, React 19, TypeScript, Tailwind CSS, and includes Shadcn UI components.

> [!TIP]
> Use the dark/light theme toggle in the navigation to switch between themes.

> [!IMPORTANT]
> Run `pnpm install` after cloning to install all dependencies before starting development.

> [!WARNING]
> Modifying files in the `src/app/` directory will change the routing structure of your portfolio.

> [!CAUTION]
> Deleting files in `public/` or `content/` directories cannot be undone and may break your portfolio.

