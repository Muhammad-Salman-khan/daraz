import { LoadingCarousel } from './loading-carousel';

const ClousorComponent = () => {
  return (
    <>
      <div className="flex justify-center align-middle ">
        <div className="max-w-7xl  grid grid-flow-col-dense ">
          <LoadingCarousel className="" />
          <div className="hidden lg:flex ">
            <img src="/sideimg.PNG" className=" " />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClousorComponent;
