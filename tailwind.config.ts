@import "tailwindcss";

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

:root {
  --card: #ffffff;
  --card-foreground: #0F1114;
  --popover: #ffffff;
  --popover-foreground: #0F1114;
  --primary: #0969D9;
  --primary-foreground: #ffffff;
  --secondary: #F0F0F0;
  --secondary-foreground: #0969D9;
  --muted: #F0F0F0;
  --muted-foreground: #5D6066;
  --accent: #F0F0F0;
  --accent-foreground: #0969D9;
  --destructive: #EA2839;
  --destructive-foreground: #ffffff;
  --border: #E2E2E2;
  --input: #E2E2E2;
  --ring: #BCBDBC;
  --chart-1: #0E97BF;
  --chart-2: #00cda6;
  --chart-3: #31353D;
  --chart-4: #0969D9;
  --chart-5: #0969D9;
  --radius: 0.625rem;
  --sidebar: #ffffff;
  --sidebar-foreground: #0F1114;
  --sidebar-primary: #0969D9;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #F0F0F0;
  --sidebar-accent-foreground: #0969D9;
  --sidebar-border: #E2E2E2;
  --sidebar-ring: #BCBDBC;
  --background: #ffffff;
  --foreground: #0F1114;
  --font-sans: 'Sora', sans-serif;
}

.dark {
  --background: #0F1114;
  --foreground: #ffffff;
  --card: #0F1114;
  --card-foreground: #ffffff;
  --popover: #0F1114;
  --popover-foreground: #ffffff;
  --primary: #ffffff;
  --primary-foreground: #0969D9;
  --secondary: #31353D;
  --secondary-foreground: #ffffff;
  --muted: #31353D;
  --muted-foreground: #BCBDBC;
  --accent: #31353D;
  --accent-foreground: #ffffff;
  --destructive: #EA2839;
  --destructive-foreground: #ffffff;
  --border: #31353D;
  --input: #31353D;
  --ring: #5D6066;
  --chart-1: #0E97BF;
  --chart-2: #00cda6;
  --chart-3: #31353D;
  --chart-4: #0969D9;
  --chart-5: #0969D9;
  --sidebar: #0969D9;
  --sidebar-foreground: #ffffff;
  --sidebar-primary: #0E97BF;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #31353D;
  --sidebar-accent-foreground: #ffffff;
  --sidebar-border: #31353D;
  --sidebar-ring: #5D6066;
}

.theme-login-one {
  --primary: #CE2A2D;
  --primary-foreground: #ffffff;
  --ring: #ce2a2d9c;
  --radius: 0rem;
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  font-family: var(--font-sans);
  a {
    color: var(--primary);
  }
  [data-slot="card"] {
    border-radius: 0rem;
    box-shadow: none;
  }
}

.theme-login-two {
  --primary: #0969D9;
  --primary-foreground: #ffffff;
  --ring: #0969d99c;
  font-family: var(--font-sans);
  a {
    color: var(--primary);
  }
}

.theme-login-three {
  --primary: #00CDA6;
  --primary-foreground: #000;
  --ring: #00CDA6;
  --radius: 1.5rem;
  font-family: var(--font-sans);
  a {
    color: var(--primary);
  }
  [data-slot="card"] {
    @apply shadow-xl;
  }
  [data-slot="input"] {
    @apply dark:bg-input;
  }
}

@theme inline {
  --font-sans: 'Sora', sans-serif;
  --font-mono: var(--font-geist-mono);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: 100px;
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;

  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes accordion-up {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground font-sans;
  }
  .btn-secondary {
    @apply bg-white text-primary border border-[#3e9af5] rounded-full;
  }
  .btn-primary {
    @apply bg-primary text-primary-foreground border-none rounded-full;
  }
  .btn-destructive {
    @apply bg-destructive text-destructive-foreground border-none rounded-full;
  }
  .btn-accent {
    @apply bg-accent text-accent-foreground border-none rounded-full;
  }
}
