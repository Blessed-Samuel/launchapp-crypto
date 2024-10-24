import React from "react";
import HomeRoot from "@/app/home/page";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <main>
        <div className="flex flex-col">
          <HomeRoot />
        </div>
      </main>
    </Container>
  );
}
