import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    {
      information: "Zoho One Implementation for Top Shop Dubai",
      image: "/image/bg.jpg",
      link: "/case/topshop", // Add page link
    },
    {
      information: "Zoho One Implementation for IBC Super30",
      image: "/image/bg.jpg",
      link: "/case/ibcsuper30", // Add page link
    },
    {
      information: "Zoho One Implementation for Rescom Solar",
      image: "/image/bg.jpg",
      link: "/case/rescomsolar", // Add page link
    },
    {
      information: "I had the best time of my life! Everything was.",
      image: "/image/bg.jpg",
      link: "/case/besttime", // Add page link
    },
  ];

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const carouselRef = useRef(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        carouselRef.current.style.overflowX = "scroll";
      } else {
        carouselRef.current.style.overflowX = "hidden";
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-300 my-5 container">
      <div className="carousel-container relative container-wrapper">
        <div className="text-center md:text-left py-4 mt-6 md:mt-0 order-2 md:order-1">
          <h2 className="text-sm md:text-md font-bold text-gray-600">
            Case Studies
          </h2>
          <h1 className="text-2xl md:text-2xl font-semibold mb-3 text-gray-800">
            Some Successfully Completed Projects
          </h1>
        </div>

        <div className="carousel gap-5 pb-10" ref={carouselRef}>
          {data.map((item, index) => (
            <div
              key={index}
              className="relative bg-white min-w-80 rounded-lg mb-4 group"
            >
              <div className="px-4 py-2 relative">
                {/* Image with color overlay on hover */}
                <a href={item.link} className="block relative">
                  <img
                    src={item.image}
                    alt="Project"
                    className="w-full h-auto rounded"
                  />
                  {/* Color overlay on hover */}
                  <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded"></div>
                  {/* Arrow appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-md text-white"
                    />
                  </div>
                </a>
              </div>
              <div className="px-3 py-1">
                <p className="mt-1 md:text-lg text-md font-medium transition duration-400 ease-in-out hover:text-pi-300 py-1 line-clamp-3">
                  {item.information}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block absolute top-[70%] -translate-y-[60px] justify-between w-full">
          <div className="justify-between flex pl-2">
            <button
              onClick={scrollPrev}
              className="rounded-full h-10 w-10 bg-black/50 hover:bg-black p-3 text-white"
            >
              <FontAwesomeIcon icon={faAngleLeft} className="font" />
            </button>
            <button
              onClick={scrollNext}
              className="rounded-full bg-black/50 h-10 w-10 hover:bg-black p-3 text-white"
            >
              <FontAwesomeIcon icon={faAngleRight} className="font" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
