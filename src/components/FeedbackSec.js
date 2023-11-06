import Feedback from "./Feedback";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function FeedbackSec({reviews}) {
  const [num, setNum] = useState(0);

  const handleNext = () => {
    num < reviews.length - 1 && setNum((num) => num + 1);
  };
  const handlePrev = () => {
    num > 0 && setNum((num) => num - 1);
  };
  return (
    <>
      <h1 className="flx rowC">Feedbacks ({reviews.length})</h1>
      <ul className="flx g16 w100 rowC">
        <Feedback data={reviews[num]} key={reviews[num].clientName} />
        {/* {reviews.map((review) => (
          <Feedback data={review} key={review.clientName}/>
          ))} */}
      </ul>
      <div className="flx row rowC rowM p16 g8">
        <button className={num > 0 ? "active" : ""} onClick={handlePrev}>
          <ChevronLeft size={24} />
        </button>
        <div className="flx g8 p16 rowC">
          {reviews.map((review, index) => (
            <span
              key={index}
              className={`flx dot ${num === index ? "active" : ""}`}
            ></span>
          ))}
        </div>
        <button
          className={num < reviews.length - 1 ? "active" : ""}
          onClick={handleNext}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </>
  );
}

