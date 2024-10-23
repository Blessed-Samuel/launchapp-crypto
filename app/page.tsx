import React from "react";
import Banner from '@/components/Banner';
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <main>
        <div className="flex flex-col">
          <Banner />
        </div>
      </main>
    </Container>
  );
}
