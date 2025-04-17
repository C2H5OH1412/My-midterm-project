import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";
import Painting9 from "@/image/9.png";
import Painting10 from "@/image/10.png";
import Painting11 from "@/image/11.png";
import Painting20 from "@/image/20.png";

export default function CatePortrait() {
  return (
    <div className="w-full h-[100vh] bg-slate-200 p-8 rounded-2xl overflow-y-auto">
      <div className="flex-col w-full">
        <h1 className="text-3xl font-bold text-[#34455B]">彩繪人像</h1>

        <h3 className="text-[#34455B]">
          有些情感太輕，輕得像清晨未散的霧，連言語都無法承接。<br />
          卻能寄託於色彩，將那些回憶和溫暖，輕輕擱在紙上。<br />
          顏料與水交融的瞬間，如同記憶在心湖上泛起漣漪，<br />
          不再清晰，卻更深情，溫熱地留存在那片靜默的留白裡。<br />
        </h3>

        <div className="flex flex-col w-full gap-4 mt-3">
          {/* 第一排，佔兩格與一格 */}
          <div className="grid grid-cols-3 w-full gap-4">
            <div className="col-span-2 relative overflow-hidden rounded-2xl h-[100px] sm:h-[33vh] transform transition-all duration-300 hover:scale-110 hover:z-10">
              <img
                src={Painting9.src}
                alt="高原紅"
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-60">
                <span className="text-white text-xl font-semibold">高原紅</span>
              </div>
            </div>

            <div className="col-span-1 relative overflow-hidden rounded-2xl h-[100px] sm:h-[33vh] transform transition-all duration-300 hover:scale-110 hover:z-10">
              <img
                src={Painting10.src}
                alt="豔"
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-60">
                <span className="text-white text-xl font-semibold">豔</span>
              </div>
            </div>
          </div>

          {/* 第二排，兩張圖片分佔對半寬度，總寬度與上排相同 */}
          <div className="grid grid-cols-2 w-full gap-4">
            <div className="relative overflow-hidden rounded-2xl h-[100px] sm:h-[33vh] transform transition-all duration-300 hover:scale-110 hover:z-10">
              <img
                src={Painting11.src}
                alt="會心一笑"
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-60">
                <span className="text-white text-xl font-semibold">會心一笑</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl h-[100px] sm:h-[33vh] transform transition-all duration-300 hover:scale-110 hover:z-10">
              <img
                src={Painting20.src}
                alt="外公"
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-60">
                <div className="absolute inset-0 flex justify-center items-center opacity-100">
                  <span className="text-white text-xl font-semibold">外公</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
