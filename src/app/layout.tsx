import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "The Anatomy of Fear — A field guide to horror",
    template: "%s · The Anatomy of Fear",
  },
  description:
    "Experience fear. Understand its construction. An interactive archive of horror psychology, film analysis, and writing craft.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
