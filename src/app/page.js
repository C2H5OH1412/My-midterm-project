"use client";
import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";
import HeartImg from "@/../public/heart.png";  // 原始愛心圖
import HeartBlueImg from "@/../public/heart-blue.png";  // 藍色愛心圖
import { useState } from "react";

export default function Home() {
  const [heart, setHeart] = useState(0);
  const [isHovered, setIsHovered] = useState(false);  // 控制是否被 hover

  const addHeart = function() {
    setHeart(heart + 1);
  };

  return (
    <div className="w-full h-[100vh] bg-gradient-to-b from-slate-200 via-slate-300 to-slate-100 p-8 rounded-2xl flex flex-col justify-center items-center space-y-10 overflow-hidden relative">
      {/* 放射狀漸層效果 */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#34455b,_#7A8C98)] opacity-30 rounded-2xl z-0" />

      <div 
        className="cursor-pointer flex flex-col justify-center items-center space-y-4 transform transition duration-300 hover:scale-125 z-10"
        onClick={addHeart}
        onMouseEnter={() => setIsHovered(true)}  // 當鼠標進入時，設置為 hover 狀態
        onMouseLeave={() => setIsHovered(false)} // 當鼠標離開時，取消 hover 狀態
      >
        <Image 
          src={isHovered ? HeartBlueImg : HeartImg}  // 根據 hover 狀態切換圖像
          className="w-[100px]" 
          alt="heart" 
        />
        <div className="text-3xl font-bold text-[#34455b]">{heart}</div>
      </div>

      <div className="text-xl font-semibold text-center text-[#34455b] opacity-80 z-10">
        <p>點擊愛心給我鼓勵🩵</p>
      </div>
    </div>
  );
}
