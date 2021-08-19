export async function getProductsAPI(limit = 50){
    try {
        const req = await fetch(`${process.env.VUE_APP_API_URL}/products?_sort=created_at:desc&_limit=${limit}`);
        const res = await req.json();
        return res;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function getProductsCategoryAPI(cat){
try {
    const req = await fetch(`${process.env.VUE_APP_API_URL}/products?_where[category.slug]=${cat}&_sort=created_at:desc`);
    const res = await req.json();
    return res;
} catch (e) {
    console.log(e);
    return null;
}
}