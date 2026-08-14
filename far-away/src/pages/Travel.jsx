import { useState } from "react";
import Logo from "../components/Logo";
import Form from "../components/Form";
import PackingList from "../components/PackingList";
import Stats from "../components/Stats";
import FlashCards from "../components/FlashCards";

function Travel() {
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

export default Travel;
