import React from "react";
import { Link } from "react-router-dom";
import {StoreItem} from "../Interfaces";
import CardComponent from "./CardComponent";

interface IHomeProps {
  storeItemsList: StoreItem[];
  onFilterChange: Function;
  onSortClick: Function;
}

function HomeComponent(props: IHomeProps) {
  const { storeItemsList, onFilterChange, onSortClick } = props;

  const onSearchChange = (event: { target: { value: any } }) => {
    onFilterChange(event.target.value);
  };

  const onSortingClick = (type: string) => {
    onSortClick(type);
  }

  return (
    <div className="home-page">
      <div className="search-sort">
        <div className="search-filter">
          <label>Filter Items: </label>
          <input
            type="search"
            name="search-list"
            id="Search-list"
            placeholder="search for an item"
            onChange={onSearchChange}
          />
        </div>
        <div className="sort-options">
            <button className="btn-link" onClick={() => onSortingClick("ASC")}>Ascending by Name</button>
            <button className="btn-link" onClick={() => onSortingClick("DESC")}>Descending by Name</button>
            <button className="btn-link" onClick={() => onSortingClick("LTH")}>Price: Low to High</button>
            <button className="btn-link" onClick={() => onSortingClick("HTL")}>Price: High to low</button>
        </div>
      </div>
      <div className="items-list">
        {storeItemsList &&
          storeItemsList.length > 0 &&
          storeItemsList.map((elem) => <CardComponent item={elem} />)}
      </div>
    </div>
  );
}

export default HomeComponent;
