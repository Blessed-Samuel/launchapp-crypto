import Navbar from "@/components/Navbar";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} bg-[#111] bg-[url('/Crypto-Background.svg')] bg-no-repeat w-full h-full bg-cover overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        <main className='mt-8'>{children}</main>
      </body>
    </html>
  );
}
