import {serverApiUrl} from '../'


export const fetchWishlistItems = (callback) => 
{
    let formaData = new FormData();
    formaData.append("fetch_wishlist",true);
    fetch(serverApiUrl+"wishlist.php",{
        method: 'POST', 
        body:formaData
    }).then(response =>response.json())
    .then(response=>callback(response))
    .catch(errr=>console.log(errr))
}


export const insertInWishlist = (item_id,callback) => 
{
    let formaData = new FormData();
    formaData.append("insert_wishlist",true);
    formaData.append("item_id",item_id); 
    fetch(serverApiUrl+"wishlist.php",{
        method: 'POST', 
        body:formaData
    }).then(response =>response.json())
    .then(response=>callback(response))
    .catch(errr=>console.log(errr))
}

export const removeFromWishlist = (item_id,callback) => 
{
    let formaData = new FormData();
    formaData.append("remove_wishlist",true);
    formaData.append("item_id",item_id);
    fetch(serverApiUrl+"wishlist.php",{
        method: 'POST', 
        body:formaData
    }).then(response =>response.json())
    .then(response=>callback(response))
    .catch(errr=>console.log(errr))
}