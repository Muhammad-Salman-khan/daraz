import { Button } from '@/components/button';
import Cardcategories from '@/components/Card/Cardcategories';
import Product from '@/components/Card/Product';
import ClousorComponent from '@/components/Clousor/ClousorComponent';
import Login from '@/components/Login/Login';
import { fetchProduct } from '@/hooks/useProductFetch';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { createFileRoute } from '@tanstack/react-router';
const Products = () =>
  queryOptions({
    queryKey: ['products'],
    queryFn: () => fetchProduct(),
  });

export const Route = createFileRoute('/')({
  component: App,
  loader: async ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(Products());
  },
});
function App() {
  const { data } = useSuspenseQuery(Products());
  const ControledData = data.slice(0, 5);

  return (
    <>
      <main className="w-full min-h-screen  ">
        <section className="mx-auto max-w-7xl px-6 py-2">
          <ClousorComponent />
          <section className="max-w-7xl">
            <h1 className="mb-4 text-start text-2xl font-semibold tracking-tight">
              Flash Sales
            </h1>
            <div className="flex items-center justify-between rounded-xl text-primary p-5  bg-white shadow-xl">
              <span className="text-sm font-medium">Limited Time Sale</span>
              <Button variant="outline" className="text-primary border-primary">
                View Products
              </Button>
            </div>
          </section>
          <section className="mt-3 max-w-7xl ">
            <h1 className="mb-4 text-start text-2xl font-semibold tracking-tight">
              Categories
            </h1>
            <div className="flex flex-wrap justify-center gap-2 rounded-xl text-primary  shadow-xl">
              <Cardcategories Data={ControledData} />
            </div>
          </section>
          <section className="mt-3 mb-4 max-w-7xl ">
            <h1 className="mb-4 text-start text-2xl font-semibold tracking-tight">
              Products
            </h1>
            <div className="flex flex-wrap  gap-2 rounded-xl text-primary ">
              <Product Data={data} />
            </div>
            <Login />
          </section>
        </section>
      </main>
    </>
  );
}
