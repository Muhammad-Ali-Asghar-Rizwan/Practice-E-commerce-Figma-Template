import Image from "next/image";
import HomePage from "./Home/page";
import Sales from "./Sales/page";
import Category from "./Category/page";
import Product from "./BestProduct/product";
import Music from "./Music/page";
import ExploreProduct from "./ExploreProduct/page";
import Arrival from "./Arrival/page";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <Sales/>
      <Category/>
      <Product/>
      <Music/>
      <ExploreProduct/>
      <Arrival/>
      
    </div>
  );
}
