import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import { ThemeModeScript } from "flowbite-react";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body ">
        <div className=" w-full flex   justify-center">
          <div className="max-w-[1440px] flex-col">{children}</div>
        </div>
      </body>
    </html>
  );
}
