import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  DrawerOverlay,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { Trash } from "lucide-react";

interface CartProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ShoppingCart = ({ isOpen, setIsOpen }: CartProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      placement="right"
      size="sm"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Shopping Cart</DrawerHeader>
        <DrawerBody>
          <Card>
            <CardBody className="flex items-center justify-between">
              <div className="flex items-center gap-10">
                <img
                  src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="size-14 rounded-md object-cover"
                />

                <div className="flex flex-col items-start">
                  <p className="line-clamp-1 text-xl font-semibold">Shirt</p>
                  <p className="text-gray-500">Price: $100</p>
                </div>
              </div>

              <div className="cursor-pointer">
                <Trash className="text-red-500" />
              </div>
            </CardBody>
          </Card>
        </DrawerBody>
        <DrawerFooter>Shopping goes here</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingCart;
