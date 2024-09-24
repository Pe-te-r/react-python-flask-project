import image from "../assets/hero_img.jpeg"
const Hero1 = () => {
  return (
    <div className="bg-[#3563E9] shadow-lg p-8 rounded-lg  w-4/5 mx-auto mt-3">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Left Section - Text */}
        <div className="text-left text-white max-w-lg">
          {/* Heading */}
          <h1 className="text-4xl font-bold mb-4">
            Easy way to rent a car at a low price
          </h1>

          {/* Subheading */}
          <p className="text-lg mb-6">
            Providing cheap car rental services and safe and comfortable facilities.
          </p>

          {/* Button */}
          <button className="bg-white text-[#3563E9] font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300">
            Rental Cars
          </button>
        </div>

        {/* Right Section - Car Image */}
        <div className="max-w-md">
          <img 
            src={image} // Replace with actual car image
            alt="Car" 
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero1;
