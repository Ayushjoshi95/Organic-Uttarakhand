import {Link} from 'react-router-dom';

export default function WishlistItem(props){
   const {item,index,removeWishlist,addToCart}=props;

   return(
      <>
            {/* features-product-start  */}
            <tr>
                <td class="product-thumbnail"><img src={item.image} alt=""/></td>
                <td class="product-name">{item.name}</td>
                <td class="product-price"><span class="amount">Rs. {item.price} / KG</span></td>
                <td class="product-quantity">
                    <button  onClick={()=> addToCart(item.id)} class="tp-btn-h1">Add To Cart</button>
                </td>
                <td class="product-subtotal"><span class="amount">Rs. {item.price}</span></td>
                <td class="product-remove"><button onClick={()=> removeWishlist(item.id)}><i class="fa fa-times"></i></button></td>
            </tr>
      </>
   )
    
}

// export default ShopItem;