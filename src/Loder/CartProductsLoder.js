import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoder = async()=>{

        const loadedProducts = await fetch('products.json')
        const products = await loadedProducts.json();
        
        // if cart data is in database,  you have too use async await
        const storedCart = getShoppingCart();
        const savedCart = [];

        for(const id in storedCart){
            const addedProducts = products.find(product => product.id === id);
            if(addedProducts){
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                savedCart.push(addedProducts);

            }
        }


        return savedCart;
}

export default cartProductsLoder;