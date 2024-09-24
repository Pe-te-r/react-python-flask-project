// import { useEffect, useState } from "react";
// import Hero1 from "../components/Hero1";
// import Hero2 from "../components/Hero2";

import { useEffect, useState } from "react";
import Hero1 from "../components/Hero1";
import Hero2 from "../components/Hero2";

// const Home = () => {
//   const [activeIndex, setActiveIndex] = useState(0); // Track the current hero (0 or 1)

//   // Automatically scroll between the two hero cards every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
//     }, 3000); // 3 seconds interval
//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, []);

//   return (
//     <div className="relative overflow-hidden w-full h-full">
//       <div className="flex transition-transform duration-700" style={{ transform: `translateX(${activeIndex * -100}%)` }}>
//         <div className="min-w-full">
//           <Hero1 />
//         </div>
//         <div className="min-w-full">
//           <Hero2 />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

const Home = () => {
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
    <div 
      className="relative overflow-hidden w-full h-full"
      onMouseEnter={() => setIsHovered(true)} // Pause when hovered
      onMouseLeave={() => setIsHovered(false)} // Resume when mouse leaves
    >
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(${activeIndex * -100}%)` }}>
        <div className="min-w-full">
          <Hero1 />
        </div>
        <div className="min-w-full">
          <Hero2 />
        </div>
      </div>
    </div>
  );
};

export default Home;