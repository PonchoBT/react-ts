interface ItemProps {
  id: number;
  clicks: number;
  onClick: () => void;
}

function Item({ id, clicks, onClick }: ItemProps) {
  return (
    <div className="item" onClick={onClick}>
      {id} - clicked {clicks} times
    </div>
  );
}

export default Item;