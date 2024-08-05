import PropTypes from "prop-types";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMarkEmailUnread, MdOutlinePhone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const footerHeading = [
  {
    name: "POPULAR CATEGORIES",
    product1: "Polo Tshirts",
    product2: "Hoodies",
    product3: "Zipppers",
    product4: "Oversized",
    product5: "Round Neck TShirts",
  },

  {
    name: "CONTACT",
    locationIcon: <IoLocationOutline />,
    product1: "Al Madina Market, Shivgarh Bazar, Soraon, Prayagraj-212502",
    phoneIcon: <MdOutlinePhone />,
    product2: "+91 6386897632",
    mailIcon: <MdOutlineMarkEmailUnread />,
    product3: "wingsclothing0@gmail.com",
  },
];

const Footer = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
    <>
      {/* <div ref={ref} className="relative w-full">
        <div className="flex flex-col sm:flex-row">
          <img
            src="/assets/page-3/DSC_6971-copy.jpeg"
            alt="DSC_7062.JPG"
            className="w-full sm:w-1/2 h-[25rem] object-cover"
          />
          <img
            src="/assets/page-3/DSC_6963.jpeg"
            alt="DSC_7062.JPG"
            className="w-full sm:w-1/2 h-[25rem] object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex justify-center items-center">
          <span className="text-green-500 text-center text-3xl sm:text-4xl md:text-5xl lg:text-[8em] font-bold font-sans tracking-tighter">
            Get More Attractive Offers
          </span>
        </div>
      </div> */}

      <div ref={ref} className="flex flex-col bg-black">
        <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 lg:gap-24 text-white my-6">
          {footerHeading.map((items, index) => (
            <div className="flex flex-col gap-4 pl-2" key={index}>
              <div className="flex flex-col">
                <h1 className="text-white font-bold">{items.name}</h1>
                <span className="w-12 bg-blue-300 h-[1px]"></span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  {items.locationIcon && (
                    <span className="text-2xl">{items.locationIcon}</span>
                  )}
                  {items.locationIcon ? (
                    <h4>{items.product1}</h4>
                  ) : (
                    <h4
                      className="cursor-pointer"
                      onClick={() => navigate("/polo")}
                    >
                      {items.product1}
                    </h4>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {items.phoneIcon && (
                    <span className="text-2xl">{items.phoneIcon}</span>
                  )}
                  {items.locationIcon ? (
                    <h4>{items.product2}</h4>
                  ) : (
                    <h4
                      className="cursor-pointer"
                      onClick={() => navigate("/hoodies")}
                    >
                      {items.product2}
                    </h4>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {items.mailIcon && (
                    <span className="text-2xl">{items.mailIcon}</span>
                  )}
                  {items.locationIcon ? (
                    <h4>{items.product3}</h4>
                  ) : (
                    <h4
                      className="cursor-pointer"
                      onClick={() => navigate("/zippers")}
                    >
                      {items.product3}
                    </h4>
                  )}
                </div>

                <h4
                  className="cursor-pointer"
                  onClick={() => navigate("/oversized")}
                >
                  {items.product4}
                </h4>
                <h4
                  className="cursor-pointer"
                  onClick={() => navigate("/rounded-Tshirts")}
                >
                  {items.product5}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center gap-1 my-4">
          <p className="text-base text-gray-500/90">
            Copyright @ Wings All Rights Reserved.
          </p>

          <p className="text-base text-gray-500/90">
            Design And Manage By{" "}
            <Link to={"https://www.hallotech.in"} className="text-green-500">
              HalloTech Solutions
            </Link>
          </p>
        </div>
      </div>
    </>
  );
});

Footer.propTypes = {
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

Footer.displayName = "Footer";

export default Footer;
