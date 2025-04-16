import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";
import Painting1 from "@/image/1.png";
import Painting2 from "@/image/2.png";
import Painting3 from "@/image/3.png";
import Painting4 from "@/image/4.png";
import PaintingA from "@/image/a.jpg";
import PaintingB from "@/image/b.jpg";
import PaintingC from "@/image/c.jpg";
import PaintingD from "@/image/d.jpg";
import PaintingE from "@/image/e.jpg";
import PaintingF from "@/image/f.jpg";
import PaintingG from "@/image/g.jpg";
import PaintingH from "@/image/h.jpg";
import PaintingI from "@/image/i.jpg";
import PaintingJ from "@/image/j.jpg";
import PaintingK from "@/image/k.jpg";
import PaintingL from "@/image/l.jpg";
import PaintingM from "@/image/m.jpg";
import PaintingN from "@/image/n.jpg";
import PaintingO from "@/image/o.jpg";
import PaintingP from "@/image/p.jpg";





export default function CatePainting() {
  return (
    <div className="w-full h-[100vh] bg-slate-200 p-8 rounded-2xl overflow-y-auto">
      {/*<img src={Painting1.src} />*/}
      {/*<Image src={Painting1}/*/}
     <div className="flex-col w-full">

        <h1 className="text-3xl font-bold text-[#34455B]">
         攝影
        </h1>  

        <h3 className="text-[#34455B]">
        鏡頭輕拾時光落下的碎片，<br />
        那些不聲不響、卻柔軟得讓人心動的瞬間。<br />
        不喧嘩、不搶眼，<br />
        只是靜靜地閃爍著微光，等待著每個不期而遇的邂逅。
        </h3>
        
        <div className="flex flex-col w-full gap-4 mt-3">
          
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full min-h-[200px]">

        {/* 卡片 1 */}
        <div className="bg-green-100 rounded-2xl relative overflow-hidden"
          style={{
            backgroundImage: `url(${PaintingD.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="w-full h-[80px] backdrop-blur-lg 
            absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">
            天橋立-帆船
          </div>
        </div>

        {/* 卡片 2 */}
        <div className="bg-green-100 rounded-2xl relative overflow-hidden"
          style={{
            backgroundImage: `url(${PaintingB.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="w-full h-[80px] backdrop-blur-lg 
            absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">
            天橋立-海鷗
          </div>
        </div>

        {/* 卡片 3 */}
        <div className="bg-green-100 rounded-2xl relative overflow-hidden"
          style={{
            backgroundImage: `url(${PaintingC.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
    <div className="w-full h-[80px] backdrop-blur-lg 
      absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">
      天橋立-海景
    </div>
  </div>
</div>

          {/* <div className="grid grid-cols-3 w-full gap-4 h-[33vh]"> */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full min-h-[200px]">

            
            <div className={`col-span-2 rounded-2xl relative overflow-hidden bg-green-100`}
                  style={{ backgroundImage: `url(${PaintingA.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center' 
                  }
                  }
            >

              <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">  
                天橋立-航道
              </div>
            </div>


            <div className={`rounded-2xl relative overflow-hidden bg-green-100`}
                  style={{ backgroundImage: `url(${PaintingE.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center' 
                  }
                  }
            >

              <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">  
                天橋立-海鷗船長
              </div>
            </div>
          </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full min-h-[200px]">

              {/* 卡片 1 */}
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
                style={{
                  backgroundImage: `url(${PaintingF.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="w-full h-[80px] backdrop-blur-lg 
                  absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">
                  採
                </div>
              </div>

              {/* 卡片 2 */}
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
                style={{
                  backgroundImage: `url(${PaintingH.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="w-full h-[80px] backdrop-blur-lg 
                  absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">
                  舞
                </div>
              </div>

              {/* 卡片 3 */}
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
                style={{
                  backgroundImage: `url(${PaintingG.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
          <div className="w-full h-[80px] backdrop-blur-lg 
            absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">
            集
          </div>
        </div>
      </div>

              {/* <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-[800px]"> */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full min-h-[800px]">

          {/* A: 佔 1,2,3 */}
          <div className="col-span-3 row-span-1 rounded-2xl relative overflow-hidden"
            style={{
              backgroundImage: `url(${PaintingM.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <div className="w-full h-[80px] backdrop-blur-lg absolute bottom-0 left-0 
              text-white text-2xl flex justify-center items-center">豪德寺貓貓</div>
          </div>

          {/* B: 格4 */}
          <div className="col-start-1 row-start-2 rounded-2xl relative overflow-hidden"
            style={{
              backgroundImage: `url(${PaintingK.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <div className="w-full h-[80px] backdrop-blur-lg absolute bottom-0 left-0 
              text-white text-2xl flex justify-center items-center">滿坑滿谷</div>
          </div>

          {/* C: 合併5,6（兩欄） */}
          <div className="col-span-2 row-start-2 col-start-2 rounded-2xl relative overflow-hidden"
            style={{
              backgroundImage: `url(${PaintingJ.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <div className="w-full h-[80px] backdrop-blur-lg absolute bottom-0 left-0 
              text-white text-2xl flex justify-center items-center">有誰混進去了！</div>
          </div>

          {/* D: 合併7,8（兩欄） */}
          <div className="col-span-2 row-start-3 col-start-1 rounded-2xl relative overflow-hidden"
            style={{
              backgroundImage: `url(${PaintingL.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <div className="w-full h-[80px] backdrop-blur-lg absolute bottom-0 left-0 
              text-white text-2xl flex justify-center items-center">強迫症滿意貓貓</div>
          </div>

          {/* E: 第9格 */}
          <div className="col-start-3 row-start-3 rounded-2xl relative overflow-hidden"
            style={{
              backgroundImage: `url(${PaintingI.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <div className="w-full h-[80px] backdrop-blur-lg absolute bottom-0 left-0 
              text-white text-2xl flex justify-center items-center">貓山貓海</div>
          </div>
        </div>

        {/* <div className="grid grid-cols-3 gap-4 w-full h-[33vh]"> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full min-h-[200px]">

              {/* 卡片 1 */}
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
                style={{
                  backgroundImage: `url(${PaintingN.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="w-full h-[80px] backdrop-blur-lg 
                  absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">
                  梅
                </div>
              </div>

              {/* 卡片 2 */}
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
                style={{
                  backgroundImage: `url(${PaintingO.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="w-full h-[80px] backdrop-blur-lg 
                  absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">
                  徑
                </div>
              </div>

              {/* 卡片 3 */}
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
                style={{
                  backgroundImage: `url(${PaintingP.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
          <div className="w-full h-[80px] backdrop-blur-lg 
            absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">
          櫻
          </div>
        </div>
      </div>


       

        </div>
      </div>

    </div>
  );
}
