import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";
import Link from "next/link";
import LinkImg1 from "@/image/帝寶.png"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "陳盈錞的數位履歷",
  description: "瀏覽人次達 1000萬， 好評熱賣中！"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <div className="w-screen h-screen overflow-auto flex flex-col sm:flex-row gap-5 bg-[#F3F8FB] p-8">

          <div className="w-[480px] h-full rounded-2xl bg-[#CDD8E1] flex  justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden">
            
            <Image src={AvatarImg} alt="Avatar" className="w-[80px] h-[80px] rounded-full" />
        
            <h1 className="mt-2 text-[#34455b]">陳盈錞</h1>
            <p className="max-w-[380px] text-center text-[#34455b]">
              我是一顆沙發馬鈴薯，近期目標是睡飽，最期待放假（打滾打滾打滾）。
            </p>
            
            {/* 社群連結 */}
            <div className="flex gap-2 my-5">
              <a href="https://www.instagram.com/chun_319?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                <div className="bg-[#34455b] w-[40px] h-[40px] rounded-full flex items-center justify-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 448 512"
                      className="w-[30px] h-[30px]"
                      fill="#F7F9ED"
                      >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>

                  </svg>
                </div>
              </a>
              <a href="https://www.facebook.com/share/12EdiSDZHfH/?mibextid=wwXIfr" target="_blank">
                <div className="bg-[#F7F9ED] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 512 512"
                     className="w-[40px] h-[40px]"
                     fill="#34455b"
                     >
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                </svg>
                </div>
              </a>
              <a href="https://google.com" target="_blank">
                <div className="bg-[#F7F9ED] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 512 512"
                     className="w-[25px] h-[25px]"
                     fill="#34455b"
                     >
                  <path d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z"/>
                </svg>
                </div>
              </a>
              <a href="https://google.com" target="_blank">
                <div className="bg-[#34455b] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 512 512"
                     className="w-[25px] h-[25px]"
                     fill="#F7F9ED"
                     >
                  <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/>
                </svg>
                </div>
              </a>
              <a href="https://google.com" target="_blank">
                <div className="bg-[#34455b] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 512 512"
                     className="w-[25px] h-[25px]"
                     fill="#F7F9ED"
                     >
                  <path d="M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3l-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 91.9c-11.1 0-20.1 9-20.1 20.1l0 6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.7 4c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-2.2-.7-4.3-1.5-6.4-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1l0 6.4c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1l0-5.5c5.3-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4l0-6.3c0-11.1-9-20.1-20.1-20.1zM48 352l16 0c19.5 25.9 44 47.7 72.2 64L64 416l0 32 192 0 192 0 0-32-72.2 0c28.2-16.3 52.8-38.1 72.2-64l16 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48z"/>
                </svg>
                </div>
              </a>
            </div>

            {/* 頁面切換 */}
            <div className="w-full flex flex-col gap-2">
              
              <Link href="/about">
                {/* <div className="w-full h-[84px] bg-gray-300 rounded-xl">About</div> */}
                <div className={`w-full h-[84px] bg-slate-200 rounded-xl text-[#34455b]`}>About</div>
              </Link>

              <Link href="/cate-painting">
                <div className="w-full h-[84px] bg-slate-200 rounded-xl text-[#34455b]">Water Color</div>
              </Link>

              <Link href="/cate-web">
                <div className="w-full h-[84px] bg-slate-200 rounded-xl text-[#34455b]">Sketch</div>
              </Link>

              <Link href="/cate-portrait">
                <div className="w-full h-[84px] bg-slate-200 rounded-xl text-[#34455b]">Portrait</div>
              </Link>

              <Link href="/cate-photo">
                <div className="w-full h-[84px] bg-slate-200 rounded-xl text-[#34455b]">Photo</div>
              </Link>
              
              
              <div className="w-full h-[84px] bg-slate-200 rounded-xl text-[#34455b]">作品分類一</div>
              <div className="w-full h-[84px] bg-slate-200 rounded-xl text-[#34455b]">作品分類二</div>
            
            </div>

          </div>

          {children}

        </div>

      </body>
    </html>
  );
}
