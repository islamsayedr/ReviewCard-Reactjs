import { useState } from "react";

export default function AddReview({ onSubmition }) {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);
  const [clientName, setclientName] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    if (!clientName) {
      return alert("add your name");
    }
    if (!rate) {
      return alert("add star rate");
    }
    if (!comment) {
      return alert("add comment");
    }

    const response = {
      clientName,
      clientImg: "./assets/customer2.png",
      comment,
      rate,
      date: today,
    };
    onSubmition(response);
    setclientName("");
    setRate(1);
    setComment("");
  };

  return (
    <>
      <h3 className="flx rowC">Add Feedback</h3>

      <form className="flx col p16 " onSubmit={handleForm}>
        <input
          type="text"
          placeholder="write your name..."
          value={clientName}
          onChange={(e) => setclientName(e.target.value)}
        ></input>
        <select value={rate} onChange={(e) => setRate(Number(e.target.value))}>
          {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
              _Stars
            </option>
          ))}
          <option></option>
        </select>

        <textarea
          placeholder="write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <button className="active rowC ">Submit</button>
      </form>
    </>
  );
}
