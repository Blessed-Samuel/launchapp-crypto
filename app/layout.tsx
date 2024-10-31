import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] bg-[url('/Crypto-Background.svg')] bg-no-repeat w-full h-full bg-cover overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        <main className='mt-16'>{children}</main>
      </body>
    </html>
  );
}
