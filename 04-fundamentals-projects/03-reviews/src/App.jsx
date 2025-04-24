import people from "./data";
import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    // setIndex((index + 1) % people.length);
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex > people.length - 1) {
        return 0;
      }
      return newIndex;
    });
  }
  const prevPerson = () => {
    // setIndex((index - 1 + people.length) % people.length);
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex > people.length - 1) {
        return 0;
      }
      return newIndex;
    });
  }
  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(randomIndex);
  }
  
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={nextPerson}>
            <FaChevronCircleLeft />
          </button>
          <button className="next-btn" onClick={prevPerson}>
            <FaChevronCircleRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Surprise Me
        </button>
      </article>
    </main>
  );
  
};
export default App;
