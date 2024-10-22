import FeatureProduct from "./FeatureProduct";
import Gifts from "./Gifts";
import Subscribe from "./Subscribe";
import Hero from "./Hero";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FeatureProduct />
      <Gifts />
      <Subscribe />
    </main>
  );
}
