import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://coinary.crypto.com/"),
  title: "coinary-crypto - crypto | Defi | NFTs | blockchain",
  description:
    "Ready to energize your life and turn it into earnings? With Move to Earn, your steps hold real value. Simply walk, run, or exercise to earn. Each step matters.",
  keywords: [
    "Cryptocurrency",
    "Blockchain",
    "Crypto Portfolio",
    "DeFi",
    "Ethereum",
    "Bitcoin",
    "Crypto Trading",
    "Crypto Wallet",
    "Smart Contracts",
    "NFTs",
    "Decentralized Finance",
    "Web3",
    "Crypto Mining",
    "Cryptography",
    "Crypto Security",
  ],
  openGraph: {
    title: "coinary - crypto - crypto | Defi | NFTs | blockchain",
    description:
      "Ready to energize your life and turn it into earnings? With Move to Earn, your steps hold real value. Simply walk, run, or exercise to earn. Each step matters.",
  },
  alternates: {
    canonical: "https://coinary.crypto.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] bg-[url('/Crypto-Background.svg')] bg-no-repeat w-full h-full bg-cover overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
