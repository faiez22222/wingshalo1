import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const carouselItems = [
  {
    url: "/assets/wings-orginal/wings-orginal-1.png",
    alt: "wings-orginal-1",
    href: "/polo",
  },
  {
    url: "/assets/wings-orginal/wings-orginal-2.png",
    alt: "wings-orginal-2",
    href: "/polo",
  },
  {
    url: "/assets/wings-orginal/wings-orginal-3.png",
    alt: "wings-orginal-3",
    href: "/polo",
  },
  {
    url: "/assets/wings-orginal/wings-orginal-4.png",
    alt: "wings-orginal-4",
    href: "/oversized",
  },
];

const WingsOrginal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(carouselItems.length / 2)
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(carouselItems.length / 2)) %
        Math.ceil(carouselItems.length / 2)
    );
  };

  // auto scroll
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderSlides = () => {
    const slides = [];
    for (let i = 0; i < carouselItems.length; i += 2) {
      slides.push(
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            currentIndex === Math.floor(i / 2) ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
            <Link to={carouselItems[i].href}>
              <img
                src={carouselItems[i].url}
                className="block w-full h-full object-cover cursor-pointer"
                alt={carouselItems[i].alt}
              />
            </Link>
            {carouselItems[i + 1] && (
              <Link to={carouselItems[i + 1].href}>
                <img
                  src={carouselItems[i + 1].url}
                  className="block w-full h-full object-cover cursor-pointer"
                  alt={carouselItems[i + 1].alt}
                />
              </Link>
            )}
          </div>
        </div>
      );
    }
    return slides;
  };

  return (
    <>
      <div className="relative w-full">
        {/* Carousel wrapper */}
        <div className="relative w-full h-[35rem] overflow-hidden rounded-lg">
          {/* Carousel items */}
          {renderSlides()}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {Array.from({ length: carouselItems.length / 2 }, (_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default WingsOrginal;
