
import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button"
import "./item.css";
function Item({marca,imgcar,modelo,id,color}){
    const urlDetail = `/detail/${id}`;
    return(
        <div className="cards">
           
            <div className="card-text">
                <h3>{marca}</h3>
                <p>{modelo}</p>
            </div> 
            <div className="card-img">
                <img src={imgcar} alt="tom's cars" />
            </div>
            <Link to={urlDetail}>
                <Button color={color}>Ver mas</Button>
            </Link>
        </div>
    )
}
export default Item;