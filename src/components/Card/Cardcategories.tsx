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

const Cardcategories = ({ Data }: { Data: DarazProducts }) => {
  console.log(Data);

  return (
    <>
      {Data.map((data) => (
        <Link
          key={data.id}
          to="/products/$id"
          params={{ id: data.id }}
          className="
            flex
          w-screen
            // sm:w-[48%]
            // md:w-[23%]
            // lg:w-[18%]
          "
        >
          <Card className="flex flex-col m-1   w-full  overflow-hidden">
            <CardContent className="p-2 flex flex-col flex-1">
              <img
                src={data.image}
                alt={data.category}
                className=" h-60 aspect-square object-cover"
              />

              <CardTitle className="p-2 flex flex-col flex-1">
                <h3 className="font-semibold text-sm md:text-base line-clamp-2">
                  {data.category}
                </h3>
              </CardTitle>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default Cardcategories;
