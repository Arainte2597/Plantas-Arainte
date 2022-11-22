import { useState, useEffect } from "react";
import Item from "./item";
import "./item.css";
import getItems from "../mockServise";

import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [productos, setProducts] = useState([]);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    let respuesta = await getItems(idCategory);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  return (
    <div className="item-list">
      {productos.map((producto) => {
        return (
          <Item
            key={producto.id}
            id={producto.id}
            imgcar={producto.imgcar}
            modelo={producto.modelo}
            marca={producto.marca}
            color="darkgreen"
          />
        );
      })}
    </div>
  );
}

export default ItemListContainer;