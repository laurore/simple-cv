
import type { Metadata } from "next";
import "./ui/globals.css";
import Router from "./router";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My simple portfolio project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Router></Router>
        </header>
        {children}
      </body>
    </html>
  );
}
