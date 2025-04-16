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
            <div className="bg-green-100 rounded-2xl relative overflow-hidden" style={{ backgroundImage: `url(${Painting14.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="w-full h-[40px] backdrop-blur-lg absolute bottom-0 left-0 text-[#34455B] text-xl flex justify-center items-center overflow-x-hidden">田園風光</div>
            </div>
            <div className="bg-green-100 rounded-2xl relative overflow-hidden" style={{ backgroundImage: `url(${Painting13.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="w-full h-[40px] backdrop-blur-lg absolute bottom-0 left-0 text-slate-200 text-xl flex justify-center items-center overflow-x-hidden">碧波蕩漾</div>
            </div>
          </div>

          {/* 第二區塊 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full min-h-[200px]">
            <div className="col-span-1 md:col-span-2 rounded-2xl relative overflow-hidden bg-green-100" style={{ backgroundImage: `url(${Painting1.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="w-full h-[40px] backdrop-blur-lg absolute bottom-0 left-0 text-slate-200 text-xl flex justify-center items-center overflow-x-hidden">春日午後</div>
            </div>
            <div className="rounded-2xl relative overflow-hidden bg-green-100" style={{ backgroundImage: `url(${Painting2.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="w-full h-[40px] backdrop-blur-lg absolute bottom-0 left-0 text-slate-200 text-xl flex justify-center items-center overflow-x-hidden">廢墟與生機</div>
            </div>
          </div>

          {/* 第三區塊 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full min-h-[200px]">
            <div className="bg-green-100 rounded-2xl relative overflow-hidden" style={{ backgroundImage: `url(${Painting3.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="w-full h-[40px] backdrop-blur-lg absolute bottom-0 left-0 text-[#34455B] text-xl flex justify-center items-center overflow-x-hidden">雨後街道</div>
            </div>
            <div className="bg-green-100 rounded-2xl relative overflow-hidden" style={{ backgroundImage: `url(${Painting4.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="w-full h-[40px] backdrop-blur-lg absolute bottom-0 left-0 text-[#34455B] text-xl flex justify-center items-center overflow-x-hidden">葡萄</div>
            </div>
          </div>

          {/* 第四區塊 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full min-h-[200px]">
            <div className="rounded-2xl relative overflow-hidden bg-green-100" style={{ backgroundImage: `url(${Painting16.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="w-full h-[40px] backdrop-blur-lg absolute bottom-0 left-0 text-slate-200 text-xl flex justify-center items-center overflow-x-hidden">日和</div>
            </div>
            <div className="md:col-span-2 bg-green-100 rounded-2xl relative overflow-hidden" style={{ backgroundImage: `url(${Painting15.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="w-full h-[40px] backdrop-blur-lg absolute bottom-0 left-0 text-slate-200 text-xl flex justify-center items-center overflow-x-hidden">盛宴</div>
            </div>
          </div>

          {/* 第五區塊 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full min-h-[200px]">
            <div className="bg-green-100 rounded-2xl relative overflow-hidden" style={{ backgroundImage: `url(${Painting21.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="w-full h-[40px] backdrop-blur-lg absolute bottom-0 left-0 text-slate-200 text-xl flex justify-center items-center overflow-x-hidden">嗯？你在看我嗎？</div>
            </div>
            <div className="bg-green-100 rounded-2xl relative overflow-hidden" style={{ backgroundImage: `url(${Painting22.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="w-full h-[40px] backdrop-blur-lg absolute bottom-0 left-0 text-slate-200 text-xl flex justify-center items-center overflow-x-hidden">咦？我嗎？</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
