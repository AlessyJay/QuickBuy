const Subscribe = () => {
  return (
    <section className="w-full border-t py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Stay in Style
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Subscribe to our newsletter for exclusive offers, style tips, and
              new arrivals.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2 max-sm:flex-col max-sm:items-center">
              <input
                className="max-w-lg flex-1 rounded-md border p-3 outline-none"
                placeholder="Enter your email"
                type="email"
              />
              <button
                type="submit"
                className="rounded-md bg-orange-500 p-3 text-white hover:bg-orange-600 max-sm:mt-2"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our terms and privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
