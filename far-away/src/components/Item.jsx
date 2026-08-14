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

export default Item;
