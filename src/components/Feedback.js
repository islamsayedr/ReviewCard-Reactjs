export default function Feedback({
  data: { clientName, clientImg, rate, comment, date },
}) {
  const container = {
    backgroundColor: "var(--white)",
    boxShadow: "var(--sh01)",
    padding: "24px",
    borderRadius: "16px",
    maxWidth: "500px",
    marginTop: "16px", // delete later
  };

  // const { clientName, clientImg, rate, comment, date } = data;
  return (
    <li style={container} className="card flx col w100 g16">
      <div className="flx w100 gAuto">
        <div className="flx rowM g8 fil">
          <img src={clientImg} alt={clientName}></img>
          <h3 className="h3">{clientName}</h3>
        </div>
        <div className="flx rowM g4">
          <span className="p">{rate}</span>
          <img
            src={rate >= 4 ? "./assets/star.svg" : "./assets/star2.svg"}
            alt="star"
          ></img>
        </div>
      </div>
      <p className="p fil gry100">{comment}</p>
      <span className="sub gry40">{date}</span>
    </li>
  );
}

// export default Feedback;
