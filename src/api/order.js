export async function createOrderAPI(data){
    try {
        const url = `${process.env.VUE_APP_API_URL}/orders`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        };
        
        const req = await fetch(url, params);
        const res = await req.json();
        return res;
    } catch (e) {
        console.log(e);
    }
}