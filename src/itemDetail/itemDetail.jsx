import "./itemdetail.css";

function ItemDetail({productos}){
    return(

        <div className="card-detail">
           
            <div className="card-detail_detail" >
                <h2>{productos.marca}</h2>
                <p>{productos.modelo}</p>
            </div> 
            <div className="card-detail_img">
                <img src={productos.imgcar} alt="tom's cars"/>
            </div>
        </div>
    )
}
export default ItemDetail;