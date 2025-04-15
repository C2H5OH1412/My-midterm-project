import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";
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
    <div className="w-full h-full bg-white flex-col justify-start items-center rounded-2xl py-8 px-4 overflow-auto">

      {/*<img src={Painting1.src} />*/}
      {/*<Image src={Painting1}/*/}
     <div className="flex-col w-full">

        <h1 className="text-2xl font-bold text-[#34455B]">
         水彩作品
        </h1>  

        <h3 className="text-[#34455B]">
         我精彩的繪畫作品，曠世巨作，曠世奇派。
        </h3>
        
        <div className="flex flex-col w-full gap-4 mt-3">
          
        <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
             {/*  田園風光 */}
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
                style={{ backgroundImage: `url(${Painting14.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center' }
                      }
              >
               <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-[#34455B] text-2xl flex justify-center items-center">  
                田園風光
              </div> 
              
              </div>
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
              style={{ backgroundImage: `url(${Painting13.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center' }
                    }
              >
                
                <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-slate-200 text-2xl flex justify-center items-center">  
                碧波蕩漾
              </div>
              </div>
              
          </div>
          <div className="grid grid-cols-3 w-full gap-4 h-[33vh]">
            <div className={`col-span-2 rounded-2xl relative overflow-hidden bg-green-100`}
                  style={{ backgroundImage: `url(${Painting1.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center' 
                  }
                  }
            >
             {/*  <div className="w-[40px] h-[40px] rounded-full bg-red-500 absolute 
              left-1/2 top-1/2 translate-x-1/2 translate-y-1/2 ">  
                狗勾
              </div> */}

              <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-slate-200 text-2xl flex justify-center items-center">  
                春日午後
              </div>
            </div>


            <div className="bg-green-100 rounded-2xl relative overflow-hidden"
              style={{ backgroundImage: `url(${Painting2.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center' }
                    }>
              <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-slate-200 text-2xl flex justify-center items-center">  
                廢墟與生機
              </div>
            </div>
          </div>


          <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
                style={{ backgroundImage: `url(${Painting3.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center' }
                      }
              >
                <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-[#34455B] text-2xl flex justify-center items-center">  
                雨後街道
              </div>
              </div>
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
              style={{ backgroundImage: `url(${Painting4.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center' }
                    }
              >
                <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-[#34455B] text-2xl flex justify-center items-center">  
                葡萄
              </div>
              </div>
          </div>

          <div className="grid grid-cols-3 w-full gap-4 h-[33vh]">
            <div className={`rounded-2xl relative overflow-hidden bg-green-100`}
                  style={{ backgroundImage: `url(${Painting16.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center' 
                  }
                  }
            >
            

              <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">  
                日和
              </div>
            </div>


            <div className="col-span-2 bg-green-100 rounded-2xl relative overflow-hidden"
              style={{ backgroundImage: `url(${Painting15.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center' }
                    }>
              <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">  
                盛宴
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
                style={{ backgroundImage: `url(${Painting21.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center' }
                      }
              >
                <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">  
                嗯？你在看我嗎？
              </div>
              </div>
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
              style={{ backgroundImage: `url(${Painting22.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center' }
                    }
              >
                <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">  
                咦？我嗎？
              </div>
              </div>
          </div>

        </div>
      </div>

    </div>
  );
}
