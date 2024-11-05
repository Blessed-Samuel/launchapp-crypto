import React from "react";
import Banner from "@/components/Banner";
import Earn from "@/components/Earn";
import Steps from "@/components/Steps";
import Container from "@/components/Container";
import Rarity from "@/components/Rarity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://coinary.crypto.com/"),
  title: 'Home | LaunchApp-Crypto',
  description: 'Turn every step into earnings with LaunchApp-Crypto. Join the Move-to-Earn revolution—walk, run, or exercise and watch your activity generate real rewards in crypto!',
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
          <Steps />
          <Rarity />
        </Container>
      </section>
    </>
  );
}
