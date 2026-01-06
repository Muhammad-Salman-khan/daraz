import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/carousel';
import Autoplay from 'embla-carousel-autoplay';

const data = [
  { src: '/slider1.jpg' },
  { src: '/slider2.jpg' },
  { src: '/slider3.jpg' },
  { src: '/slider4.jpg' },
  { src: '/slider5.jpg' },
  { src: '/slider6.jpg' },
  { src: '/slider7.jpg' },
];
const Clarousal = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          rootNode: (emblaRoot) => emblaRoot.parentElement,
        }),
      ]}
      opts={{
        loop: true,
        align: 'center',
        skipSnaps: false,
        dragFree: true,
      }}
    >
      <CarouselContent className="w-full">
        {data.map((e, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="h-full w-full overflow-hidden rounded-md">
              <img src={e.src} className="h-full w-full object-cover" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Clarousal;
