export const GetGift = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BgEKAWync9juFGz7Umr57dYQFTx79hVY&q=${category}&limit=20`
    const res = await fetch(url);
    const {data} = await res.json();

    const gifs = data.map(img =>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }));
    console.log(gifs)
    return gifs;
}