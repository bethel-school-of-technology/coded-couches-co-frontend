import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2.jpg';
import image3 from '../../Images/image3.jpg';
import image4 from '../../Images/image4.jpg';
import image5 from '../../Images/image5.jpg';
import { ADD_TO_CART } from '../actions/action-types/cart-action';
const initState = {
    items: [
        {id:1, title:'Home Goods', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 50, img:image1},
        {id:2, title:'Home Goods', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 50, img:image2},
        {id:3, title:'Home Goods', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 50, img:image3},
        {id:4, title:'Home Goods', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 50, img:image4},
        {id:5, title:'Home Goods', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 50, img:image5}
    ],
    addedItems: [],
    total: 0
}
const cartReducer = (state = initState, action) => {
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
    return state
}

export default cartReducer;