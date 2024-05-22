 
import { Nav } from "./components/layout/Navbar";
import { Feature } from "./components/sections/Feature";
import { Gallery } from "./components/sections/Gallery";
import { Book } from "./components/sections/Book";
import { Footer } from "./components/layout/Footer";
import { Home } from "./components/sections/Home";

export default function Page() {
 
  return (
    <>
      {/*  home section //nd  */}

      <Home />

      {/* gallery section */}
      <Gallery />
      {/*  feature section */}
      <Feature />
      {/* feature section //end*/}

      {/* gallery section //end  */}

      {/* book section  */}
      <Book />
      {/* book section //end */}

      {/* footer */}
      <Footer />
    </>
  );
}
