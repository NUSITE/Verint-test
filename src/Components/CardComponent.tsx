import { Link } from "react-router-dom";
import {StoreItem} from "../Interfaces";

interface ICardProps {
  item: StoreItem;
}
function CardComponent(props: ICardProps) {
  const { item } = props;
  return (
    <div className="store-item">
      <img src={item.itemImg} alt={item.itemName} />
      <div className="store-item-details">
        <h3>{item.itemName}</h3>
        <div>{item.itemDescription}</div>
        <div className="price-details">
          <div className="actual-price">${item.itemActualPrice}</div>
          <div className="suggested-price">${item.itemSuggestedPrice}</div>
          <div className="discount">({item.itemPercentageDiscount}%)</div>
        </div>
        <div>
          {/* <button className="primary-button">Buy</button> */}
          <Link to="/orders" className="primary-button" state={item}>
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
