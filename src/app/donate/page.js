import Image from "next/image";
import DonateQR from "@/../public/donate-qr.png";

export default function DonatePage() {
  return (
    // 右側容器：加上 flex-1 和 h-full 來撐滿側邊欄對齊
    <div className="flex-1 h-full flex items-center justify-center">
      
      {/* 內容框 */}
      <div className="w-full h-[100vh] bg-slate-200 p-8 rounded-2xl overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4 text-[#34455B]">
          幫馬鈴薯施肥 🌱
        </h1>

        <p className="mb-6 text-[#34455B] leading-relaxed">
          如果你喜歡我的作品<br />
          首先當然是大感謝喜歡喜歡✨<br />
          也歡迎用 QR Code 幫馬鈴薯施肥 🩵
          <span className="text-sm text-gray-600 block mt-2">
            * 若 QR code 過期了，可以敲敲我提醒更新唷🫡
          </span>
        </p>

        <div className="bg-white p-4 rounded-xl">
          <Image
            src={DonateQR}
            alt="Donate QR Code"
            width={280}
            height={280}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
