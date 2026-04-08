import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Smart Story Calendar — Capture Your Moments" },
      { name: "description", content: "A beautiful interactive calendar to capture moments, plan ahead, and tell your story one day at a time." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Smart Story Calendar — Capture Your Moments" },
      { property: "og:description", content: "A beautiful interactive calendar to capture moments, plan ahead, and tell your story one day at a time." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d95935fc-9470-4576-a076-30d0c4d9aaa1/id-preview-9f4c777f--a5bff41e-6b02-40de-acd3-f222c1f48e9c.lovable.app-1775647058419.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d95935fc-9470-4576-a076-30d0c4d9aaa1/id-preview-9f4c777f--a5bff41e-6b02-40de-acd3-f222c1f48e9c.lovable.app-1775647058419.png" },
      { name: "twitter:title", content: "Smart Story Calendar — Capture Your Moments" },
      { name: "twitter:description", content: "A beautiful interactive calendar to capture moments, plan ahead, and tell your story one day at a time." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
