import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mamadou Kabore - Portfolio",
  description: "Student, Software Engineer, Builder. Computer Science at Carleton University.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
