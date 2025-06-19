import React, { useEffect, useRef } from "react";

const Extra = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Load Slick CSS and JS
    const loadSlick = async () => {
      // Load CSS
      const slickCSS = document.createElement("link");
      slickCSS.rel = "stylesheet";
      slickCSS.href =
        "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css";
      document.head.appendChild(slickCSS);

      const slickThemeCSS = document.createElement("link");
      slickThemeCSS.rel = "stylesheet";
      slickThemeCSS.href =
        "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css";
      document.head.appendChild(slickThemeCSS);

      // Load jQuery
      const jqueryScript = document.createElement("script");
      jqueryScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
      document.head.appendChild(jqueryScript);

      // Load Slick JS after jQuery
      jqueryScript.onload = () => {
        const slickScript = document.createElement("script");
        slickScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js";
        document.head.appendChild(slickScript);

        slickScript.onload = () => {
          // Initialize Slick carousel
          if (window.$ && carouselRef.current) {
            window.$(carouselRef.current).slick({
              slidesToShow: 2,
              slidesToScroll: 1,
              variableWidth: true,
              infinite: true,
              arrows: true,
              dots: true,
              centerMode: false,
              focusOnSelect: true,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                  },
                },
              ],
            });
          }
        };
      };
    };

    loadSlick();

    // Cleanup
    return () => {
      if (window.$ && carouselRef.current) {
        window.$(carouselRef.current).slick("unslick");
      }
    };
  }, []);

  const carouselData = [
    {
      id: 1,
      type: "large",
      title: "Large Card 1",
      content:
        "This is a large card taking 65% width. It has more space for detailed content, images, and longer descriptions.",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      tag: "Featured",
    },
    {
      id: 2,
      type: "small",
      title: "Small Card 1",
      content: "Compact card with 35% width for quick info.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=300&fit=crop",
      tag: "Quick",
    },
    {
      id: 3,
      type: "large",
      title: "Large Card 2",
      content:
        "Another large card with extensive content area. Perfect for detailed product showcases or feature highlights.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      tag: "Premium",
    },
    {
      id: 4,
      type: "small",
      title: "Small Card 2",
      content: "Another compact option for brief highlights.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=300&fit=crop",
      tag: "Brief",
    },
    {
      id: 5,
      type: "large",
      title: "Large Card 3",
      content:
        "The third large card demonstrating consistent spacing and layout across different content types.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
      tag: "Showcase",
    },
    {
      id: 6,
      type: "small",
      title: "Small Card 3",
      content: "Final compact card in the series.",
      image:
        "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=200&h=300&fit=crop",
      tag: "Final",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Variable Width Carousel
        </h1>
        <p className="text-gray-600">
          Cards with 65% and 35% widths in a responsive carousel
        </p>
      </div>

      <div className="relative">
        <div ref={carouselRef} className="variable-width-carousel">
          {carouselData.map((item) => (
            <div
              key={item.id}
              className={`px-2 ${
                item.type === "large" ? "large-slide" : "small-slide"
              }`}
            >
              <div
                className={`
                bg-white rounded-xl shadow-lg overflow-hidden h-80 
                transition-transform duration-300 hover:scale-105 hover:shadow-xl
                ${
                  item.type === "large"
                    ? "border-l-4 border-blue-500"
                    : "border-l-4 border-green-500"
                }
              `}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`
                    absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium
                    ${
                      item.type === "large"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }
                  `}
                  >
                    {item.tag}
                  </div>
                </div>

                <div className="p-4 h-48 flex flex-col">
                  <h3
                    className={`
                    font-bold text-gray-800 mb-2
                    ${item.type === "large" ? "text-xl" : "text-lg"}
                  `}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`
                    text-gray-600 flex-grow
                    ${
                      item.type === "large"
                        ? "text-sm leading-relaxed"
                        : "text-xs"
                    }
                  `}
                  >
                    {item.content}
                  </p>

                  <div className="mt-auto pt-4">
                    <button
                      className={`
                      w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200
                      ${
                        item.type === "large"
                          ? "bg-blue-500 hover:bg-blue-600 text-white"
                          : "bg-green-500 hover:bg-green-600 text-white"
                      }
                    `}
                    >
                      {item.type === "large" ? "Learn More" : "Quick View"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .variable-width-carousel .large-slide {
          width: 65% !important;
        }

        .variable-width-carousel .small-slide {
          width: 35% !important;
        }

        .variable-width-carousel .slick-slide {
          margin: 0 8px;
        }

        .variable-width-carousel .slick-list {
          margin: 0 -8px;
        }

        .variable-width-carousel .slick-dots {
          bottom: -50px;
        }

        .variable-width-carousel .slick-dots li button:before {
          font-size: 12px;
          color: #64748b;
        }

        .variable-width-carousel .slick-dots li.slick-active button:before {
          color: #3b82f6;
        }

        .variable-width-carousel .slick-prev,
        .variable-width-carousel .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
        }

        .variable-width-carousel .slick-prev {
          left: -20px;
        }

        .variable-width-carousel .slick-next {
          right: -20px;
        }

        .variable-width-carousel .slick-prev:before,
        .variable-width-carousel .slick-next:before {
          font-size: 20px;
          color: #64748b;
        }

        @media (max-width: 768px) {
          .variable-width-carousel .large-slide {
            width: 80% !important;
          }

          .variable-width-carousel .small-slide {
            width: 60% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Extra;
