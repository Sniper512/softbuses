import { SectionHeading } from "./SectionHeading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SoftBuses from "./SoftBuses";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Bar from "./Bar";

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary-dark hover:bg-primary-dark/80 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
    aria-label="Previous testimonial"
  >
    <FaArrowLeft />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary-dark hover:bg-primary-dark/80 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
    aria-label="Next testimonial"
  >
    <FaArrowRight />
  </button>
);

export const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    adaptiveHeight: false,
    autoplay: true,
    dotsClass: "slick-dots custom-dots",
    customPaging: function () {
      return (
        <div className="custom-dot mt-6">
          <div className="dot-inner"></div>
        </div>
      );
    },
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
        },
      },
    ],
  };
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img
          key={i}
          src="starSymbol.svg"
          alt="star"
          className={`w-4 h-4 ${i < rating ? "opacity-100" : "opacity-30"}`}
        />
      );
    }
    return stars;
  };

  const clientTestimonials = [
    {
      image: "1.png",
      name: "Heydarov Tabriz",
      title: "Flawless Execution & Fast Response Times",
      feedback: (
        <>
          <SoftBuses /> showcased
          excellent cooperation, timely delivery, and quick responsiveness!
        </>
      ),
      focus: "Project Delivery & Communication",
      rating: 5,
    },
    {
      image: "2.png",

      name: "iwoolution",
      title: "Exceptional Code & Collaboration",
      feedback: (
        <>
          <SoftBuses /> did an
          EXCEPTIONAL job with his professional work and code expertise. His
          attention to detail and timely delivery were spot on. Plus, his deep
          understanding and politeness made working together a breeze.
        </>
      ),
      focus: "Technical Excellence & Professionalism",
      rating: 5,
    },
    {
      image: "3.png",

      name: "Manymangoes",
      title: "Fast, Precise, and a Joy to Work With",
      feedback: (
        <>
          Fantastic. Great communication, attention to detail, and speed. We'll
          be working together again!
        </>
      ),
      focus: "Communication & Delivery",
      rating: 5,
    },
    {
      image: "3.png",

      name: "Rafay Asif",
      title: "Creative, Committed, and Consistently Impressive",
      feedback: (
        <>
          Working with <SoftBuses /> has been a fantastic experience. From problem-solving to
          delivering pixel-perfect UI, everything was done with precision and
          passion!
        </>
      ),
      focus: "Design Precision & Reliability",
      rating: 4,
    },
  ];

  return (
    <>
      <section className="w-full py-20">
        <div className="w-full mx-auto max-w-[1660px] block flex-col items-center justify-center ~/xl:~px-6/40 gap-y-8 pb-16">
          <div className="w-full">
            <SectionHeading firstTitle="Client" secondTitle="Testimonials" />
          </div>

          <div className="mt-8 md:mt-12 relative">
            <Slider className="" {...settings}>
              {clientTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="!flex px-2"
                  style={{ height: "auto" }}
                >
                  <div
                    className={`flex flex-col items-center justify-between w-full border-[2px] border-white/50 gap-y-4 px-4 py-8 min-h-[400px] ${index % 2 === 0 ? "bg-black" : "bg-primary-dark"
                      }`}
                  >
                    <div className=" w-20 h-auto flex items-center  justify-center  rounded-full border-2 object-cover object-top border-primary overflow-hidden">
                      <img
                        src={`testimonials/${testimonial.image}`}
                        alt="w-10 h-auto"
                      />
                    </div>
                    <span className="~sm/xl:~text-base/xl font-bold">
                      {testimonial.name}
                    </span>
                    <div className="flex items-center gap-1">
                      {renderStars(testimonial.rating)}
                    </div>

                    <span
                      className={`~sm/xl:~text-xs/base font-bold  text-center ${index % 2 === 0 ? "text-primary" : "text-white"
                        }`}
                    >
                      {testimonial.title}
                    </span>
                    <p className="~sm/xl:~text-xs/base flex-1 ">
                      {testimonial.feedback}
                    </p>
                    <div className="flex items-center w-full justify-between">
                      <span className="~sm/xl:~text-xs/base font-bold">
                        {testimonial.focus}
                      </span>
                      <span>
                        <img
                          src={`${index % 2 === 0
                            ? "commaSymbolGreen.svg"
                            : "commaSymbolWhite.svg"
                            }`}
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <Bar />
    </>
  );
};
