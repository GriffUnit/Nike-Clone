import {
  Hero,
  PopularProducts,
  Services,
  CustomerReviews,
  Subscribe,
  SpecialOffer,
  SuperQuality,
  Footer,
} from "./Sections";
import Nav from "./Components/Nav";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const toggleColor = (colorState) => (colorState ? "Dark" : "Light");
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <main className="relative">
        <Nav
          theme={() => setDarkMode(!darkMode)}
          toggleColor={toggleColor}
          colorState={darkMode}
        />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm: py-16 w-full">
          <Subscribe />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
