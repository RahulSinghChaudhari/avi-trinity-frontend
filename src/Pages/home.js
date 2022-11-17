import React from "react";
import Heros from "../Components/Heros";
import OurClient from "../Components/ourClient";
import Team from "../Components/team";
import Foooter from "../Components/Foooter";

export default function Home() {
  return (
    <>
    <div>
      <Heros />
      <OurClient />
      <Team />
      <Foooter />
      </div>
    </>
    
  );
}
