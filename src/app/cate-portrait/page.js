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
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
            <div className="col-span-1 sm:col-span-2 rounded-2xl relative overflow-hidden bg-green-100 h-[100px] sm:h-[33vh]"
              style={{
                backgroundImage: `url(${Painting9.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
              <div className="w-full h-[40px] backdrop-blur-lg absolute bottom-0 left-0 text-white text-xl flex justify-center items-center">
                高原紅
              </div>
            </div>

            <div className="bg-green-100 rounded-2xl relative overflow-hidden h-[100px] sm:h-[33vh]"
              style={{
                backgroundImage: `url(${Painting10.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
              <div className="w-full h-[40px] backdrop-blur-lg absolute bottom-0 left-0 text-white text-xl flex justify-center items-center">
                豔
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4">
            <div className="bg-green-100 rounded-2xl relative overflow-hidden h-[100px] sm:h-[33vh]"
              style={{
                backgroundImage: `url(${Painting11.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
              <div className="w-full h-[40px] backdrop-blur-lg absolute bottom-0 left-0 text-white text-xl flex justify-center items-center">
                會心一笑
              </div>
            </div>
            <div className="bg-green-100 rounded-2xl relative overflow-hidden h-[100px] sm:h-[33vh]"
              style={{
                backgroundImage: `url(${Painting20.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
              <div className="w-full h-[40px] backdrop-blur-lg absolute bottom-0 left-0 text-white text-xl flex justify-center items-center">
                外公
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
