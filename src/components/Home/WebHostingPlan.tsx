import { TiTick } from "react-icons/ti";

export default function WebHostingPlan() {
  return (
    <div className="flex flex-col items-center justify-center rounded w-3/4 p-4 bg-gray-200 mb-7 md:w-2/4 lg:w-1/4">
      <h3 className="text-3xl font-bold text-purple-900">Premium</h3>
      <strong className="text-3xl font-bold text-gray-900 my-5">
        $4.99/mo
      </strong>
      <span className="bg-red text-red-900 rounded-full px-2 py-1 font-semibold ">
        10% OFF
      </span>
      <div className="mt-6">
        <h5 className="text-2xl mb-1 font-semibold text-purple-700">
          Top Features
        </h5>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick /> 100 Website
        </div>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick /> 100 GB SSD Storage
        </div>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick /> Weekly Backups
        </div>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick /> Unlimited Bandwidth
        </div>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick /> Free SLL
        </div>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick /> Free Email
        </div>
      </div>
      <button className="border-2 border-gray-900 font-bold text-gray-700 p-2 rounded-full hover:text-white hover:bg-gray-700 transition w-full">
        {" "}
        BUY NOW
      </button>
    </div>
  );
}