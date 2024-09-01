import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div
          className="relative bg-cover bg-center h-screen w-full flex flex-col justify-center items-center text-center text-white p-6 mt-6 rounded-lg shadow-lg"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/564x/f0/2a/d5/f02ad5979696537aa97f7a38fb446f66.jpg')",
          }}
        >
         
          <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Safety, Our Priority
            </h1>
            <h3 className="text-lg md:text-2xl font-medium mb-8">
              Instant access to emergency services, support, and resources.
            </h3>
            <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
              <Link to="/login">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
