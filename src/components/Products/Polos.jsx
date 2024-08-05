import { useNavigate } from "react-router-dom";
import polos from "../../../json/polos.json";

const Polos = () => {
  const navigate = useNavigate();

  const handleUserClick = (polos) => {
    navigate("/single-hoodies", { state: { hoodiesSingleData: polos } });
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "....";
    }
    return text;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6 bg-gray-200 font-poppins">
      {polos.map((item, index) => (
        <div 
          key={index} 
          className="bg-grey rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 p-4 h-[490px] flex flex-col"
          onClick={() => handleUserClick(item)}
        >
          <img
            src={item.images[0]}
            alt={item.alt}
            className="w-full h-74 object-cover"
          />
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.product_head}</h2>
              <p className="text-sm text-gray-600 mb-3">
                {truncateText(item.product_para, 6)}
              </p>
            </div>
            <div className="flex items-center">
  <span className="text-green-600 font-semibold mr-1">{item.product_new_price}/-</span>
  <span className="text-red-600 line-through text-sm">{item.product_old_price}/-</span>
</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Polos;