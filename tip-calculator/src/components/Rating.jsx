function Rating({ question, setTipValue }) {
  return (
    <div>
      <span>{question}</span>
      <select
        onChange={(e) => {
          setTipValue(Number(e.target.value));
        }}
      >
        <option value="0">Bad (0%)</option>
        <option value="10">Good (10%)</option>
        <option value="20">Amazing (20%)</option>
      </select>
    </div>
  );
}

export default Rating;
