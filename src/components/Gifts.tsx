import { featureGiftsRendering } from "../services/featureGifts";
import { Button } from "@chakra-ui/react";

const Gifts = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
          Perfect Gifts
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featureGiftsRendering.map((item) => (
            <div
              className="group relative overflow-hidden rounded-lg shadow-lg"
              key={item.id}
            >
              <img
                src={item.image}
                alt={`Gift ${item.title}`}
                className="h-80 w-full object-cover transition-transform group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                <Button className="rounded-md bg-orange-500 p-3 text-white hover:bg-orange-600">
                  Shop Now
                </Button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
                <h3 className="mb-2 text-lg font-semibold">
                  Gift Category {item.title}
                </h3>
                <p className="text-gray-600">Find the perfect gift</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gifts;
