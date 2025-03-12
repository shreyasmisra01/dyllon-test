// app/layout.tsx

import { Geist, Geist_Mono } from "next/font/google";
import { readFileAction } from "./actions/serverAction";
import "./globals.css";
import { headers } from "next/headers";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const host = headersList.get("host");
  const xForwardedHost = headersList.get("x-forwarded-host");

  // Use x-forwarded-host when behind a proxy.
  const resolvedHost = xForwardedHost || host;
  const readResult = await readFileAction(resolvedHost || "");

  const scriptData =
    readResult?.success &&
    typeof readResult?.data === "string" &&
    readResult?.data;

  console.log("what is script data??", scriptData);
  return (
    <html suppressHydrationWarning>
      <head>
        {/* Conditionally add the script if data is available */}
        {scriptData && <script src={scriptData} async />}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Display Toaster for notifications */}
        <Toaster />
        {children}
      </body>
    </html>
  );
}
