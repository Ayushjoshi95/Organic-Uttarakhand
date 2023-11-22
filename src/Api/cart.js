import {serverApiUrl} from '../'


export const fetchCartItems = (callback) => 
{
    let formaData = new FormData();
    formaData.append("fetch_cart",true);
    fetch(serverApiUrl+"cart.php",{
        method: 'POST', 
        body:formaData
    }).then(response =>response.json())
    .then(response=>callback(response))
    .catch(errr=>console.log(errr))
}


export const insertInCart = (item_id,callback) => 
{
    let formaData = new FormData();
    formaData.append("insert_cart",true);
    formaData.append("item_id",item_id);
    fetch(serverApiUrl+"cart.php",{
        method: 'POST', 
        body:formaData
    }).then(response =>response.json())
    .then(response=>callback(response))
    .catch(errr=>console.log(errr))
}

export const removeFromCart = (item_id,callback) => 
{
    let formaData = new FormData();
    formaData.append("remove_wishlist",true);
    formaData.append("item_id",item_id);
    fetch(serverApiUrl+"cart.php",{
        method: 'POST', 
        body:formaData
    }).then(response =>response.json())
    .then(response=>callback(response))
    .catch(errr=>console.log(errr))
}

export const getTotalCartCost = (callback) => 
{
    let formaData = new FormData();
    formaData.append("total_cart_cost",true);
    fetch(serverApiUrl+"cart.php",{
        method: 'POST', 
        body:formaData
    }).then(response =>response.json())
    .then(response=>callback(response))
    .catch(errr=>console.log(errr))
}