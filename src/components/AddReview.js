import { useState } from "react";

export default function AddReview({ onSubmition }) {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(0);
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
        <div
          className="flx row g8 p16 rowC"
          style={{
            backgroundColor: "#fff",
            borderRadius: "32px",
            margin: "0 0 16px 0",
          }}
        >
          {Array.from({ length: 5 }, (_, i) => i + 1).map((num, i) => (
            <span
              key={i}
              className="star"
              style={{
                height: "24px",
                width: "24px",
                color: i < rate && "var(--yellow)",
              }}
              onClick={() => setRate(i + 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>

              {/* <Star color={i < rate ? "var(--yellow)" : "var(--black)"} /> */}
            </span>
          ))}
          <p>({rate})</p>
        </div>
        {/* <select value={rate} onChange={(e) => setRate(Number(e.target.value))}>
          {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
              _Stars
            </option>
          ))}
          <option></option>
        </select> */}

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
