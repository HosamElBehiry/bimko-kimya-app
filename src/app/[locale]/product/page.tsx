import { Album } from "@/components/product/album";
import { Details } from "@/components/product/details";
import { InfoTable } from "@/components/product/info-table";
import { Advantages } from "@/components/product/advantages";
import { ReadyToStart } from "@/components/shared/readt-to-start";
import { ApplicationRate } from "@/components/product/application-rate";
import { StorageInstruction } from "@/components/product/storage-instruction";

const ProductPage = () => {
  return (
    <main className="mt-9 sm:mt-12 lg:mt-20 container mx-auto px-10 max-lg:px-5 flex flex-col gap-5 sm:gap-10 lg:gap-20">
      <section className="grid grid-cols-12 gap-5 lg:gap-10">
        <Details />
        <Album />
      </section>
      <Advantages />
      <InfoTable />
      <ApplicationRate />
      <StorageInstruction />
      <ReadyToStart />
    </main>
  );
};

export default ProductPage;
