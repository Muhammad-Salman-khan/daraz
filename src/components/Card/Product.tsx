import { use, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../card';
import type { DarazProducts } from '@/lib/Schemas/Product';
import { Link } from '@tanstack/react-router';
import { Star } from 'lucide-react';

const Product = ({ Data }: { Data: DarazProducts }) => {
  return (
    <>
      {Data.map((data) => (
        <Link
          key={data.id}
          to="/products/$id"
          params={{ id: data.id }}
          className="flex w-full sm:w-[48%] md:w-[23%] lg:w-[18%]"
        >
          <Card className="flex flex-col m-1 overflow-hidden">
            <CardContent className="p-2 flex flex-col flex-1">
              <img
                src={data.image}
                alt={data.category}
                className=" aspect-square object-cover"
              />

              <CardTitle>
                <h3 className="font-semibold text-sm md:text-base  line-clamp-2">
                  {data.title}
                </h3>
              </CardTitle>

              <CardDescription className="mt-auto">
                <p className="text-lg gap-1 font-bold text-primary">
                  Price: ${data.price}
                </p>
                <div className="flex gap-2 align-middle">
                  <Star color="yellow" fill="yellow" size={15} />
                  <Star color="yellow" fill="yellow" size={15} />
                  <Star color="yellow" fill="yellow" size={15} />
                  <span className="flex text-primary">{data.rating.rate}</span>
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default Product;
