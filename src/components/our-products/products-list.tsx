import { ProductCard } from "../shared/product-card";

export const ProductsList = () => {
  return (
    <div className="grid max-sm:grid-cols-2 grid-cols-3 gap-3 sm:gap-5 lg:gap-10">
      {[...Array(12).keys()].map((info) => (
        <ProductCard key={info} />
      ))}
    </div>
  );
};
