import { Button } from '@/components/button';
import { DeatailedProduct } from '@/hooks/useProductFetch';
import type { DarazProduct } from '@/lib/Schemas/Product';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, useParams } from '@tanstack/react-router';
import { Star } from 'lucide-react';
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
  return (
    <div className=" mt-4 m-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="bg-white p-4 rounded-sm md:col-span-4">
          <div className="w-full relative mb-4">
            <img
              src={data.image}
              alt={`${data.title} image`}
              className="w-full h-auto object-cover border border-gray-100 cursor-pointer"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide"></div>
        </div>

        {/* <!-- CENTER COLUMN: Product Details (Span 5) --> */}
        <div className="bg-white p-4 rounded-sm md:col-span-5 flex flex-col gap-4">
          {/* <!-- Title --> */}
          <h1 className="text-xl leading-tight font-medium text-gray-800">
            {data.title}
          </h1>

          {/* <!-- Ratings & Sharing --> */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              {/* <!-- Stars --> */}
              <div className="flex text-yellow-400 text-xs">
                <Star fill="yellow" />
                <Star fill="yellow" />
                <Star fill="yellow" />
                <Star fill="yellow" />
              </div>
              <a href="#" className="text-blue-500 hover:underline">
                {data.rating.rate} Rating
              </a>
            </div>
            <div className="flex gap-3 text-gray-500">
              <button className="hover:text-daraz-orange">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  ></path>
                </svg>
              </button>
              <button className="hover:text-daraz-orange">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Brand --> */}
          <div className="text-xs text-gray-500">
            Brand:{' '}
            <a href="#" className="text-blue-500 hover:underline">
              No Brand
            </a>{' '}
            |{' '}
            <a href="#" className="text-blue-500 hover:underline">
              More Men from No Brand
            </a>
          </div>

          <hr className="border-gray-100" />

          {/* <!-- Price --> */}
          <div className="flex flex-col">
            <span className="text-3xl text-daraz-orange font-medium">
              Rs. 809
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-gray-400 text-sm line-through">
                Rs. 1,799
              </span>
              <span className="text-black font-semibold text-sm">-55%</span>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* <!-- Colors --> */}
          <div>
            <h6 className="text-gray-500 text-sm mb-2">
              Color Family: <span className="text-black font-medium">Gray</span>
            </h6>
            <div className="flex flex-wrap gap-2">
              <div className="w-10 h-10 border border-gray-200 cursor-pointer hover:border-daraz-orange">
                <img
                  src="https://img.drz.lazcdn.com/static/pk/p/81a2763ed850a3bd821bb8f2cda43dba.jpg_80x80q80.jpg_.webp"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 border border-gray-200 cursor-pointer hover:border-daraz-orange">
                <img
                  src="https://img.drz.lazcdn.com/static/pk/p/4456aa53e06a586eae72cb952aa1df01.jpg_80x80q80.jpg_.webp"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 border border-daraz-orange cursor-pointer relative">
                <img
                  src="https://img.drz.lazcdn.com/static/pk/p/93fdb9abc01c70a07026ce0ce55f3705.jpg_80x80q80.jpg_.webp"
                  className="w-full h-full object-cover"
                />
                {/* <!-- Check Icon overlay --> */}
                <div className="absolute bottom-0 right-0 bg-daraz-orange text-white w-3 h-3 flex items-center justify-center">
                  <svg
                    className="w-2 h-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="w-10 h-10 border border-gray-200 cursor-pointer hover:border-daraz-orange">
                <img
                  src="https://img.drz.lazcdn.com/static/pk/p/671f82e79242f9c575bf627119eaacbd.jpg_80x80q80.jpg_.webp"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* <!-- Sizes --> */}
          <div className="mt-2">
            <h6 className="text-gray-500 text-sm mb-2">
              Size: <span className="text-black font-medium">XL</span>
            </h6>
            <div className="flex gap-2">
              <button className="px-4 py-1 text-sm border border-gray-200 hover:border-daraz-orange text-gray-600 disabled:opacity-50">
                S
              </button>
              <button className="px-4 py-1 text-sm border border-gray-200 hover:border-daraz-orange text-gray-600">
                M
              </button>
              <button className="px-4 py-1 text-sm border border-gray-200 hover:border-daraz-orange text-gray-600">
                L
              </button>
              <button className="px-4 py-1 text-sm border border-daraz-orange text-daraz-orange relative">
                XL
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[8px] border-l-transparent border-b-[8px] border-b-daraz-orange"></div>
                <svg
                  className="w-1.5 h-1.5 absolute bottom-0 right-0 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </button>
              <button className="px-4 py-1 text-sm border border-gray-200 hover:border-daraz-orange text-gray-600">
                XXL
              </button>
            </div>
          </div>

          {/* <!-- Quantity --> */}
          <div className="mt-2">
            <h6 className="text-gray-500 text-sm mb-2">Quantity</h6>
            <div className="flex items-center">
              <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center font-bold">
                -
              </button>
              <input
                type="text"
                value="1"
                className="w-12 h-8 text-center border-t border-b border-gray-100 text-sm focus:outline-none"
              />
              <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center font-bold">
                +
              </button>
            </div>
          </div>

          {/* <!-- Buttons --> */}
          <div className="flex gap-3 mt-4">
            <Button className="flex-1 h-11 bg-sky-200 text-white text-base font-medium rounded-sm shadow-sm hover:bg-sky-300 transition-colors bg-opacity-90 flex items-center justify-center">
              Buy Now
            </Button>
            <button className="flex-1 h-11 bg-daraz-orange text-white text-base font-medium rounded-sm shadow-sm hover:bg-orange-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>

        {/* <!-- RIGHT COLUMN: Delivery & Seller (Span 3) --> */}
        <div className="md:col-span-3 flex flex-col gap-3">
          {/* <!-- Delivery Section --> */}
          <div className="bg-white p-3 rounded-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-gray-500 font-medium">
                Delivery Options
              </span>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>

            {/* <!-- Location --> */}
            <div className="flex justify-between items-start mb-4 text-sm">
              <div className="flex gap-2">
                <svg
                  className="w-5 h-5 text-gray-400 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="text-black font-medium leading-tight">
                  Sindh, Karachi - Gulshan-e-Iqbal, Block 15
                </span>
              </div>
              <a
                href="#"
                className="text-blue-500 uppercase text-xs font-semibold whitespace-nowrap ml-2"
              >
                Change
              </a>
            </div>

            <hr className="border-gray-100 mb-3" />

            {/* <!-- Delivery Methods --> */}
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black">
                      Standard Delivery
                    </p>
                    <p className="text-xs text-gray-500">
                      Guaranteed by 17-21 Jan
                    </p>
                  </div>
                </div>
                <span className="text-sm font-bold text-black">Rs. 165</span>
              </div>

              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black">
                      Cash on Delivery Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Warranty Section --> */}
          <div className="bg-white p-3 rounded-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-gray-500 font-medium">
                Return & Warranty
              </span>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
                <span className="text-sm text-gray-600">
                  14 days easy return
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
                <span className="text-sm text-gray-600">
                  Warranty not available
                </span>
              </li>
            </ul>
          </div>

          {/* <!-- Seller Info --> */}
          <div className="bg-white p-3 rounded-sm">
            <div className="mb-3">
              <span className="text-xs text-gray-400">Sold by</span>
              <h4 className="text-sm text-black font-medium">
                SA Trader (Faisalabad)
              </h4>
            </div>

            <div className="flex justify-between border-t border-b border-gray-100 py-3 mb-3">
              <div className="text-center w-1/3 border-r border-gray-100">
                <span className="text-xs text-gray-400 block mb-1">
                  Positive Seller Ratings
                </span>
                <span className="text-lg font-bold text-gray-800">82%</span>
              </div>
              <div className="text-center w-1/3 border-r border-gray-100">
                <span className="text-xs text-gray-400 block mb-1">
                  Ship on Time
                </span>
                <span className="text-lg font-bold text-gray-800">98%</span>
              </div>
              <div className="text-center w-1/3">
                <span className="text-xs text-gray-400 block mb-1">
                  Chat Response Rate
                </span>
                <span className="text-xs font-bold text-gray-800 mt-2 block">
                  N/A
                </span>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#"
                className="text-blue-500 text-xs font-bold uppercase hover:underline"
              >
                Go to Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
