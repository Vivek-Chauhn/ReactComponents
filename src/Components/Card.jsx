import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Testimonial from "./Testimonial";

const Card = () => {
  // for zoho services
  const businesses = [
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "Zoho One",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "Zoho Crm",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "ZOho Form",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "Zoho Campaign",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "Zoho Projects",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Zoho Desk",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "Zoho Sales Iq",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "Distribution Industry",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "Zoho Booking",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV10Yv2Z-OBqPjn4fTzOJAke_7e9hLm0FG1lGnyHSaT1vJxJ9n",
      alt: "Abc",
      name: "Zoho Books",
    },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayCount = isSmallScreen ? 9 : businesses.length;
  // FAQ Section
  const [openIndices, setOpenIndices] = useState([]);
  const [isAllOpen, setIsAllOpen] = useState(false);

  const handleToggle = (i) => {
    if (openIndices.includes(i)) {
      setOpenIndices(openIndices.filter((index) => index !== i));
    } else {
      setOpenIndices([...openIndices, i]);
    }
  };

  const handleExpandAll = () => {
    setOpenIndices(faqs.map((_, i) => i));
    setIsAllOpen(true);
  };

  const handleHideAll = () => {
    setOpenIndices([]);
    setIsAllOpen(false);
  };

  // card data
  const cardData = [
    {
      title: "Data Management",
      description:
        "We ensure efficient organization, storage, and utilization of your data within Zoho applications, optimizing data workflows and security measures.",
      imgSrc: "/image/zo.png",
      borderColor: "border-green-500",
      titleColor: "text-green-500",
    },
    {
      title: "Platform Audit & Optimisation",
      description:
        "Our experts conduct thorough audits of your Zoho platform, identifying areas for improvement and implementing optimization strategies to enhance performance and efficiency.",
      imgSrc: "/image/zo.png",
      borderColor: "border-orange-500",
      titleColor: "text-orange-500",
    },
    {
      title: "Dashboard and Reporting Updates",
      description:
        "We continuously update and customize dashboards and reports within Zoho applications to provide real-time insights and analytics for informed decision-making.",
      imgSrc: "/image/zo.png",
      borderColor: "border-blue-500",
      titleColor: "text-blue-500",
    },
    {
      title: "Ongoing Technical Support",
      description:
        "Our dedicated team provides prompt technical support to address any issues or concerns, ensuring smooth operation and minimal downtime for your Zoho applications.",
      imgSrc: "/image/zo.png",
      borderColor: "border-pink-500",
      titleColor: "text-pink-500",
    },
    {
      title: "Adminstration & Employee Training",
      description:
        "We offer training sessions for administrators and employees to enhance their proficiency in using Zoho applications, empowering them to maximize productivity and efficiency.",
      imgSrc: "/image/zo.png",
      borderColor: "border-red-500",
      titleColor: "text-red-500",
    },
  ];
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:w-4/5 w-full md:grid-cols-3 sm:grid-cols-2 md:px-3 px-10 mx-auto gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative  shadow-lg flex flex-col justify-between transition-shadow duration-300 ease-in-out hover:shadow-[-10px_0_15px_0_rgba(0,0,0,0.2)]"
          >
            <div className="px-4">
              <img
                aria-hidden="true"
                alt={card.title}
                src={card.imgSrc}
                className="mx-auto mt-3"
              />
              <h3
                className={`text-lg font-semibold mt-2 transition-colors duration-300 ease-in-out group-hover:${card.titleColor}`}
              >
                {card.title}
              </h3>

              <p className="mt-2 text-sm">{card.description}</p>
            </div>
            <div className={`border-b-4 ${card.borderColor} mt-4`}></div>
          </div>
        ))}
      </div>

      {/* testimonial section */}
      <div className=" mt-10">
        <Testimonial />
      </div>
    </div>
  );
};

export default Card;
