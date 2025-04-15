import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";
import Painting9 from "@/image/9.png";
import Painting10 from "@/image/10.png";
import Painting11 from "@/image/11.png";
import Painting20 from "@/image/20.png";


export default function CatePortrait() {
  return (
    <div className="w-full h-full bg-white flex-col justify-start items-center rounded-2xl py-8 px-4">

      {/*<img src={Painting1.src} />*/}
      {/*<Image src={Painting1}/*/}
     <div className="flex-col w-full">

        <h1 className="text-2xl font-bold text-[#34455B]">
         彩繪人像作品
        </h1>  

        <h3 className="text-[#34455B]">
         我精彩的繪畫作品，曠世巨作，曠世奇派。
        </h3>
        
        <div className="flex flex-col w-full gap-4 mt-3">
          
          <div className="grid grid-cols-3 w-full gap-4 h-[33vh]">
            <div className={`col-span-2 rounded-2xl relative overflow-hidden bg-green-100`}
                  style={{ backgroundImage: `url(${Painting9.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center' 
                  }
                  }
            >
              {/* <div className="w-[40px] h-[40px] rounded-full bg-red-500 absolute 
              left-1/2 top-1/2 translate-x-1/2 translate-y-1/2 ">  
                狗勾
              </div> */}

              <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">  
                高原紅
              </div>
            </div>


            <div className="bg-green-100 rounded-2xl relative overflow-hidden"
              style={{ backgroundImage: `url(${Painting10.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center' }
                    }>
              <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">  
                豔
              </div>
            </div>
          </div>


          <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
                style={{ backgroundImage: `url(${Painting11.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center' }
                      }
              >
                <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">  
                會心一笑
              </div>
              </div>
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
              style={{ backgroundImage: `url(${Painting20.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center' }
                    }
              >
                <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">  
                外公
              </div>
              </div>
          </div>

        </div>
      </div>

    </div>
  );
}
