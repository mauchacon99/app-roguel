import { Feature } from "./components/sections/Feature";
import { Gallery } from "./components/sections/Gallery";
import { Book } from "./components/sections/Book";
import { Footer } from "./components/layout/Footer";
import { Home } from "./components/sections/Home";

export default function Page() {
  return (
    <>
      <Home />
      <Gallery />
      <Feature />
      <Book />
      <Footer />
    </>
  );
}
