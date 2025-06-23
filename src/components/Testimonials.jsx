import React from "react";
import { SectionHeading } from "./SectionHeading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SoftBuses from "./SoftBuses";

export const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    adaptiveHeight: false,
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
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
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

      name: "Jnplnce",
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
          Working with <span className="font-semibold text-primary">Soft</span>
          buses has been a fantastic experience. From problem-solving to
          delivering pixel-perfect UI, everything was done with precision and
          passion!
        </>
      ),
      focus: "Design Precision & Reliability",
      rating: 4,
    },
  ];

  return (
    <section className="~/xl:~mt-8/20 mb-20">
      <div className="w-full mx-auto max-w-[1660px] inline-block flex-col items-center justify-center ~/xl:~px-6/40   gap-y-8">
        <div className="w-full">
          <SectionHeading firstTitle="Client" secondTitle="Testimonials" />
        </div>

        <div className="mt-8 md:mt-12">
          <Slider className="" {...settings}>
            {clientTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="!flex px-2"
                style={{ height: "auto" }}
              >
                <div
                  className={`flex flex-col items-center justify-between w-full border-[2px] border-white/50 gap-y-4 px-4 py-8 min-h-[400px] ${index % 2 === 0 ? "bg-black" : "bg-[#2B6604]"
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
  );
};
