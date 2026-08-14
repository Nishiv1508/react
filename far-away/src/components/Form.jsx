import { useState } from "react";

function Form({ onAddItems, itemArray }) {
  const [desc, setDesc] = useState("");
  const [qty, setqty] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc) {
      alert("Empty field detected");
      return;
    }

    let l = Object.keys(itemArray).length;
    const newItem = { desc, qty, packed: false, id: l + 1 };

    onAddItems(newItem);

    setDesc("");
    setqty(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={qty} onChange={(e) => setqty(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
