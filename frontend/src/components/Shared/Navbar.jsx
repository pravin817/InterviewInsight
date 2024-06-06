// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { navbarData } from "../Data/navbarData";
// import { IoMdClose, IoMdMenu } from "react-icons/io";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const isLoggedIn = false;

//   // Function to toggle the menu visibility
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav
//       className={`border-b-2 top-0 z-[99] bg-red-500 sticky shadow-lg ${
//         isMenuOpen ? "md:shadow-md" : ""
//       }`}
//     >
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-4 md:px-6 lg:px-8 transition-all duration-300 bg-blue-500">
//         <div className="flex flex-row justify-between items-center py-4 ">
//           <div className="flex-shrink-0">
//             <Link to={"/"} className="text-xl font-bold">
//               InterviewInsight
//             </Link>
//           </div>

//           {/* Button for the toogle  */}
//           <div className="flex items-center md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-2xl focus:outline-none"
//             >
//               {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
//             </button>
//           </div>

//           <div
//             className={`${
//               isMenuOpen ? "left-0 w-2/3 rounded-br-md" : "-left-full"
//             } absolute top-full bg-white shadow-md md:static md:shadow-none md:flex md:flex-row md:items-center md:justify-end space-x-4 text-sm text-gray-800 font-medium transition-all duration-300 transform`}
//           >
//             <div className="flex flex-col md:flex-row">
//               {navbarData.map((item) => (
//                 <Link
//                   key={item.id}
//                   to={item.to}
//                   className="block py-2 px-4 md:p-2 hover:text-indigo-600"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   <p className="text-base">{item.title}</p>
//                 </Link>
//               ))}
//             </div>
//             <div className="flex flex-col w-28 md:flex-row gap-3">
//               {/* Conditional Rendering */}
//               {isLoggedIn ? (
//                 <>
//                   <Link
//                     to={"/user"}
//                     className="mb-4 hover:text-indigo-600 border rounded-md px-3 py-1 border-black transition-colors duration-300"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     <p className="text-base">User</p>
//                   </Link>

//                   <Link
//                     to={"/create-post"}
//                     className="mb-4 hover:text-indigo-600 border rounded-md px-3 py-1 border-black transition-colors duration-300"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     <p className="text-base">Create Post</p>
//                   </Link>
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     to={"/login"}
//                     className="hover:text-indigo-600 border rounded-md px-3 py-1 border-black transition-colors duration-300"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     <p className="text-base">Login</p>
//                   </Link>

//                   <Link
//                     to={"/register"}
//                     className=" hover:text-indigo-600 border rounded-md px-3 py-1 border-black transition-colors duration-300"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     <p className="text-base">Register</p>
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { Link } from "react-router-dom";
import { navbarData } from "../Data/navbarData";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLoggedIn = false;

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`border-b-2 top-0 z-[99] bg-white sticky shadow-lg ${
        isMenuOpen ? "md:shadow-md" : ""
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 transition-all duration-300">
        <div className="flex justify-between items-center py-4 ">
          <div className="flex-shrink-0">
            <Link to={"/"} className="text-xl font-bold">
              InterviewInsight
            </Link>
          </div>

          {/* Button for the toogle  */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
            >
              {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "left-0 w-2/3 rounded-br-md" : "-left-full"
            } absolute top-full w-full pr-10 bg-white shadow-md md:static md:shadow-none md:flex md:flex-row md:items-center md:justify-end space-x-4 text-sm text-gray-800 font-medium transition-all duration-300 transform`}
          >
            <div className="flex flex-col md:flex-row">
              {navbarData.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  className="block py-2 px-4 md:p-2 hover:text-indigo-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <p className="text-base">{item.title}</p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col w-28 md:flex-row gap-3">
              {/* Conditional Rendering */}
              {isLoggedIn ? (
                <>
                  <Link
                    to={"/user"}
                    className="mb-4 hover:text-indigo-600 border rounded-md px-3 py-1 border-black transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <p className="text-base">User</p>
                  </Link>

                  <Link
                    to={"/create-post"}
                    className="mb-4 hover:text-indigo-600 border rounded-md px-3 py-1 border-black transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <p className="text-base">Create Post</p>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={"/login"}
                   
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <p className=" hover:text-indigo-600 border rounded-md px-3 py-1 border-black transition-colors duration-300">
                      Login
                    </p>
                  </Link>

                  <Link to={"/register"} onClick={() => setIsMenuOpen(false)}>
                    <p className=" hover:text-indigo-600 border rounded-md px-3 py-1 border-black transition-colors duration-300">
                      Register
                    </p>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

