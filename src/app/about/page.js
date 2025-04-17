import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";

export default function AboutPage() {
  return (
    <div className="w-full h-[100vh] bg-slate-200 p-8 rounded-2xl overflow-y-auto">

      
      <div className="bg-slate-200 rounded-2xl space-y-6">

        {/* 頂部標題區 */}
        <div className="flex items-center gap-4">
         {/*  <div className="w-6 h-6 rounded-full bg-[#E8D9D1]"></div> */}
          <h1 className="text-3xl font-bold text-[#34455B]">About Me</h1>
        </div>

        {/* 自我介紹卡片 */}
        <div className="bg-[#C4D1DB] p-4 rounded-2xl text-[#34455B] text-lg">
        <p className="text-[#34455B] leading-relaxed whitespace-pre-wrap">
        <span className="font-bold">關於本薯🥔：<br /></span>
          一顆時而滾動時而頹廢的沙發發馬鈴薯（花式滾動鞠躬）。<br />
          喜歡用畫筆及相機記錄生活碎片，創作風格清新柔和。<br />
          （有時候也會突然實驗一些怪奇路線 ✨）
        </p>

        </div>

        {/* 學經歷卡片（高一點） */}
        <div className="bg-[#C4D1DB] p-4 rounded-2xl h-[200px] text-[#34455B] text-lg">
          <p className="text-[#34455B] leading-relaxed whitespace-pre-wrap">
            <span className="font-bold">
              🎓學經歷：<br />
            </span>
            國立政治大學廣告學系<br />
            國立政治大學數位內容學程<br />
            國立政治大學日文系輔系<br />
            <span className="line-through text-gray-500 italic">
              私立死線大學博士在讀
            </span><br />
            <span className="line-through text-gray-500 italic">
              私立沙發大學碩士在讀
            </span><br />
          </p>
        </div>


        {/* 聯絡方式卡片 */}
        <div className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] space-y-4">
  <h2 className="text-2xl font-bold mb-4">馬鈴薯觀察、訂購方式</h2>

  {/* Instagram */}
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
     className="flex items-center gap-4 hover:text-xl hover:font-bold transition">
    <img src="/icon/instagram.svg" alt="Instagram" className="w-6 h-6 cursor-pointer hover:scale-150 transition-transform" />
    <span>日常生活看這邊</span>
  </a>

  {/* Facebook */}
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
     className="flex items-center gap-4 hover:text-xl hover:font-bold transition">
    <img src="/icon/facebook.svg" alt="Facebook" className="w-6 h-6 cursor-pointer hover:scale-150 transition-transform" />
    <span>日常生活也可以看這邊</span>
  </a>

  {/* LINE */}
  <a href="https://line.me" target="_blank" rel="noopener noreferrer"
     className="flex items-center gap-4 hover:text-xl hover:font-bold transition">
    <img src="/icon/line.svg" alt="LINE" className="w-6 h-6 cursor-pointer hover:scale-150 transition-transform" />
    <span>無聊聊天敲這邊</span>
  </a>

  {/* Email */}
  <a href="mailto:you@example.com" className="flex items-center gap-4 hover:text-xl hover:font-bold transition">
    <img src="/icon/email.svg" alt="Email" className="w-6 h-6 cursor-pointer hover:scale-150 transition-transform" />
    <span>合作聯絡這邊請</span>
  </a>

  {/* 抖內 */}
  <a href="https://paypal.me/yourlink" target="_blank" rel="noopener noreferrer"
     className="flex items-center gap-4 hover:text-xl hover:font-bold transition">
    <img src="/icon/money.svg" alt="Donate" className="w-6 h-6 cursor-pointer hover:scale-150 transition-transform" />
    <span>抖內強烈歡迎</span>
  </a>
</div>


        {/* 不重要碎碎念卡片 */}
        <div className="bg-[#C4D1DB] p-4 rounded-2xl text-[#34455B] text-l">
          <p className="text-[#34455B] leading-relaxed whitespace-pre-wrap">
            <span className="font-bold">不重要碎碎唸：</span><br />
            程式小廢物做到快死ㄌ。<br />
            已經非常努力ㄌ 真的QQ<br />
          </p>
        </div>

      </div>
    </div>
  );
}
