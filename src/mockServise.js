import Productos from "./data";

function getItems(idCategory){
    
    return new Promise ((resolve) =>{

        if (idCategory === undefined){

        setTimeout(() => {
            resolve(Productos)
        }, 2000);
    }
    else{
        setTimeout(() => {
            let itemsRequested = Productos.filter ((item)  => item.category ===  idCategory);
            resolve(itemsRequested )
        }, 2000);
    }

    });
}
export function getSingleItem(idParam){
    return new Promise ((resolve) =>{
            let itemRequested = Productos.find ((item)  => item.id === parseInt (idParam))

        setTimeout(() => {
            resolve(itemRequested)
        }, 2000);
    })
}
export default getItems;
