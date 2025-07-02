import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pastel-blue flex flex-col items-center justify-center text-center p-4 max-w-7xl mx-auto">
      <h1 className="text-7xl font-bold text-pastel-dark-blue mb-8">
        Diccionario Dev
      </h1>
      <p className="text-3xl text-pastel-dark-blue mb-8">
        El diccionario definitivo para desarrolladores. Encuentra definiciones
        para todos los términos de programación que necesites.
      </p>
      <Link
        to="/terms"
        className="mb-4 px-6 py-4 bg-blue-500 rounded-full cursor-pointer text-4xl"
      >
        Empezar
      </Link>
    </div>
  );
};

export default LandingPage;
