import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import ImageItem from "../models/ImageItem";

interface state {
  data: ImageItem[];
  loading: boolean;
}

export const useFetchGifs = (category: string) => {
  const [state, setstate] = useState<state>({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setstate({ data: imgs, loading: false });
      }, 2000);
    });
  }, [category]);
  return state;
};
