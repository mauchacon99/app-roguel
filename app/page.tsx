"use client";

import { useState } from "react";
import { Nav } from "./components/layout/Navbar";
import { Feature } from "./components/sections/Feature";
import { Gallery } from "./components/sections/Gallery";
import { Book } from "./components/sections/Book";
import { Footer } from "./components/layout/Footer";

export default function Page() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      {/*  home section */}
      <Nav />
      {/*  home section //nd  */}

      {/*  feature section */}
      <Feature />
      {/* feature section //end*/}

      {/* gallery section */}
      <Gallery />
      {/* gallery section //end  */}
      
      {/* book section  */}
      <Book />
      {/* book section //end */}

      {/* footer */}
      <Footer />
    </>
  );
}
