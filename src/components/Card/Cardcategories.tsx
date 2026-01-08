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
          <div className="group relative  flex flex-col h-full bg-white rounded-sm border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video overflow-hidden bg-slate-100">
              <img
                src={data.image}
                alt={data.title}
                className=" h-50 w-full object-cover transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col grow p-3 ">
              <div className="grow space-y-2">
                <h3 className="font-bold text-slate-800 text-base md:text-lg line-clamp-2 min-h-12 leading-tight group-hover:text-blue-600 transition-colors">
                  {data.category.toUpperCase()}
                </h3>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Cardcategories;
