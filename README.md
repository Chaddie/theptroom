# The PT Room

Public site for [The PT Room](https://theptroom.co.uk), Karl Morris’s private training studio in St Helens. Rebuilt as a static Next.js app so it can be hosted on Vercel.

## Pages

- `/` home
- `/training` one-to-one, small groups, strength & conditioning, weight management, group training
- `/about`
- `/testimonials`
- `/gallery`
- `/blog` and `/blog/[slug]`
- `/contact`
- `/privacy`

Old WordPress paths redirect: `/home` → `/training`, `/about-us` → `/about`, and each former root-level post URL → `/blog/[slug]`.

## Facts held as published

- Address: 60 North John Street, St Helens, WA10 2JT
- Phone: 01744 734529
- Email: info@theptroom.co.uk
- Trainer: Karl Morris
- Consultation is free
- No prices and no weekly hours are published, because the live WordPress site does not list them

The old meta description also showed 01744 747003. That number is not on the pages. Confirm it before using it anywhere.

## Scripts

```bash
npm install
npm run dev
npm run build
npm start
```

Next.js 16. Turbopack is the default for `dev` and `build`. `params` on dynamic pages are async.

The contact form opens the visitor’s email app. It does not need a server or an API key.

## Vercel

Import this GitHub repository in Vercel. Framework preset: Next.js. Production branch: `main`. No environment variables are required.
