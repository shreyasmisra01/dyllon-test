// app/layout.tsx
"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { readFileAction } from "./actions/serverAction";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scriptData, setScriptData] = useState<string | false>();
  useEffect(() => {
    const getFileFromServer = async () => {
      const resolvedHost = window.location.host;
      const readResult = await readFileAction(resolvedHost || "");

      const script =
        readResult?.success &&
        typeof readResult?.data === "string" &&
        readResult?.data;
      console.log("what is script data??", script);

      setScriptData(script);
    };

    getFileFromServer();
  }, []);

  useEffect(() => {
    console.log("what is script data??", scriptData);
    document.documentElement.setAttribute('xml:lang', 'fr');
  }, []);

  return (
    <html  lang="en" suppressHydrationWarning>
      <head>
        {/* Conditionally add the script if data is available */}
        {scriptData && <script src={scriptData} async />}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Display Toaster for notifications */}
        <Toaster />
        {scriptData}
        {children}
      </body>
    </html>
  );
}
