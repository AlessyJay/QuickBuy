import { featureProductRendering } from "../services/featureProducts";

export default function FeatureProduct() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
          Featured Products
        </h2>
        <div className="grid cursor-pointer grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featureProductRendering.map((item) => (
            <div
              className="group relative overflow-hidden rounded-lg shadow-lg"
              key={item.id}
            >
              <img
                alt={`Product ${item.title}`}
                className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                src={item.image}
              />
              <div className="bg-white p-4">
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
