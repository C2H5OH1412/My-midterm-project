import Image from "next/image";
import Painting5 from "@/image/5.png";
import Painting6 from "@/image/6.png";
import Painting7 from "@/image/7.png";
import Painting8 from "@/image/8.png";
import Painting17 from "@/image/17.png";
import Painting18 from "@/image/18.png";
import Painting19 from "@/image/19.png";

export default function CateWeb() {
  return (
    <div className="w-full h-[100vh] bg-slate-200 p-8 rounded-2xl overflow-y-auto">
      <div className="flex-col w-full">
        <h1 className="text-3xl font-bold text-[#34455B]">素描</h1>

        <h3 className="text-[#34455B]">
          有些線條不是為了描繪形狀，<br />
          而是為了觸摸一段情緒的輪廓。<br />
          黑白是對比，是深淺，是層層交疊的感受。<br />
          一筆一畫塗抹刻畫出時間的模樣，<br />
          每一段光影，都是一場溫柔的記憶修復。
        </h3>

        <div className="flex flex-col w-full gap-4 mt-3 mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-3 gap-4 w-full h-auto sm:h-[600px]">
            {/* 卡片 1 */}
            <div className="col-span-1 sm:col-span-2 row-span-3 rounded-2xl relative overflow-hidden bg-green-100 transform transition-all duration-300 hover:scale-105 hover:z-10"
              style={{
                backgroundImage: `url(${Painting6.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
              }}>
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg opacity-0 transition-opacity duration-300 hover:opacity-60 flex justify-center items-center">
                <span className="text-white text-2xl font-semibold">含羞帶怯</span>
              </div>
            </div>

            {/* 卡片 2 */}
            <div className="col-start-1 sm:col-start-3 row-span-2 rounded-2xl relative overflow-hidden bg-green-100 transform transition-all duration-300 hover:scale-110 hover:z-10"
              style={{
                backgroundImage: `url(${Painting5.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
              }}>
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg opacity-0 transition-opacity duration-300 hover:opacity-60 flex justify-center items-center">
                <span className="text-white text-2xl font-semibold">Taylor Swift</span>
              </div>
            </div>

            {/* 卡片 3 */}
            <div className="col-start-1 sm:col-start-3 row-start-3 rounded-2xl relative overflow-hidden bg-green-100 transform transition-all duration-300 hover:scale-110 hover:z-10"
              style={{
                backgroundImage: `url(${Painting7.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
              }}>
              <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg opacity-0 transition-opacity duration-300 hover:opacity-60 flex justify-center items-center">
                <span className="text-white text-xl font-semibold">Donald Trump</span>
              </div>
            </div>
          </div>
        </div>

        {/* 第四區塊 */}
        <div className="grid w-full gap-4 min-h-[200px] mb-4">
          <div className="bg-green-100 rounded-2xl relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:z-10"
            style={{
              backgroundImage: `url(${Painting19.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
            }}>
            <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg opacity-0 transition-opacity duration-300 hover:opacity-60 flex justify-center items-center">
              <span className="text-white text-2xl font-semibold">氤氳</span>
            </div>
          </div>
        </div>

        {/* 第五區塊 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 min-h-[200px]">
          <div className="bg-green-100 rounded-2xl relative overflow-hidden transform transition-all duration-300 hover:scale-110 hover:z-10"
            style={{
              backgroundImage: `url(${Painting18.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
            }}>
            <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg opacity-0 transition-opacity duration-300 hover:opacity-60 flex justify-center items-center">
              <span className="text-white text-2xl font-semibold">一隅</span>
            </div>
          </div>
          <div className="bg-green-100 rounded-2xl relative overflow-hidden transform transition-all duration-300 hover:scale-110 hover:z-10"
            style={{
              backgroundImage: `url(${Painting17.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
            }}>
            <div className="absolute inset-0 bg-[#34455B] bg-opacity-50 backdrop-blur-lg opacity-0 transition-opacity duration-300 hover:opacity-60 flex justify-center items-center">
              <span className="text-white text-2xl font-semibold">沈靜</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
