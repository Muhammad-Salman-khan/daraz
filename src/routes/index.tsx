import { Button } from '@/components/button';

import { createFileRoute } from '@tanstack/react-router';
import { Link } from 'lucide-react';
import { LayoutGrid } from '@/components/layout-grid';
import Clarousal from '@/components/Clousor/Clarousal';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <>
      <main className="w-full p-3 flex justify-center align-middle items-center">
        <div className="w-7xl  grid grid-cols-1 lg:grid-cols-[3fr_1fr]">
          <section className="-z-10">
            <Clarousal />
          </section>
          <div className=" ">
            <img src="/sideimg.PNG " className="h-80 " />
          </div>
        </div>
      </main>
    </>
  );
}
