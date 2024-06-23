  import React from "react";
import imageIntroduction from "../assets/Confirmed attendance-amico 1.png";
import { Link } from "react-router-dom";

const IntroductionScreen = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="px-16 content-center">
        <h2 className="text-7xl">Rendez-vous</h2>
        <p className="my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          obcaecati, maiores eveniet sunt, veritatis repellendus, quidem magnam
          nam delectus aliquam cupiditate ut perspiciatis sed! Sit esse aliquam
          quidem repellendus dolorum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti aliquid nobis, quisquam perspiciatis libero
          quasi amet dolorum maiores ducimus placeat?
        </p>
        <Link to={"/Inscription"}>
          <button className="w-full py-3 text-white duration-150 bg-sky-500 rounded-lg hover:bg-sky-900 active:shadow-lg">
            Commencer
          </button>
        </Link>
      </div>
      <div className="px-16 ">
        <img src={imageIntroduction} alt="" />
        {/* <div className="w-72 -rotate-12 h-72 rounded-2xl absolute bottom-0 right-24 bg-sky-200"></div>
        <div className="w-80 -rotate-12 h-80 rounded-2xl absolute bottom-14 right-0 bg-sky-500"></div> */}
      </div>
    </div>
  );
};

export default IntroductionScreen;
