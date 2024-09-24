import image from '../assets/hero_img.jpeg'
const Hero2 = () => {
    return (
      <div className="bg-[#5CAFFC] shadow-lg p-8 rounded-lg flex items-center justify-between w-full m-3 mx-auto">
        {/* Left Section */}
        <div className="text-left text-white max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            The Best Platform for Car Rental
          </h1>
          <p className="text-lg mb-6">
            Ease of doing a car rental safely and reliably. Of course, at a low price.
          </p>
          <button className="bg-white text-[#5CAFFC] font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300">
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
    );
  };

  export default Hero2;