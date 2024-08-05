import { useEffect, useRef, useState } from "react";
import { useHoodiesCart } from "../../hooks/HoodiesCartContext";
// import { TiArrowSortedDown } from "react-icons/ti";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const HoodiesCart = () => {
  const [storeCartData, setStoreCartData] = useState([]);
  // const { cartItems } = useHoodiesCart();
  const { cartItems, removeFromCart } = useHoodiesCart();

  // const [isOpenDropdowns, setIsOpenDropdowns] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const savedCartData = localStorage.getItem("storeCartData");
    if (savedCartData) {
      setStoreCartData(JSON.parse(savedCartData));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      setStoreCartData((prevData) => {
        const newItems = cartItems.filter(
          (item) => !prevData.some((prevItem) => prevItem.id === item.id)
        );
        const updatedData = [...prevData, ...newItems];
        return updatedData;
      });
    }
  }, [cartItems]);

  // Persist storeCartData to localStorage whenever storeCartData changes
  useEffect(() => {
    if (storeCartData.length > 0) {
      localStorage.setItem("storeCartData", JSON.stringify(storeCartData));
    }
  }, [storeCartData]);

  const handleRemove = (id) => {
    const updatedCartData = storeCartData.filter((item) => item.id !== id);
    setStoreCartData(updatedCartData);
    removeFromCart(id); // Update context state as well
    localStorage.setItem("storeCartData", JSON.stringify(updatedCartData));
    toast("Removed from cart successfully!");
  };

  // const handleWishlist = () => {
  //   console.log("Add to wishlist");

  //   toast("Add to wishlist successfully!");
  // };

  // const toggleDropdown = (id) => {
  //   setIsOpenDropdowns((prev) => ({
  //     ...prev,
  //     [id]: !prev[id],
  //   }));
  // };

  // useEffect(() => {
  //   // const handleClickOutside = (event) => {
  //   //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //   //     // setIsOpenDropdowns({});
  //   //   }
  //   // };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const calculateDiscount = (oldPrice, newPrice) => {
    const amountSaved = oldPrice - newPrice;
    const discountPercentage = ((amountSaved / oldPrice) * 100).toFixed(2);
    return {
      amountSaved,
      discountPercentage,
    };
  };

  // console.log(storeCartData);

  const redirectWhatsapp = () => {
    // const currentUrl = window.location.href;
    const productDetails = storeCartData
      .map((item) => {
        return `*${item.product_head}*\nPrice: ${
          item.product_new_price
        }\nSize: ${item.selectedSize}\nDiscount: ${
          calculateDiscount(item.product_old_price, item.product_new_price)
            .discountPercentage
        }% off`;
      })
      .join("\n\n");

    const message = `Hi WINGS, please tell more about this product's:\n\n${productDetails}\n\nfrom my cart!`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6386897632&text=${encodeURIComponent(
      message
    )}&type=phone_number&app_absent=0`;
    window.location.href = whatsappUrl;
  };

  return (
    <>
      <div className="flex flex-col py-8 px-4">
        <div className="">
          <h1 className="text-2xl font-semibold text-green-900">My Cart</h1>
        </div>

        <ToastContainer />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {storeCartData.map((items, index) => {
            const { amountSaved, discountPercentage } = calculateDiscount(
              items.product_old_price,
              items.product_new_price
            );

            return (
              <div
                key={index}
                className="flex flex-col w-full shadow-xl rounded-xl my-2"
              >
                <div className="flex flex-col md:flex-row gap-4 py-3 px-4 w-full">
                  <div
                    ref={dropdownRef}
                    className="flex flex-col gap-2 w-full md:w-1/3"
                  >
                    <img
                      src={items.images[0]}
                      alt={items.alt}
                      className="h-[20rem] md:h-[15rem] w-full object-cover hover:scale-105 rounded-lg cursor-pointer"
                    />

                    {/* <div className="relative inline-block text-left">
                      <div>
                        <button
                          onClick={() => toggleDropdown(items.id)}
                          type="button"
                          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                          id="menu-button"
                          aria-expanded="true"
                          aria-haspopup="true"
                        >
                          Options
                          <TiArrowSortedDown />
                        </button>
                      </div>

                      {isOpenDropdowns[items.id] && (
                        <div
                          className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none opacity-100 z-50"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabIndex="-1"
                        >
                          <div className="py-1" role="none">
                            <span
                              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                              tabIndex="-1"
                            >
                              1
                            </span>
                            <span
                              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                              tabIndex="-1"
                            >
                              2
                            </span>
                          </div>
                        </div>
                      )}
                    </div> */}
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <h1 className="text-xl font-semibold text-black">
                      {items.product_head}
                    </h1>
                    <span className="text-base font-semibold text-slate-500">
                      {items.product_para}
                    </span>

                    <div className="flex flex-col my-4">
                      <span className="flex items-center text-base font-semibold text-black">
                        <MdOutlineCurrencyRupee />
                        {items.product_new_price}
                        <span className="flex items-center text-red-600 text line-through pl-2">
                          <MdOutlineCurrencyRupee />
                          {items.product_old_price}
                        </span>

                        <span className="text-green-500 pl-2">
                          ({discountPercentage}% Off)
                        </span>
                      </span>

                      <span className="flex items-center text-base font-semibold text-black">
                        You Save
                        <span className="flex items-center text-green-500 pl-2">
                          <MdOutlineCurrencyRupee />
                          {amountSaved}
                        </span>
                      </span>
                    </div>

                    <div className="flex items-center gap-14 w-full">
                      <span className="text-base font-semibold text-slate-500">
                        Color : <span className="text-black">Dark Gray</span>
                      </span>

                      <span className="text-base font-semibold text-slate-500">
                        Size:{" "}
                        <span className="text-black">{items.selectedSize}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full border border-b-2 border-t-0 py-1"></div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full py-1 px-4">
                  <button
                    className="hover:scale-110 rounded-lg text-lg font-semibold text-black w-full p-2"
                    onClick={() => handleRemove(items.id)}
                  >
                    Remove
                  </button>

                  {/* <button
                    className="hover:scale-110 bg-blue-700 hover:bg-blue-600 rounded-lg text-lg font-semibold text-white w-full md:w-3/4 p-2"
                    onClick={handleWishlist}
                  >
                    Move To Wishlist
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center w-full mt-14 mb-8">
          <button
            className="hover:scale-110 bg-green-700 hover:bg-green-600 rounded-lg text-2xl font-bold text-white w-full sm:w-1/5 p-2"
            onClick={redirectWhatsapp}
          >
            Checkout
          </button>
        </div>

        <div className="text-center">
          <h1>Please attach screen-shot of the product while checkout</h1>
        </div>
      </div>
    </>
  );
};

export default HoodiesCart;
