import { useFetchGifs } from "../hooks/useFetchGifs";
import ImageItem from "../models/ImageItem";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }: { category: string }) => {
  // const [images, setImages] = useState<ImageItem[]>([]);
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      <div className="card-grid animate__animated animate__fadeIn">
        {images.map((img: ImageItem) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
