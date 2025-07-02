import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pastel-blue flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-5xl font-bold text-pastel-dark-blue mb-4">
        DiccionarioDev
      </h1>
      <p className="text-xl text-pastel-dark-blue mb-8">
        El diccionario definitivo para desarrolladores. Encuentra definiciones
        para todos los términos de programación que necesites.
      </p>
      <Link
        to="/terms"
        className="mb-4 px-4 py-2 bg-blue-500 rounded-full cursor-pointer"
      >
        Empezar
      </Link>
    </div>
  );
};

export default LandingPage;
