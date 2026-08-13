import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "Steve Walker — In Loving Memory",
    description: "Celebrating the life, love, and lasting legacy of Steve Walker.",
    openGraph: {
      title: "Steve Walker — In Loving Memory",
      description: "A loving father, a loyal friend, and the heart of our family.",
      images: [{ url: "/og.png", width: 1731, height: 909, alt: "In loving memory of Steve Walker, 1954–2024" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Steve Walker — In Loving Memory",
      description: "A loving father, a loyal friend, and the heart of our family.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
