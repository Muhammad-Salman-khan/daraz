import { ShoppingCartIcon } from 'lucide-react';
import ActionSearchBar from '../action-search-bar';
const LogoSearchbar = () => {
  return (
    <>
      <div className="flex items-center align-bottom p-2 gap-5 justify-center">
        <div className="flex w-30 items-center justify-center rounded-xl ">
          <img src="/Darazlogo.svg" alt="Daraz Logo" className="object-cover" />
        </div>
        <ActionSearchBar />
        <ShoppingCartIcon color="white" size={30} />
      </div>
    </>
  );
};

export default LogoSearchbar;
