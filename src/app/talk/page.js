"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full h-[100vh] bg-slate-200 p-8 rounded-2xl overflow-y-auto">
      <div className="bg-slate-200 p-6 rounded-2xl space-y-6">
        {/* 標題區 */}
        <div className="space-y-4 mb-10">
          <h1 className="text-3xl font-bold text-[#34455B]">快樂分享 aka 推坑區</h1>
          <p className="text-xl text-[#34455B] opacity-80">一些快樂小寶藏</p>
        </div>

        <div className="text-2xl font-bold text-[#34455B] mb-6">
          <p>音樂篇</p>
        </div>

        {/* 顯示文字的區塊（放在四個卡片上方） */}
        <div className="text-xl font-semibold text-[#34455B] mb-6">
          <p>獨立樂團＆歌手</p>
        </div>

        {/* 卡片區 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
          {/* 卡片 1 */}
          <a href="https://youtu.be/QMYN8ch1WGc?si=6EGZzZAvW9IeFpon" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/fire.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">滅火器</h3>
            <p className="text-lg text-center">
              台灣台語樂團<br/>
              又台有有力量</p>
          </a>

          {/* 卡片 2 */}
          <a href="https://youtu.be/GmBfueryGes?si=PCqMyxdK4SxvXu5k" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/nckn.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">南西肯恩</h3>
            <p className="text-lg text-center">
              溫柔的樂團<br/>
              是可以被接住的感覺</p>
          </a>

          {/* 卡片 3 */}
          <a href="https://youtu.be/qRCnF7SMufo?si=O2yQOevG7IKSH6oG" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/nonosense.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">無妄合作社</h3>
            <p className="text-lg text-center">
              糙漢系樂團<br/>
              貝斯手頭髮比我柔順 <br/>
              羨慕</p>
          </a>

          {/* 卡片 4 */}
          <a href="https://youtu.be/pg0dsYF7eXw?si=mSbiQuQ7SDykwE2b" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/hormon.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">賀爾蒙少年</h3>
            <p className="text-lg text-center">
              目前暫時休團<br/>
              （吵架QQ）<br/>
              不知道有沒有機會<br/>
              再看到專場<br/>
              （雖然上次看完就確診）</p>
          </a>

        </div>

        {/* 第二區塊 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
          {/* 卡片 1 */}
          <a href="https://youtu.be/oXgvD0GOe60?si=rEmBM2tTG3XU92XZ" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/chairs.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">椅子樂團</h3>
            <p className="text-lg text-center">
              語言小天才樂團<br/>
              歌聲和旋律都很舒服<br/>
              </p>
          </a>

          {/* 卡片 2 */}
          <a href="https://youtu.be/_b5Vuha56vU?si=wlF14OvhhRxJiq1a" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/iknow.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">那我懂你意思了</h3>
            <p className="text-lg text-center">
              滅絕樂團<br/>
              最近歷史性復出一次</p>
          </a>

          {/* 卡片 3 */}
          <a href="https://youtu.be/_wK8JS8s_B0?si=4UDtIRcYbTVT11Mm" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/sandwich.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">打倒三明治</h3>
            <p className="text-lg text-center">
              歌詞細膩<br/>
              曲風獨特 三明治可愛
              </p>
          </a>

          {/* 卡片 4 */}
          <a href="https://youtu.be/5Qj8DYmPCcQ?si=k36Btp7izwUtHW4V" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/lily.jpeg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">莉莉周她說</h3>
            <p className="text-lg text-center">
              迷幻樂團<br/>
              音樂聽起來很涼<br/>
              很適合夏天（蛤
              </p>
          </a>

        </div>

        <div className="text-xl font-semibold text-[#34455B] mb-6">
          <p>日本樂團＆歌手</p>
        </div>

        {/* 卡片區 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
          {/* 卡片 1 */}
          <a href="https://youtu.be/CkvWJNt77mU?si=XJjr1zj4umGb_DpU" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/yourshika.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">ヨルシカ</h3>
            <p className="text-lg text-center">
              主唱很可愛<br/>
              曲風多變 讚
              </p>
          </a>

          {/* 卡片 2 */}
          <a href="https://youtu.be/meZPD28Y7xE?si=ezL603XthZk32Qkz" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/back.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">Back Number</h3>
            <p className="text-lg text-center">
              音樂很療癒<br/>
              主唱聲線很溫柔<br/>
              （大叔型溫柔）
            </p>
          </a>

          {/* 卡片 3 */}
          <a href="https://youtu.be/IVqrZxmtVzk?si=BAHYIe7cx8tln20E" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/cen.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">センチミリメンタル</h3>
            <p className="text-lg text-center">
              從Given入坑的<br/>
              歌詞超細膩<br/>
              喜歡到不行
              </p>
          </a>

          {/* 卡片 4 */}
          <a href="https://youtu.be/7HgJIAUtICU?si=xDBSIBaQmql94xiW" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/vaundy.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">Vaundy</h3>
            <p className="text-lg text-center">
              音樂旋律輕快<br/>
              腦袋馬殺雞饗宴
            </p>
          </a>

        </div>

        {/* 卡片區 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
          {/* 卡片 1 */}
          <a href="https://youtu.be/-EKxzId_Sj4?si=nlrbWfZNX7hYEPcW" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/kenshi.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">米津玄師</h3>
            <p className="text-lg text-center">
              就是好聽<br/>
              聲線只能是一百分
            </p>
          </a>

          {/* 卡片 2 */}
          <a href="https://youtu.be/GJI4Gv7NbmE?si=cydnqMiYWoQieBFA" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/zutomayo.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">ZUTOMAYO</h3>
            <p className="text-lg text-center">
              可愛樂團<br/>
              主唱聲線超喜歡
            </p>
          </a>

          {/* 卡片 3 */}
          <a href="https://youtu.be/TQ8WlA2GXbk?si=Rl68per3yx3GV-i0" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/official.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">Official髭男dism</h3>
            <p className="text-lg text-center">
              樂團內沒人留鬍子的鬍子樂團
            </p>
          </a>

          {/* 卡片 4 */}
          <a href="https://youtu.be/dy90tA3TT1c?si=PKjnih534wuw779r" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/yoasobi.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">YOASOBI</h3>
            <p className="text-lg text-center">
              主唱可愛到不行<br/>
              曲風多變 很喜歡
            </p>
          </a>

        </div>

        {/* 顯示文字的區塊（放在四個卡片上方） */}
        <div className="text-xl font-semibold text-[#34455B] mb-6">
          <p>西洋樂團＆歌手</p>
        </div>

        {/* 卡片區 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
          {/* 卡片 1 */}
          <a href="https://youtu.be/-CmadmM5cOk?si=gmNDbahepeohTsq9" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/taylor.webp" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">Taylor Swift</h3>
            <p className="text-lg text-center">
              陪我長大的歌手<br/>
              瘋狂表白
            </p>
          </a>

          {/* 卡片 2 */}
          <a href="https://youtu.be/D9G1VOjN_84?si=j74MM-dUNwfROndR" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/imagine.jpeg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">Imagine Dragons</h3>
            <p className="text-lg text-center">
              迷幻樂團<br/>
              有幸聽過現場<br/>
              超級喜歡<br/>
              主唱穩的一波<br/>
            </p>
          </a>

          {/* 卡片 3 */}
          <a href="https://youtu.be/FvOpPeKSf_4?si=XkJKjrtdMK44bBbd" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/joji.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">Joji</h3>
            <p className="text-lg text-center">
              搞笑藝人出身<br/>
              但都唱一些<br/>
              溫柔到讓人心碎的歌
            </p>
          </a>

          {/* 卡片 4 */}
          <a href="https://youtu.be/j5-yKhDd64s?si=GdFTodcAi4pWEwTw" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/eminem.webp" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">Eminem</h3>
            <p className="text-lg text-center">
              Hardcore Rapper<br/>
              超讚<br/>
              雖然我都跟不上歌詞
            </p>
          </a>

        </div>

        {/* 第二區塊 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
          {/* 卡片 1 */}
          <a href="https://youtu.be/6RLLOEzdxsM?si=7ntboSRH7tnKX4yl" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/alan.jpeg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">Alan Walker</h3>
            <p className="text-lg text-center">
              不露臉的神奇創作者<br/>
              據親妹透露<br/>
              是唱歌五音不全<br/>
              （？ㄉ人類
            </p>
          </a>

          {/* 卡片 2 */}
          <a href="https://youtu.be/fHeQemJJQII?si=6HR-vVL3xajWW6pf" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/shawn.webp" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">Shawn Mendes</h3>
            <p className="text-lg text-center">
              帥哥系歌手<br/>
              聲線溫柔<br/>
              超喜歡
            </p>
          </a>

          {/* 卡片 3 */}
          <a href="https://youtu.be/EkHTsc9PU2A?si=jJEA2tKLdGn1z-VJ" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/jason.jpeg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">Jason Marz</h3>
            <p className="text-lg text-center">
              旋律輕鬆<br/>
              歌詞簡單卻直擊人心
            </p>
          </a>

          {/* 卡片 4 */}
          <a href="https://youtu.be/ZxgbQz4n8-s?si=ypDIxjz0UupxIkeg" target="_blank" rel="noopener noreferrer" className="bg-[#C4D1DB] p-6 rounded-2xl text-[#34455B] flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:bg-[#34455B] hover:text-white hover:scale-110 hover:z-10">
            <Image src="/why.jpg" alt="樂團名稱" width={200} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold">Why Don't We</h3>
            <p className="text-lg text-center">
              帥哥系樂團<br/>
              歌曲旋律好聽<br/>
              但歌詞好小孩不能學
            </p>
          </a>

        </div>

    


      </div>
    </div>
  );
}
