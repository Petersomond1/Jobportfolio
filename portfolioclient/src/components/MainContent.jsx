import React from "react";
import Cards from "./Cards";
import Book from "./Book";
import Library from "./Library";
import "./MainContent.css";
import "../App.css";
import Book3d from "../components43d/Book3d"; // Import the 3D book component
import PortfolioMemoryGame from "./PortfolioMemoryGame"; // Import the memory game component

const MainContent = ({ videoTransitioned }) => {
  if (!videoTransitioned) return null;

  // Handle book click to scroll to Book1 section
  const handleBookClick = (bookIndex) => {
    const bookSection = document.getElementById("book-section");
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    < >
      {/* Portfolio Cards Section */}
      <Cards />
      <hr className="hr" style={{ marginTop: "25px", marginBottom: "25px" }} />
      {/* Portfolio Memory Game Section */}
      <PortfolioMemoryGame />
      {/* Library Section */}
      <Library onBookClick={handleBookClick} />
      <hr className="hr" style={{ marginTop: "25px", marginBottom: "25px" }} />
      <section style={{ height: "650px" }} id="book-section">
      <Book3d />
      </section>
      <hr className="hr" style={{ marginTop: "25px", marginBottom: "25px" }} />
      {/* <div className='container'> */}
      <Book />
      <hr className="hr" style={{ marginTop: "25px", marginBottom: "25px" }} />
      {/* About Section */}
      <section>
       
      </section>
    </>
  );
};

export default MainContent;
