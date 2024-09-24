import  { useState } from 'react';
import { FaHeart, FaRegHeart, FaGasPump, FaUser, FaCarSide } from 'react-icons/fa'; // Icons for heart, fuel, users, and car type

const CarCard = ({ name, type, image, fuelType, transmission, passengers, pricePerDay }: any) => {
  const [liked, setLiked] = useState(false); // Heart state

  // Toggle liked state and log to console
  const toggleLike = () => {
    setLiked(!liked);
    console.log('liked');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md m-2">
      {/* Title and Like Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{name}</h2>
        {/* Heart Icon */}
        <div onClick={toggleLike} className="cursor-pointer">
          {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400" />}
        </div>
      </div>

      {/* Car Type */}
      <p className="text-sm text-gray-500 mb-2">{type}</p>

      {/* Car Image */}
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />

      {/* Car Details Row */}
      <div className="flex justify-between items-center mb-4">
        {/* Fuel Type */}
        <div className="flex items-center space-x-2">
          <FaGasPump className="text-gray-500" />
          <p className="text-sm text-gray-700">{fuelType}</p>
        </div>

        {/* Transmission */}
        <div className="flex items-center space-x-2">
          <FaCarSide className="text-gray-500" />
          <p className="text-sm text-gray-700">{transmission}</p>
        </div>

        {/* Passengers */}
        <div className="flex items-center space-x-2">
          <FaUser className="text-gray-500" />
          <p className="text-sm text-gray-700">{passengers} People</p>
        </div>
      </div>

      {/* Price and Rent Button */}
      <div className="flex justify-between items-center">
        {/* Price */}
        <p className="text-lg font-bold text-gray-900">${pricePerDay}/day</p>
        {/* Rent Now Button */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
