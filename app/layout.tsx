import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "Propertify",
  description: "great property management services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className=" max-w-[1440px] mx-auto -mt-12 bg-white">
        {children}
        </main>
        </body>
    </html>
  );
}
