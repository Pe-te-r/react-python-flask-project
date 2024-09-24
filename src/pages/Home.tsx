import { useEffect, useState } from "react";
import Hero1 from "../components/Hero1";
import Hero2 from "../components/Hero2";
import CarCard from "../components/CarCard";
import image from '../assets/hero_img.jpeg'

const Home = () => {
  const carsData = [
    {
      name: 'Rolls-Royce',
      type: 'Sedan',
      image: image, // Replace with actual image URL
      fuelType: 'Gasoline',
      transmission: 'Manual',
      passengers: 5,
      pricePerDay: 86.00,
    },
    {
      name: 'Tesla Model S',
      type: 'Electric',
      image: image, // Replace with actual image URL
      fuelType: 'Electric',
      transmission: 'Automatic',
      passengers: 4,
      pricePerDay: 120.00,
    },
    {
      name: 'BMW X5',
      type: 'SUV',
      image: image, // Replace with actual image URL
      fuelType: 'Diesel',
      transmission: 'Automatic',
      passengers: 7,
      pricePerDay: 95.00,
    },
    {
      name: 'Ford Mustang',
      type: 'Convertible',
      image: image, // Replace with actual image URL
      fuelType: 'Gasoline',
      transmission: 'Manual',
      passengers: 4,
      pricePerDay: 150.00,
    },
    {
      name: 'Audi A6',
      type: 'Sedan',
      image: image, // Replace with actual image URL
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      passengers: 5,
      pricePerDay: 100.00,
    },
    {
      name: 'Toyota Prius',
      type: 'Hatchback',
      image: image, // Replace with actual image URL
      fuelType: 'Hybrid',
      transmission: 'Automatic',
      passengers: 5,
      pricePerDay: 65.00,
    },
    {
      name: 'Mercedes-Benz G-Class',
      type: 'SUV',
      image: image, // Replace with actual image URL
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      passengers: 5,
      pricePerDay: 200.00,
    },
    {
      name: 'Honda Civic',
      type: 'Sedan',
      image: image, // Replace with actual image URL
      fuelType: 'Gasoline',
      transmission: 'Manual',
      passengers: 5,
      pricePerDay: 55.00,
    },
    {
      name: 'Chevrolet Bolt EV',
      type: 'Electric',
      image: image, // Replace with actual image URL
      fuelType: 'Electric',
      transmission: 'Automatic',
      passengers: 5,
      pricePerDay: 85.00,
    },
    {
      name: 'Porsche 911',
      type: 'Sports Car',
      image: image, // Replace with actual image URL
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      passengers: 2,
      pricePerDay: 250.00,
    }
  ];
  

  const [activeIndex, setActiveIndex] = useState(0); // Track the current hero (0 or 1)
  const [isHovered, setIsHovered] = useState(false); // Track if the section is hovered

  useEffect(() => {
    let interval: number;

    if (!isHovered) {
      // Start auto-scrolling when not hovered
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
      }, 3000); // 3 seconds interval
    }

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [isHovered]);

  return (
    <div className="relative overflow-hidden w-full h-full bg-yellow-200">
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(${activeIndex * -100}%)` }}
      onMouseEnter={() => setIsHovered(true)} // Pause when hovered
      onMouseLeave={() => setIsHovered(false)} // Resume when mouse leaves
      >
        <div className="min-w-full">
          <Hero1 />
        </div>
        <div className="min-w-full">
          <Hero2 />
        </div>
      </div>
      <div className="py-3 mt-3">
        <p className="text-center text-[1.3rem] font-semibold">Popular Cars</p>
      </div>
    <div className="flex flex-wrap justify-center space-x-4 p-4 mt-1">
  {carsData.map((car, index) => (
    <CarCard 
      key={index}
      name={car.name}
      type={car.type}
      image={car.image}
      fuelType={car.fuelType}
      transmission={car.transmission}
      passengers={car.passengers}
      pricePerDay={car.pricePerDay}
    />
  ))}
</div>

    </div>
  );
};

export default Home;