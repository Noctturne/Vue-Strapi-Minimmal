import {uniqBy, countBy} from 'lodash';
import {PRODUCTS} from '../util/Constants';

export function addProductAPI(idProduct){
    const products = getCartAPI();
    products.push(idProduct);
    localStorage.setItem(PRODUCTS, JSON.stringify(products));
}

export function getCartAPI(){
    const products = localStorage.getItem(PRODUCTS);
    if(!products){
        return [];
    }else{
        return JSON.parse(products);
    }
}

export async function getProductsCartAPI(){
    const idProducts = getCartAPI();
    if(idProducts.lenght === 0){
        return null;
    }else{
        try {
            const products = [];
            for await (const idProduct of idProducts){
                const req = await fetch(`${process.env.VUE_APP_API_URL}/products/${idProduct}`);
                const res = await req.json();
                products.push(res);
            }
            // Saber cuantos productos hay del mismo tipo y combinarlos
            const productsCount = countBy(products, (product) => {
                return product.name;
            });

            const combine = uniqBy(products, (product) => {
                const productTemp = product;
                productTemp.quantity = productsCount[product.name];
                return productTemp.name;
            });

            return combine;
            
        } catch (e) {
            console.log(e);
            return null;
        }
    }
}


export async function deleteProductsCartAPI(idProduct){
    const products = getCartAPI();
    const index = products.indexOf(idProduct);

    if(index > -1){
        products.splice(index, 1);
        localStorage.setItem(PRODUCTS, JSON.stringify(products));
        deleteProductsCartAPI(idProduct);
    }

}

export function deleteProductAPI(idProduct){
    const products = getCartAPI();
    const index = products.indexOf(idProduct);
    if(index > -1){
        products.splice(index, 1);
    }

    localStorage.setItem(PRODUCTS, JSON.stringify(products));
}
