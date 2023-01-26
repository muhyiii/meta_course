/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";
const Home = () => {
  return (
    <div>
      <div className="flex items-center pt-12">
        <div className="changa-one">
          <h1 className="text-5xl w-2/3">MAKE US CLOSE TO ENGLISH</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
            nostrum?
          </p>
          <div className="mt-5 space-x-5">
            <button className="bg-gradient-to-r from-purple-500 to bg-pink-700 w-40 px-3 py-2 text-white rounded-full tracking-widest">
              Get Started
            </button>
            <button className="border w-40  px-3 py-2 text-black  rounded-full tracking-widest">
              Login
            </button>
          </div>
        </div>
        <div>
          <lottie-player
            style={{ width: "500px" }}
            autoplay
            loop
            mode="normal"
            src="https://assets1.lottiefiles.com/packages/lf20_ncpnijkz.json"
          ></lottie-player>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-500 to bg-pink-700 py-2 text-white changa-one px-5 flex ">
        <p> LEARN ENGLISH WITH TECHNIQUES THAT ARE EASY TO UNDERSTAND</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-dot"
          viewBox="0 0 16 16"
        >
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        </svg>
        <p> LEARN ENGLISH AT VARIOUS LEVELS</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-dot"
          viewBox="0 0 16 16"
        >
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        </svg>
        <p> LEARN DIGITAL-BASED ENGLISH WITH AN ATTRACTIVE INTERFACE</p>
      </div>
    </div>
  );
};

export default Home;
