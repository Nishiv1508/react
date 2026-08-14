function Total({ amount, firstTipValue, secondTipValue }) {
  return (
    <div>
      Your Bill is{" "}
      {Number(amount) +
        Number((((firstTipValue + secondTipValue) / 2) * amount) / 100)}
    </div>
  );
}

export default Total;
