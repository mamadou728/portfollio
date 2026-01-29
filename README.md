# My Portfolio

Next.js App Router portfolio. Structure:

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Global font & metadata
│   ├── page.tsx            # Landing (assembles sections)
│   ├── globals.css         # Tailwind & global animations
│   └── projects/[slug]/
│       └── page.tsx        # Case study pages
├── components/
│   ├── ui/                 # Button, Badge, Card
│   ├── sections/           # Hero, ProjectGallery, JourneyPath, TheOrbit, Footer
│   └── animations/         # FloatingElement, FlipCard
├── data/                   # projects, skills, timeline, quotes
├── lib/utils.ts            # cn() for Tailwind
└── public/images/          # mamadou-profile.jpg, projects/*.png, icons/
```

**Setup:** `npm install` then `npm run dev`.

**Assets to add later:** `mamadou-profile.jpg`, `projects/yes-resume-cover.png`, `projects/lexi-rag-cover.png`, `icons/` as needed.
