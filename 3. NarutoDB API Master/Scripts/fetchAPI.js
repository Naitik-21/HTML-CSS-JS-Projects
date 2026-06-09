const BaseURL = "https://raw.githubusercontent.com/naitikramani21/API/refs/heads/main/Naruto.json";

export async function FetchAPI(Endpoint) {
    let Response = await fetch(BaseURL + Endpoint);
    let ResponseData = await Response.json();
    return ResponseData;
}