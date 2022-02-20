import React, { useState } from 'react';
import './App.css';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';

const App = () => {
    const data = [{
        'id': 1,
        'name': 'Pixel 6',
        'price': 899,
        'quantity': 0,
        'url': 'https://m.media-amazon.com/images/I/71rMn8p56QL._SL1500_.jpg'
    }, 
    {   
        'id': 2,
        'name': 'iPhone 13 Pro Max',
        'price': 1299,
        'quantity': 0,
        'url': 'https://www.reliancedigital.in/medias/Apple-MLL93HN-A-Smart-Phones-491997748-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNTMwNDV8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2g5YS85Nzc2MDg4NTgwMTI2LmpwZ3wxYjQ0OGE4NzlhN2MzNDljZDNmYjRkZjliZjlhMDEwYTBiM2JhOTZjNmM2YzQ0ZWY0NzU1OGMzZDA1OTY3YmE2'
    },
    {   
        'id': 3,
        'name': 'OnePlus 9 Pro',
        'price': 699,
        'quantity': 0,
        'url': 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1616563290/Croma%20Assets/Communication/Mobiles/Images/233755_mn0ofl.png/mxw_2048,f_auto'
    },
    {   
        'id': 4,
        'name': 'Apple Watch Series 7 ',
        'price': 399,
        'quantity': 0,
        'url': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU83_VW_34FR+watch-41-alum-midnight-nc-7s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171038000%2C1631661171000'
    } 
];
const [cartItems, setCartItems] = useState([]);
// const [quantity, setQuantity] = useState(0);

const renderProducts = () => {
    return data.map(item=>{
        return <Product data={item} addToCart={addToCart} cartItems={cartItems}/>
    })
}
//ADDTOCART FUNCTION
const addToCart = (newId) => {
    const index = cartItems.findIndex((x) => x.id === newId);
    const ifExist = cartItems[index];
    console.log("Item is:",ifExist);
    const idx = data.findIndex((item) => item.id === newId);
    if (ifExist) {
      setCartItems(cartItems.map((el) => el.id === newId ? { ...ifExist, 'quantity': ifExist['quantity'] + 1 } : el));
    } else {
      setCartItems([...cartItems, { ...data[idx], 'quantity': 1 }]);
    }
    // console.log(cartItems);
  };
  
  const removeItems = (newId) => {
    const ifExist = cartItems.find((x) => x.id === newId);
    // const idx = data.findIndex((item) => item.id === newId);
    // console.log(exist, idx);
    if (ifExist['quantity'] === 1) {
      setCartItems(cartItems.filter((x) => x.id !== newId));
    }
    else {
      setCartItems(
        cartItems.map((x) =>
          x.id === newId ? { ...ifExist, 'quantity': ifExist['quantity'] - 1 } : x
        )
      );
    }
  }
    // // const latestCart = [...cartItems];
    // const idx= cartItems.findIndex((item) => item.id === newId);
    // if (idx === -1){ 
    //     setCartItems([...cartItems, {...data[idx], 'quantity':1}]);
    // }
    // else{
    //     setCartItems(cartItems.map((el) => el['id'] === newId ? {...data[idx], 'quantity':data['quantity'] + 1} : el));
    // }
    // console.log(cartItems);


    // const item = data[data.findIndex(item => item.id === newId)];
    // console.log({...item, 'quantity':1});
    // if (idx === -1){
    //     setCartItems({...item, 'quantity':1});
    // }
    // console.log(cartItems);


    // const index = data.findIndex(item => item.id === newId);
    // const itemFound = data[index];
    // console.log(itemFound);
    // const latestCart = [...cartItems, {'name':itemFound['name']}];
    // setCartItems(latestCart);
//     const latestCart = [...cartItems];
//     const found = latestCart.some(el => el['id'] === newId);
//     console.log(found);
//     if (found){
//         setCartItems(latestCart.map(item => item.id === newId ? {...itemFound, 'quantity':itemFound['quantity'] + 1 } : item ));
//     }
// else{
    // console.log("In else");

//     setCartItems([itemFound]);
// }

    // if (newId){
    //     setCartItems(latestCart.map(item => item.id === newId ? {...itemFound, 'quantity':itemFound['quantity'] + 1 } : item ));
    // }
    // else {
    //     setCartItems([...cartItems, {...itemFound, 'quantity':1}]);
    // }
    // setCartItems([{...itemFound, 'quantity':1}]);
  return (
    <>
    <div className="header">
        <h1> E-COMMERCE </h1>
        <h3 type="button" className="btn btn-primary position-relative">
  Cart 
   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cartItems.length}
  </span>
</h3>
        
    </div>
    <h2>
      P R O D U C T S
    </h2>
    <div className="body">
        <div className="items">
        {renderProducts()} 
        </div>

        <div className="cart">
        <h2>
         C A R T
      </h2>
            <Cart cartItems={cartItems} addToCart={addToCart} removeItems={removeItems}/>
        </div>
       
        </div>



    </>
  )
}

export default App