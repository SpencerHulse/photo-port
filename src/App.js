import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import About from "./components/About";
import ContactForm from "./components/Contact";

function App() {
  const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  // App-level state that uses the categories setter to hold the array and default to commercial
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {/* Tertiary if/else statement */}
        {!contactSelected ? (
          /* <> and </> are React fragments that allow multiple elements 
          to be grouped since JSX can only return a single element */
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
