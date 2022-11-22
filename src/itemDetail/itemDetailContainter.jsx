import { useState, useEffect } from "react";

import {getSingleItem} from "../mockServise";

import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail";



function ItemDetailContainer() {
  const [productos, setProducts] = useState([]);
  const { idItem } = useParams();

  async function getItemsAsync() {
    let respuesta = await getSingleItem(idItem);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return <ItemDetail productos={productos} />
  
}

export default ItemDetailContainer;