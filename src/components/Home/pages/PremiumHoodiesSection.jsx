import InfiniteScroller from "./InifiteScroller";

const PremiumHoodiesSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div
          className="flex w-full h-3/4 mt-5"
          // onClick={() => navigate("/shop")}
        >
          <img
            src="/assets/wings-orginal/wings-orginal-banners.png"
            alt="DSC_7062.JPG"
            className="w-full sm:h-[15rem] object-cover sm:object-fill"
          />
        </div>

        <div className="flex flex-col w-full">
          <span className="text-black text-center my-4 text-2xl font-semibold">
            Shop by Category- Men
          </span>

          <InfiniteScroller />
        </div>
      </div>
    </>
  );
};

export default PremiumHoodiesSection;
