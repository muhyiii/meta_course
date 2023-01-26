import React from "react";
// import Ilustration from "../assets/json/hgHn8cwvvy.json";
import * as LottiePlayer from "@lottiefiles/lottie-player";
export default function Home() {
  return (
    <div className="w-full h-full flex justify-between items-center px-20">
      <div className="left w-1/3">
        <h1 className="text-6xl font-extrabold">MAKE US CLOSE TO ENGLISH</h1>
        <p className="font-bold opacity-50 w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa
          illo nisi voluptas commodi alias.
        </p>
        <div className="flex gap-x-5 mt-5">
          <button className="px-7 py-2 from-[#AD278F] bg-gradient-to-r to-[#8827AD] rounded-full font-bold text-white transition-all ">
            Get started
          </button>
          <button className="px-10 py-2 border border-[#AD278F] rounded-full text-[#AD278F]">
            Login
          </button>
        </div>
      </div>
      <div className="right w-1/2 h-auto flex justify-end">
        <lottie-player
          style={{ width: "700px" }}
          autoplay
          loop
          mode="normal"
          
          src="https://lottie.host/758bed1b-0033-4d0d-bbf4-ce1f36582033/hyjtd1IfuG.json"
          background="transparent"
        ></lottie-player>
      </div>
    </div>
  );
}
