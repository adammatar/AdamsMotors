import type { Metadata } from "next";
import "./globals.css";
import { Navbar , Footer, GetCode
 } from "@/components";

export const metadata: Metadata = {
  title: "ADAMS MOTORS",
  description: "Cars Dealership Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
      <Navbar />
      {children}
      <GetCode />
      <Footer />
      </body>
    </html>
  );
}
