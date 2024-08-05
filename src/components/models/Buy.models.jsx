import { useState } from "react";

const sizeChart = [
  {
    sizeImage: "/assets/page-1/product-1(2)(9)-6.jpeg",
  },
];

const BuyModels = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <>
        <button
          className="hover:scale-110 bg-black hover:bg-black/80 text-white font-bold text-lg p-2 rounded-lg w-full"
          onClick={() => setShowModal(true)}
        >
          Buy now
        </button>

        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <div
                className="relative w-auto my-6 mx-auto max-w-3xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Seller Details</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>

                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <img src={sizeChart[0].sizeImage} alt="size chart image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </>
  );
};

export default BuyModels;
