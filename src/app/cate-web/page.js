import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";
import Painting5 from "@/image/5.png";
import Painting6 from "@/image/6.png";
import Painting7 from "@/image/7.png";
import Painting8 from "@/image/8.png";
import Painting17 from "@/image/17.png";
import Painting18 from "@/image/18.png";
import Painting19 from "@/image/19.png";

export default function CateWeb() {
  return (
    <div className="w-full h-full bg-slate-200/80 flex-col justify-start items-center rounded-2xl py-8 px-4 overflow-auto">

      {/*<img src={Painting1.src} />*/}
      {/*<Image src={Painting1}/*/}
     <div className="flex-col w-full">

        <h1 className="text-2xl font-bold text-[#34455B]">
         素描作品
        </h1>  

        <h3 className="text-[#34455B]">
         我精彩的繪畫作品，曠世巨作，曠世奇派。
        </h3>
        
        <div className="flex flex-col w-full gap-4 mt-3 mb-4">

        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-[600px]">
          <div className={`col-span-2 row-span-3 rounded-2xl relative overflow-hidden bg-green-100`}
                  style={{ backgroundImage: `url(${Painting6.src})`,
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
                absolute bottom-0 left-0 text-slate-200 text-2xl flex justify-center items-center">  
                含羞帶怯
              </div>
        </div>
            
        
        <div className={`col-start-3 row-span-2 rounded-2xl relative overflow-hidden bg-green-100`}
                  style={{ backgroundImage: `url(${Painting5.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center' 
                  }
                  }
            >

              <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-[#34455B] text-2xl flex justify-center items-center">  
                Taylor Swift
              </div>
        </div>

        <div className={`col-start-3 row-start-3 rounded-2xl relative overflow-hidden bg-green-100`}
                  style={{ backgroundImage: `url(${Painting7.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center' 
                  }
                  }
            >

              <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-slate-200 text-2xl flex justify-center items-center">  
                Donald Trump
              </div>
        </div>
      </div>

        
         
         </div>
       
          
       </div>
       <div className="grid  w-full gap-4 h-[33vh] mb-4">
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
                style={{ backgroundImage: `url(${Painting19.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center' }
                      }
              >
                <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">  
                氤氳
              </div>
              </div>
              
          </div>

          <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
                style={{ backgroundImage: `url(${Painting18.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center' }
                      }
              >
                <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">  
                一隅
              </div>
              </div>
              <div className="bg-green-100 rounded-2xl relative overflow-hidden"
              style={{ backgroundImage: `url(${Painting17.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center' }
                    }
              >
                <div className="w-full h-[80px] backdrop-blur-lg 
                absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">  
                沈靜
              </div>
              </div>
          </div>

        </div>
      

    
  );
}
