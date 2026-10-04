import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "metaCAMPUS — Decentralized Transcripting on Algorand";
const DESCRIPTION =
  "metaCAMPUS puts transcript fingerprints on Algorand and leaves student records off-chain. Own your file, mint course badges, and let anyone verify integrity in seconds.";

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "metaCAMPUS",
  url: "https://www.metacampus.org",
  description: DESCRIPTION,
  sameAs: [
    "https://github.com/metacampus-org",
    "https://metacampusblog.wordpress.com",
  ],
});

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "metaCAMPUS" },
      { name: "theme-color", content: "#101814" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Newsreader:wght@500;600;700&display=swap",
      },
    ],
    scripts: [{ type: "application/ld+json", children: jsonLd }],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
