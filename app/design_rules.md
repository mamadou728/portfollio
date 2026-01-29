# Design System & Philosophy

## Aesthetics
* **Bold Simplicity:** Prioritize intuitive navigation to create frictionless experiences.
* **Breathable Whitespace:** Use strategic color accents complemented by generous whitespace for visual hierarchy.
* **Cognitive Breathing Room:** Calibrate negative space to prioritize content and reduce cognitive load.
* **Systematic Color Theory:** Apply subtle gradients and purposeful accent placement.
* **Typography Hierarchy:** Utilize weight variance and proportional scaling for clear information architecture.
* **Visual Density:** Optimize to balance information availability with cognitive load management.
* **Motion Choreography:** Implement physics-based transitions for spatial continuity (see Tech Stack specifics).
* **Accessibility-Driven Contrast:** Ensure universal usability with high contrast ratios and intuitive navigation patterns.
* **Feedback Responsiveness:** Communicate system status via state transitions with minimal latency.
* **Content-First:** Prioritize user objectives over decorative elements for task efficiency.

## Considerations
* **User Goals:** Design to make primary tasks seamless and efficient.
* **Information Architecture:** Organize content in a logical hierarchy matching users' mental models.
* **Progressive Disclosure:** Reveal complexity gradually; do not overwhelm the user.
* **Visual Hierarchy:** Use size, color, contrast, and positioning to guide attention.
* **Affordances:** Ensure interactive elements are clearly identifiable.
* **Consistency:** Maintain uniform patterns across screens to reduce cognitive load.
* **Accessibility:** Support all abilities (screen readers, keyboard nav, color contrast).
* **Error Prevention:** Design to avoid mistakes before they happen.
* **System Feedback:** Provide clear signals for success, failure, and loading states.
* **Performance:** Account for loading times; design appropriate loading skeletons/states.
* **Responsive Design:** Adapt layouts for mobile, desktop, and varying orientations.
* **Platform Conventions:** Follow established web patterns to meet user expectations.
* **Microcopy:** Use clear, concise text to guide the user.

## Technical Implementation (Next.js / Tailwind / Framer Motion)
* **Motion:** Use Framer Motion `spring` physics for "Motion choreography" rather than linear tweens.
    * *Default transition:* `{ type: "spring", stiffness: 300, damping: 30 }`
* **Typography:** Use Tailwind's logical scaling (e.g., `text-xl`, `font-semibold`, `tracking-tight`) to enforce "Typography hierarchy."
* **Whitespace:** Enforce "Breathable whitespace" using Tailwind's spacing scale (e.g., `gap-8`, `py-12`, `px-6`).
* **Glassmorphism/Gradients:** Implement "Systematic color theory" using Tailwind `backdrop-blur` and `bg-gradient-to-r`.


## Modern Implementation Patterns
### Layout & Composition
* **Bento Grid Architecture:** Use CSS Grid with variable row/column spans (`col-span-2`, `row-span-2`) to create modular, cellular layouts for project showcases and "About Me" widgets.
* **Island Navigation:** encapsulate navigation in a floating, centered "island" with `backdrop-blur` rather than a full-width sticky navbar.
* **Asymmetric Balance:** Avoid perfectly symmetrical layouts; use offset typography and image placement to create visual tension and interest.

### Interaction & Depth
* **Scroll-Linked Motion:** Use `framer-motion` `useScroll` and `useTransform` to drive opacity, scale, and y-position based on scroll progress (Scrollytelling).
* **Luminous Borders:** Avoid generic borders; use gradient borders or "shine" effects that track the mouse cursor to indicate interactivity.
* **Depth over Shadow:** Create elevation using multiple layers of varying opacity and blur (`backdrop-blur-md`, `backdrop-blur-xl`) rather than heavy drop shadows.

### Typography & Content
* **Display vs. UI Type:** distinct separation between "Display" (Headings, massive scale) and "UI" (Labels, functional text, mono-spaced data).
* **Code-First Aesthetic:** Since this is a CS portfolio, style code blocks as first-class citizens with syntax highlighting, line numbers, and copy-to-clipboard functionality.

### Dark Mode Specifics
* **Subtle Backgrounds:** Avoid pure black (`#000000`); use rich dark grays (e.g., `#0A0A0A`) to reduce eye strain and allow shadows to be visible.
* **Muted Text:** Use text colors like `text-zinc-400` or `text-gray-500` for secondary information to create instant visual hierarchy against white/bright headings.