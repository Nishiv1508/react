import { useState } from "react";
import Bill from "../components/Bill";
import Rating from "../components/Rating";
import Total from "../components/Total";

function TipPage() {
  const [amount, setAmount] = useState("");
  const [firstTipValue, setFirstTipValue] = useState("");
  const [secondTipValue, setSecondTipValue] = useState("");

  return (
    <>
      <Bill amount={amount} setAmount={setAmount} />
      <Rating
        question="How much you liked the food?"
        setTipValue={setFirstTipValue}
      />
      <Rating
        question="How much your friend liked the food?"
        setTipValue={setSecondTipValue}
      />
      <Total
        amount={amount}
        firstTipValue={firstTipValue}
        secondTipValue={secondTipValue}
      />
    </>
  );
}

export default TipPage;
