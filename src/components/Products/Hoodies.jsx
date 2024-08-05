import { useNavigate } from "react-router-dom";
import hoodies from "../../../json/hoodies.json";

const Hoodies = () => {
  const navigate = useNavigate();

  const handleUserClick = (hoodies) => {
    // console.log("send the correct data from the users", hoodies);
    navigate("/single-hoodies", { state: { hoodiesSingleData: hoodies } });
    // navigate("/user-profile");
  };

  const truncateText = (text, wordLimit) => {
    // console.log(text, wordLimit);
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "....";
    }
    return text;
  };

  // console.log(hoodies[0].images[0]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-3 w-full bg-white px-5 py-8">
        {hoodies.map((itmes, index) => (
          // sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5
          <div
            key={index}
            className="bg-grey rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 p-4 h-[490px] flex flex-col"
            onClick={() => handleUserClick(itmes)}
          >
            {/* <div className="h-[12rem]"> */}
            <img
              src={itmes.images[0]}
              alt={itmes.alt}
              className="h-[25rem] transform transition-transform delay-150 duration-150 ease-in-out hover:scale-105"
            />
            {/* </div> */}

            <div className="flex flex-col px-2">
              <h1 className="text-black font-semibold">{itmes.product_head}</h1>
              <p className="text-gray-600/80 font-semibold">
                {/* {itmes.product_para} */}
                {truncateText(itmes.product_para, 6)}
              </p>

              <span className="text-green-600 font-semibold">
                {itmes.product_new_price} /-{" "}
                <span className="text-red-600 text line-through">
                  {itmes.product_old_price}/-
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hoodies;
