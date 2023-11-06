import ReactDOM from "react-dom/client";
import reviews from "./data";
import "./reset.css";
import "./style.css";
import FeedbackSec from "./components/FeedbackSec";
import AddReview from "./components/AddReview";
import { useState } from "react";

function App() {
  const [updatedList, setUpdatedList] = useState(reviews);
  function handleUpdatedList(response) {
    setUpdatedList([...updatedList, response]);
  }
  return (
    <>
      <FeedbackSec reviews={updatedList} />
      <AddReview  onSubmition ={handleUpdatedList} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
