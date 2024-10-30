import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { X } from "lucide-react";
import { Suspense, useState } from "react";
import Loading from "./Loading";

const SearchBox = () => {
  const [value, setValue] = useState("");

  const handleClear = () => {
    setValue("");
  };

  return (
    <div className="absolute top-12 w-72 -translate-x-1/3 rounded-md border bg-white p-3 shadow-md">
      <InputGroup>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search..."
        />
        <InputRightElement>
          {value && (
            <X
              className="cursor-pointer text-black"
              onClick={handleClear}
              size={20}
            />
          )}
        </InputRightElement>
      </InputGroup>

      <Suspense fallback={<Loading />}>
        <div className="pt-4">
          <div className="h-fit rounded bg-slate-200">
            <div className="line-clamp-1 flex items-center justify-between">
              <img
                src="https://images.pexels.com/photos/1643025/pexels-photo-1643025.jpeg"
                alt="product image"
                className="size-[3.7rem] rounded object-cover"
              />

              <div className="flex flex-col gap-1 px-2">
                <p>Coat</p>
                <div className="flex items-center justify-center text-center">
                  <p className="text-gray-500">Colour Black</p>
                  <p className="text-gray-500">Size L</p>
                  <p className="text-gray-500">Type Coat</p>
                  <p className="text-gray-500">Price $100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>

      <hr className="mt-3 w-full" />

      <div>
        <div className="mt-3 flex items-center justify-end">
          <div className="flex">
            <p>Total:</p>
            <p>$100</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button className="mt-5 w-full">View Cart</Button>
          <Button className="mt-5 w-full">Checkout</Button>
        </div>
      </div>

      {/* <Loading /> */}
    </div>
  );
};

export default SearchBox;
