import ImageItem from "../models/ImageItem";

export const getGifs = async (category: string): Promise<ImageItem[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=p4ipW2D1jxCVWIRVpnNa55vWPoThoPKM`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((gif: any): ImageItem => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    };
  });

  return gifs;
};
