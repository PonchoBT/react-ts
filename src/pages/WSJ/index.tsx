import { useState } from "react";
import "./wsj.css";
import Button from "./Button";
import Item from "./Item";

function WSJ() {
  const [items, setItems] = useState([{ id: 1, clicks: 0 }]);

  const handleAddItem = () => {
    setItems([...items, { id: items.length + 1, clicks: 0 }]);
  };

  const handleClearAll = () => {
    setItems([]);
  };

  const handleReverseOrder = () => {
    setItems([...items].reverse());
  };

  const handleItemClick = (item:any) => {
    const updatedItems = [...items];
    const itemIndex = updatedItems.findIndex((i) => i.id === item.id);
    updatedItems[itemIndex] = { ...item, clicks: item.clicks + 1 };
    setItems(updatedItems);
  };

  return (
    <div>
      <Button text="Add Item" onClick={handleAddItem} />
      <Button text="Clear All" onClick={handleClearAll} />
      <Button text="Reverse Order" onClick={handleReverseOrder} />
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          clicks={item.clicks}
          onClick={() => handleItemClick(item)}
        />
      ))}
    </div>
  );
}

export default WSJ;
