import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { X } from "lucide-react";
import { useState } from "react";

const SearchBox = () => {
  const [value, setValue] = useState("");

  const handleClear = () => {
    setValue("");
  };

  return (
    <div className="absolute top-12 w-48 -translate-x-1/3">
      <InputGroup>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search for products"
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
    </div>
  );
};

export default SearchBox;
