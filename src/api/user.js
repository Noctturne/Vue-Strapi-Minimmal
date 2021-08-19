export async function registerAPI(formData){
    try {
        // Endpoint de Strapi
        const url = `${process.env.VUE_APP_API_URL}/consumers`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        };
        const req = await fetch(url, params);
        const res = await req.json();
        return res;
    } catch (e) {
        console.log(e);
        return null;
    }
}