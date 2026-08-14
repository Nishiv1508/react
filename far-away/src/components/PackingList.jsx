import { useState } from "react";
import Item from "./Item";

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

export default PackingList;
