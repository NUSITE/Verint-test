import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeComponent from './Components/HomeComponent';
import {StoreItem} from './Interfaces';
import Store from "./StoreItems.json";
import OrdersComponent from './Components/OrdersComponent';
import ConfirmOrderComponent from './Components/ConfirmOrderComponent';

function App() {

  const [itemsList, setItemsList] = useState<StoreItem[]>([]);
  const storeItemsData = Store.storeItems;
  useEffect(() => {
    console.log("Store Data", Store);
    setItemsList(Store.storeItems as StoreItem[]);
  }, []);

  const filterList = (value: string) => {
    const filteredData = storeItemsData.filter(elem => elem.itemName.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    setItemsList(filteredData);
  }

  const updateSort = (type: string) => {
    let items = [...itemsList];
    if (type === "ASC") {
      items.sort((a, b) => {
        return a.itemName.toLowerCase().localeCompare(b.itemName.toLowerCase());
      })
      setItemsList(items);
    } else if (type === "DESC") {
      items.sort((a, b) => {
        return a.itemName.toLowerCase().localeCompare(b.itemName.toLowerCase());
      });
      items.reverse();
      setItemsList(items);
    } else if (type === "LTH") {
      items.sort((a, b) => {
        return a.itemSuggestedPrice - b.itemSuggestedPrice;
      })
      setItemsList(items);
    } else {
      items.sort((a, b) => {
        return b.itemSuggestedPrice - a.itemSuggestedPrice;
      })
      setItemsList(items);
    }
  }

  return (
    <div className="App">
      <header>
        <h2>Online Store</h2>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeComponent storeItemsList={itemsList} onFilterChange={filterList} onSortClick={updateSort} />} />
            <Route path='/orders' element={<OrdersComponent />} />
            <Route path='/confirm-order' element={<ConfirmOrderComponent />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer>
        footer content
      </footer>
    </div>
  );
}

export default App;
