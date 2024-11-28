import { useState } from "react";

function TestModal({ onCancel, onConfirm }) {
  return (
    <div>
      <h4>میخوای حذف بشه؟</h4>
      <div>
        <button onClick={onConfirm}>yes</button>
        <button onClick={onCancel}>no</button>
      </div>
    </div>
  );
}

function List() {
  const [items, setItems] = useState([]);
  const [selectedDelete, setSelectedDelete] = useState(null);

  const onSelectItem = (item) => {
    setSelectedDelete(item);
  };

  const onCancel = () => {
    setSelectedDelete(null);
  };

  const onConfirm = () => {
    setItems((prev) =>
      prev.filter((item) => item.phone !== selectedDelete.phone)
    );
    setSelectedDelete(null);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.phone}>
            {item.phone}
            <button onClick={() => onSelectItem(item)}>delete</button>
          </li>
        ))}
      </ul>
      {selectedDelete && (
        <TestModal onCancel={onCancel} onConfirm={onConfirm} />
      )}
    </div>
  );
}
