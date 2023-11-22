import {serverApiUrl} from '../'

export const fetchShopItems = (callback) => 
{
    let formaData = new FormData();
    formaData.append("fetch_shop_details",true);
    fetch(serverApiUrl+"shop.php",{
        method: 'POST', 
        body:formaData
    }).then(response =>response.json()) 
    .then(response=>callback(response))
    .catch(errr=>console.log(errr))
}


export const fetchLimitShopItems = (callback) => 
{
    let formaData = new FormData();
    formaData.append("fetch_limit_ShopItems",true);
    fetch(serverApiUrl+"shop.php",{
        method: 'POST', 
        body:formaData
    }).then(response =>response.json())
    .then(response=>callback(response))
    .catch(errr=>console.log(errr))
}


export const insertNewshopItem = (name,description,category,price,image,distributor,callback) => 
{
    let formaData = new FormData();
    formaData.append("insert_new_shopItem",true);
    formaData.append("name",name);
    formaData.append("description",description);
    formaData.append("category",category);
    formaData.append("price",price);
    formaData.append("image",image);
    formaData.append("distributor",distributor);
    fetch(serverApiUrl+"shop.php",{
        method: 'POST', 
        body:formaData
    }).then(response =>response.json())
    .then(response=>callback(response))
    .catch(errr=>console.log(errr))
}