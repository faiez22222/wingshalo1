const AboutusSection = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center items-center min-h-screen w-full relative">
          <img
            src="/assets/page-4/about-image.jpeg"
            alt="about-image"
            className="object-cover w-full h-full absolute"
          />

          <div className="bg-gradient-to-t from-[#4c2d1ce0] to-transparent flex flex-col justify-center items-center px-4 sm:px-10 py-20 relative">
            <h2 className="text-white text-2xl sm:text-5xl font-bold mb-5">
              ABOUT WINGS!
            </h2>

            <p className="text-white text-base sm:text-lg text-center max-w-6xl sm:max-w-5xl">
              Wings, established in 2022 by Law and Management Graduates, is
              dedicated to delivering premium-quality cotton apparel featuring
              impressive prints and designs. Our primary objective is to provide
              customers with meticulously crafted garments that blend comfort,
              style, and durability seamlessly. At Wings, we go beyond
              off-the-rack offerings by providing customized clothing options
              tailored to individual preferences. Additionally, we cater to bulk
              orders, ensuring that businesses, organizations, and events
              receive high-quality attire that aligns with their branding and
              requirements. With Wings, experience clothing that not only
              reflects your unique personality but also meets your specific
              needs, whether you are an individual seeking personalized style or
              an organization looking to make a statement.
            </p>
          </div>
        </div>

        <div className="bg-white h-1"></div>
      </div>
    </>
  );
};

export default AboutusSection;
