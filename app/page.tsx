import React from "react";
import Banner from "@/components/Banner";
import Earn from "@/components/Earn";
import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://coinary.crypto.com/"),
  title: 'Home | LaunchApp-Crypto',
  description: 'With Move to Earn, your steps hold real value. Simply walk, run, or exercise to earn.',
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
}

export default function Home() {
  return (
    <>
      <section>
        <Container>
          <Banner />
          <Earn />
        </Container>
      </section>
    </>
  );
}
