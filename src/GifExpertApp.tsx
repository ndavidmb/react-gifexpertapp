import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export default function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"]);

  //   const handleAdd = () => {
  //     const newArray: string[] = [...categories, "Hunter x hunter"];
  //     setCategories(newArray);
  //   };

  return (
    <>
      <div>Gif Expert App</div>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((category, index) => (
          <GifGrid key={category + index} category={category} />
        ))}
      </ol>
    </>
  );
}
