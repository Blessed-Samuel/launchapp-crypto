import React from "react";
import Banner from '@/components/Banner';
import Container from "@/components/Container";
import Earn from "@/components/Earn";

export default function Home() {
  return (
    <Container>
      <main>
        <div className="flex flex-col">
          <Banner />
          <Earn />
        </div>
      </main>
    </Container>
  );
}
