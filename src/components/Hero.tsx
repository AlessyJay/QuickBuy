import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-screen w-full content-center">
      <div className="container px-4 md:px-6">
        <div className="xl:gap-cols-[1fr_600px] grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center max-sm:h-[450px] sm:w-full lg:order-last lg:aspect-square"
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 max-sm:text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Discorver Elegance in Every Click
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Experience luxury shopping at your fingertips. QuickBuy brings
                you the latest trends with unmatched convenience.
              </p>
            </div>
            <div className="flex flex-col gap-2 max-sm:justify-center min-[400px]:flex-row">
              <Link
                to="/shop"
                className="inline-flex h-10 items-center justify-center rounded-md bg-orange-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500"
              >
                Shop Now
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
