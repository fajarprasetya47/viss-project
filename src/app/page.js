'use client';

import Deals from "@/components/deals";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Headers from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Subscribe from "@/components/subscribe";
import Trend from "@/components/trend";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [headerChange, setHeaderChange] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHeaderChange(true)
      } else {
        setHeaderChange(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <Box>
      <Headers />
      <Hero />
      <Services />
      <Trend />
      <Deals />
      <FAQ />
      <Subscribe />
      <Footer />
      {headerChange && (
        <Fab
          size="small"
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24
          }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            })
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      )}
    </Box>
  );
}
