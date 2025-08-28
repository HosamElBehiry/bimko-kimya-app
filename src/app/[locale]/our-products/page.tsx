import { Side } from "@/components/our-products/side";
import { ReadyToStart } from "@/components/shared/readt-to-start";
import { ProductsList } from "@/components/our-products/products-list";
import { ProductsSearch } from "@/components/our-products/products-search";
import { ProductsPaginations } from "@/components/our-products/products-paginations";

const OurProductsPage = () => {
  return (
    <main className="mt-9 sm:mt-12 lg:mt-20 container mx-auto px-10 max-lg:px-5">
      <section className="grid grid-cols-12 lg:gap-7">
        <Side />
        <div className="col-span-full lg:col-span-9 flex flex-col gap-5 sm:gap-7">
          <ProductsSearch />
          <ProductsList />
          <ProductsPaginations />
        </div>
      </section>
      <ReadyToStart />
    </main>
  );
};

export default OurProductsPage;
