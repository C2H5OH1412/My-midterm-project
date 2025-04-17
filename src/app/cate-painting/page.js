import Image from "next/image";
import Painting1 from "@/image/1.png";
import Painting2 from "@/image/2.png";
import Painting3 from "@/image/3.png";
import Painting4 from "@/image/4.png";
import Painting13 from "@/image/13.png";
import Painting14 from "@/image/14.png";
import Painting15 from "@/image/15.png";
import Painting16 from "@/image/16.png";
import Painting21 from "@/image/21.png";
import Painting22 from "@/image/22.png";

export default function CatePainting() {
  return (
    <div className="w-full h-[100vh] bg-slate-200 p-8 rounded-2xl overflow-y-auto">
      <div className="flex-col w-full">
        <h1 className="text-3xl font-bold text-[#34455B]">
          水彩
        </h1>
        <h3 className="text-[#34455B]">
          光影交錯的紙上，水的柔與色的靜無聲碰撞，暈染出日常。<br />
          像是一種溫柔的存檔，<br />
          並非為了展示，而是為了記得——<br />
          那些簡單而平凡的歲月靜好，那些日子裡輕輕撫過的夢。
        </h3>

        <div className="flex flex-col w-full gap-4 mt-3">
          {/* 第一區塊 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full min-h-[200px]">
            <div className="relative overflow-hidden rounded-2xl bg-green-100 transform transition-all duration-300 hover:scale-110 hover:z-10">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${Painting14.src})` }} />
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-60">
                <span className="text-white text-xl font-semibold">田園風光</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-green-100 transform transition-all duration-300 hover:scale-110 hover:z-10">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${Painting13.src})` }} />
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-60">
                <span className="text-white text-xl font-semibold">碧波蕩漾</span>
              </div>
            </div>
          </div>

          {/* 第二區塊 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full min-h-[200px]">
            <div className="md:col-span-2 relative overflow-hidden rounded-2xl bg-green-100 transform transition-all duration-300 hover:scale-110 hover:z-10">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${Painting1.src})` }} />
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-60">
                <span className="text-white text-xl font-semibold">春日午後</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-green-100 transform transition-all duration-300 hover:scale-110 hover:z-10">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${Painting2.src})` }} />
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-60">
                <span className="text-white text-xl font-semibold">廢墟與生機</span>
              </div>
            </div>
          </div>

          {/* 第三區塊 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full min-h-[200px]">
            <div className="relative overflow-hidden rounded-2xl bg-green-100 transform transition-all duration-300 hover:scale-110 hover:z-10">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${Painting3.src})` }} />
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-60">
                <span className="text-white text-xl font-semibold">雨後街道</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-green-100 transform transition-all duration-300 hover:scale-110 hover:z-10">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${Painting4.src})` }} />
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-60">
                <span className="text-white text-xl font-semibold">葡萄</span>
              </div>
            </div>
          </div>

          {/* 第四區塊 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full min-h-[200px]">
            <div className="relative overflow-hidden rounded-2xl bg-green-100 transform transition-all duration-300 hover:scale-110 hover:z-10">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${Painting16.src})` }} />
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-60">
                <span className="text-white text-xl font-semibold">日和</span>
              </div>
            </div>
            <div className="md:col-span-2 relative overflow-hidden rounded-2xl bg-green-100 transform transition-all duration-300 hover:scale-110 hover:z-10">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${Painting15.src})` }} />
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-60">
                <span className="text-white text-xl font-semibold">盛宴</span>
              </div>
            </div>
          </div>

          {/* 第五區塊 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full min-h-[200px]">
            <div className="relative overflow-hidden rounded-2xl bg-green-100 transform transition-all duration-300 hover:scale-110 hover:z-10">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${Painting21.src})` }} />
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-60">
                <span className="text-white text-xl font-semibold">嗯？你在看我嗎？</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-green-100 transform transition-all duration-300 hover:scale-110 hover:z-10">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${Painting22.src})` }} />
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-60">
                <span className="text-white text-xl font-semibold">咦？我嗎？</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
