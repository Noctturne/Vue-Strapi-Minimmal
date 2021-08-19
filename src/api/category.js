export async function getCategoriesAPI(){
    try {
        const req = await fetch(`${process.env.VUE_APP_API_URL}/categories`);
        const res = await req.json();
        return res;
    } catch (e) {
        console.log(e);
        return null;
    }
}