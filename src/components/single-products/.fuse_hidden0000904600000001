import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHoodiesCart } from "../../hooks/HoodiesCartContext";
import { v4 as uuidv4 } from "uuid";
import HoodiesModels from "../models/Hoodies.models";
// import BuyModels from "../models/Buy.models";

const SingleHoodies = () => {
  const [selectImage, setSelectImage] = useState();
  const [rating, setRating] = useState(0);
  const [selectedSize, setSelectedSize] = useState("S");

  const { addToCart } = useHoodiesCart();

  const location = useLocation();
  const { hoodiesSingleData } = location.state;

  useEffect(() => {
    setSelectedSize("S"); // Ensure default size "S" is selected on component mount
  }, []);

  const handleClickImage = (currentImage) => {
    // console.log(currentImage);
    setSelectImage(currentImage);
  };

  const handleStarClick = (value) => {
    setRating(value);
    // console.log("start click value was ", value);
  };

  const handleAddtoCart = (cartData) => {
    const cartDataWithSize = { ...cartData, selectedSize, id: uuidv4() };
    addToCart(cartDataWithSize);
    // console.log(cartDataWithSize);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // console.log(hoodiesSingleData);

  const redirectWhatsapp = () => {
    // const currentUrl = window.location.href;
    // const currentUrl = "Hi WINGS, please tell more about";
    const productHead = hoodiesSingleData.product_head;
    const productPrice = hoodiesSingleData.product_new_price;
    const message = `Hi WINGS, please tell more about ${productHead} which is for just ${productPrice}!`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6386897632&text=${encodeURIComponent(
      message
    )}&type=phone_number&app_absent=0`;

    window.location.href = whatsappUrl;
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-2 w-full px-4 my-4">
        {/* product right side image scroller code start here */}
        <div className="snap-x flex flex-row lg:flex-col justify-start items-center overflow-y-scroll scroll-smooth snap-mandatory gap-4 my-2 sm:my-12 hide-scrollbar md:h-[33rem] w-full lg:w-[44rem] xl:w-[27rem]">
          {hoodiesSingleData.images
            .slice(0, hoodiesSingleData.images.length - 1)
            .map((item, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 relative cursor-pointer h-[24rem]"
              >
                <img
                  className={`w-full h-full rounded-3xl`}
                  src={item}
                  alt="{item.alt}"
                  onClick={() => handleClickImage(item)}
                />
                {/* <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent rounded-b-3xl flex justify-center items-end pb-4">
                <span className="text-white text-center">
                  {item.productName}
                </span>
              </div> */}
              </div>
            ))}
        </div>
        {/* product right side image scroller code end here */}

        {/* product image code start here */}
        <div className="w-full sm:w-[22rem] md:w-[23rem] lg:w-[53rem] xl:w-[37rem]">
          <img
            src={selectImage ? selectImage : hoodiesSingleData.images[0]}
            alt="selected image"
            className="w-full h-[33rem] rounded-2xl object-cover"
          />
        </div>
        {/* product image code end here */}

        <ToastContainer />

        <div className="flex flex-col justify-between w-full h-[33rem] rounded-2xl mb-8">
          {/* product heading and price code start here */}
          <div className="flex flex-col gap-4 sm:px-7 pt-6">
            <h1 className="text-black font-bold text-2xl">
              {hoodiesSingleData.product_head}
            </h1>

            <p className="text-black/100 font-bold text-base">
              {hoodiesSingleData.product_para}
            </p>

            <span className="text-green-700 font-bold text-3xl">
              {hoodiesSingleData.product_new_price} /-
            </span>
          </div>
          {/* product heading and price code end here */}

          {/* rating code start here */}
          <div className="flex flex-col sm:px-7 pt-4">
            <h1 className="text-black/100 font-bold text-2xl">
              Rate this Product
            </h1>

            {/* rating */}
            <div className="my-4 flex gap-5">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <span
                    key={index}
                    className="star"
                    onClick={() => handleStarClick(starValue)}
                  >
                    {starValue <= rating ? (
                      <FaStar className="text-3xl text-yellow-400 cursor-pointer" />
                    ) : (
                      <FaRegStar className="text-3xl text-yellow-400 cursor-pointer" />
                    )}
                  </span>
                );
              })}
            </div>
          </div>
          {/* rating code end here */}

          {/* size content here */}
          <div className="flex flex-col sm:px-7 pt-4">
            <span className="flex items-center justify-between sm:justify-normal gap-[125px]">
              <span className="text-black/100 font-bold text-base sm:text-2xl">
                Size : {selectedSize}
              </span>

              <HoodiesModels chartImage={hoodiesSingleData.images} />
            </span>

            <div className="flex mt-5 gap-4 overflow-x-scroll hide-scrollbar">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className={`border rounded-lg py-1 px-4 cursor-pointer ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "border-black"
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* button code start here */}
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:px-7 py-4">
            <button
              className="hover:scale-110 bg-green-800 hover:bg-green-600 text-white font-bold text-lg p-2 rounded-lg w-full"
              onClick={() => handleAddtoCart(hoodiesSingleData)}
            >
              Add to Cart
            </button>

            {/* <BuyModels /> */}
            <button
              className="hover:scale-110 bg-black hover:bg-black/80 text-white font-bold text-lg p-2 rounded-lg w-full"
              onClick={redirectWhatsapp}
            >
              Checkout
            </button>
          </div>

          <div className="text-center">
            <h1>Please attach screen-shot of the product while checkout</h1>
          </div>
          {/* button code end here */}
        </div>
      </div>
    </>
  );
};

export default SingleHoodies;
