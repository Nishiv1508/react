import { useState } from "react";
import "./styles.css";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function onPackedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} itemArray={items} />
      <PackingList
        item={items}
        setItems={setItems}
        onDeleteItem={handleDeleteItem}
        onPackedItem={onPackedItem}
      />
      <Stats items={items} />
      <FlashCards />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}

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

function PackingList({ item, setItems, onDeleteItem, onPackedItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = item;

  if (sortBy === "description")
    sortedItems = item.slice().sort((a, b) => b.desc.length - a.desc.length); //slice is used as it returns a new array so, we do not change the og array

  if (sortBy === "packed")
    sortedItems = item.slice().sort((a, b) => Number(a.packed - b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onPackedItem={onPackedItem}
              key={item.id}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => setItems([])}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onPackedItem }) {
  //can also written props and then get as props.item

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onPackedItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.qty} {item.desc}
      </span>
      <button style={{ color: "red" }} onClick={() => onDeleteItem(item.id)}>
        X
      </button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list </em>
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go"
          : `You have ${numItems} items on your list, and you already packed${" "}
        ${packedItems} (${percentage})%`}
      </em>
    </footer>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (key) => {
    setSelectedId(key !== selectedId ? key : null);
  };

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
