import {Link} from 'react-router-dom';

export default function CartItem(props){
   const {item,index,deleteFromCart}=props;

   return(
      <>
            <tr>
                <td class="product-thumbnail"><img src={item.image} alt=""/></td>
                <td class="product-name">{item.name}</td>
                <td class="product-price"><span class="amount">Rs. {item.price} / KG</span></td>
                <td class="product-quantity">
                    <div class="cart-plus-minus">1</div>
                </td>
                <td class="product-subtotal"><span class="amount">Rs. {item.price}</span></td>
                <td class="product-remove"><button onClick={()=> deleteFromCart(item.id)}><i class="fa fa-times"></i></button></td>
            </tr>
      </>
   )
    
}

// export default ShopItem;