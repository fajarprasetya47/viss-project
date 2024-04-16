'use client';

import Deals from "@/components/deals";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Headers from "@/components/header";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Services from "@/components/services";
import Subscribe from "@/components/subscribe";
import Trend from "@/components/trend";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Headers/>
      <Hero/>
      <Services/>
      <Trend/>
      <Deals/>
      <FAQ/>
      <Subscribe/>
      <Footer/>
    </>
  );
}
