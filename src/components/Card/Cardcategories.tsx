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
  return (
    <>
      {Data.map((data) => (
        <Link key={data.id} to="/products/$id" params={{ id: data.id }}>
          <Card className="group">
            <div className="relative aspect-video overflow-hidden bg-slate-100">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-50 object-cover transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <CardHeader className="mt-2">
              <CardTitle>
                <h3 className="font-bold text-center text-base md:text-xl text-slate-800 line-clamp-1">
                  {data.category.toUpperCase()}
                </h3>
              </CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default Cardcategories;
