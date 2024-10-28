import { ChevronDown, Star } from "lucide-react";
import { useState } from "react";
import { WomenProducts } from "../services/Products";
import {
  Button,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Input,
} from "@chakra-ui/react";

const Products = ({ cate }: { cate: string }) => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 5000]);
  const [sortOption, setSortOption] = useState<string>("");

  const handleSortOptionChange = (option: string) => {
    setSortOption(option);
    // Add your sorting logic here based on the option selected
  };

  const handleInputChange = (index: number, value: string) => {
    const newRange = [...priceRange];
    newRange[index] = Math.min(Math.max(Number(value), 0), 5000); // Constrain within 0-5000
    setPriceRange(newRange);
  };

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
              <RangeSlider
                defaultValue={[0, 5000]}
                min={0}
                max={5000}
                step={10}
                onChangeEnd={(val: never) => setPriceRange(val)}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <div className="mt-2 flex justify-between gap-10 text-sm text-gray-500">
                <Input
                  value={priceRange[0]}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  size="sm"
                  type="number"
                  min={0}
                  max={5000}
                  placeholder="Min"
                />
                <Input
                  value={priceRange[1]}
                  onChange={(e) => handleInputChange(1, e.target.value)}
                  size="sm"
                  type="number"
                  min={0}
                  max={5000}
                  placeholder="Max"
                />
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
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDown />}
                    variant="outline"
                    size="sm"
                  >
                    {sortOption || "Select"}
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      onClick={() => handleSortOptionChange("Alphabetically")}
                    >
                      Alphabetically
                    </MenuItem>
                    <MenuItem onClick={() => handleSortOptionChange("Newest")}>
                      Newest
                    </MenuItem>
                    <MenuItem onClick={() => handleSortOptionChange("Oldest")}>
                      Oldest
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WomenProducts.map((item) => (
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
                  <Button
                    bg="orange.500"
                    color="white"
                    _hover={{ bg: "orange.600" }}
                    className="mt-2 w-full"
                  >
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
