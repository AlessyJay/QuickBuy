import { ChevronDown, Star } from "lucide-react";
import { useState } from "react";
import { Products as MockProducts } from "../services/Products";
import { Button } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { Slider } from "@chakra-ui/react";

const Products = ({ cate }: { cate: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [priceRange, setPriceRange] = useState<string>("");
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="container flex-1 py-8">
        <h1 className="mb-8 text-3xl font-bold">Women's Collection</h1>
        <div className="flex flex-col gap-8 md:flex-row">
          <aside className="w-full space-y-6 md:w-64">
            <div>
              <h2 className="mb-2 text-lg font-semibold">Categories</h2>
              <div className="space-y-2">
                {["Dresses", "Tops", "Pants", "Skirts", "Jackets"].map(
                  (category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox id={category} />
                      <label
                        htmlFor={category}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold">Price Range</h2>
              <Slider max={5000} step={1} defaultValue={0} className="mb-2" />
              <div className="flex justify-between text-sm text-gray-500">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold">Size</h2>
              <div className="flex flex-wrap gap-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <Button key={size} variant="outline" size="sm">
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold">Color</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "bg-black",
                  "bg-white",
                  "bg-red-500",
                  "bg-blue-500",
                  "bg-green-500",
                  "bg-yellow-500",
                ].map((color) => (
                  <div
                    key={color}
                    className={`h-6 w-6 rounded-full ${color} cursor-pointer border border-gray-300`}
                  />
                ))}
              </div>
            </div>
          </aside>
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                {Products.length} products
              </p>
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-500">Sort by:</span>
                <Button variant="outline" size="sm">
                  Featured <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {MockProducts.map((item) => (
                <div key={item.id} className="group">
                  <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      ${item.price}
                    </p>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <span className="ml-1 text-sm text-gray-500">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                  <Button className="mt-2 w-full bg-orange-500 text-white hover:bg-orange-600">
                    Add to Cart
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
