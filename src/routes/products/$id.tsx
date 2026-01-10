import { DeatailedProduct } from '@/hooks/useProductFetch';
import type { DarazProduct } from '@/lib/Schemas/Product';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, useParams } from '@tanstack/react-router';
const ProductDetail = (e: string) =>
  queryOptions({
    queryKey: ['productDetail', e],
    queryFn: () => DeatailedProduct(e),
  });

export const Route = createFileRoute('/products/$id')({
  component: ProductDetailPage,
  loader: async ({ params, context: { queryClient } }) =>
    queryClient.ensureQueryData(ProductDetail(params.id)),
});

function ProductDetailPage() {
  const { id } = Route.useParams();
  const { data } = useSuspenseQuery(ProductDetail(id));
  const {
    title,
    image,
    category,
    price,
    description,
    rating: { count, rate },
  } = data;
  return (
    <>
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{image}</p>
      <p>{title}</p>
    </>
  );
}
