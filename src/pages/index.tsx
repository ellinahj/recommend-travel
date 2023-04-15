export default function Home() {
  return (
    <main className="flex justify-center align-center ">
      {/* 글자영역 */}
      <div className="relative w-[768px] flex flex-col align-center">
        <div className="absolute flex h-full flex-col justify-center align-center">
          <div className="ml-[40px] text-white text-4xl">여행을 떠나요</div>
        </div>
        {/* 이미지 */}
        <img src={"/bg1.jpeg"} className="w-[768px] h-[300px]" />

        <div className="relative">
          {/* 컨텐츠 */}
          <div className="flex flex-col w-full px-5 pt-5 pb-10 absolute bg-white border-[1px] border-slate-300 -top-[10px] left-0 rounded-xl">
            {/* 셀렉트 영역 */}
            <div className="flex justify-center">
              <div className=" mt-5">
                <div>누구와 함께</div>
                <select className="h-[40px] rounded-md px-2 py-2 mt-2 border-slate-300 border-[1px]">
                  <option selected value="alone">
                    혼자
                  </option>
                  <option value="lover">연인</option>
                  <option value="couple">부부</option>
                  <option value="family">가족(4인)</option>
                </select>
              </div>

              <div className="mt-5 ml-7">
                <div>여행 목적</div>
                <select className="h-[40px] rounded-md px-2 py-2 mt-2 border-slate-300 border-[1px]">
                  <option selected value="resor">
                    휴양
                  </option>
                  <option value="sightsee">관광</option>
                  <option value="shopping">쇼핑</option>
                  <option value="golf">골프</option>
                </select>
              </div>

              <div className="mt-5 ml-7">
                <div>여행 기간</div>
                <select className="h-[40px] rounded-xl px-2 py-2 mt-2 border-slate-300 border-[1px]">
                  <option selected value="3박4일">
                    3박4일
                  </option>
                  <option value="week">7일</option>
                  <option value="2week">2주</option>
                </select>
              </div>

              <div className="mt-5 ml-7">
                <div>1인당 여행 예산</div>
                <select className="h-[40px] rounded-md px-2 py-2 mt-2 border-slate-300 border-[1px]">
                  <option selected value="ten">
                    10만원
                  </option>
                  <option value="fifty">50만원</option>
                  <option value="hundred">100만원</option>
                </select>
              </div>
            </div>
            {/* 결과 영역 */}
            <div className="flex justify-center">
              <div className="pt-10">
                {/* 카드 */}

                <div className="flex flex-col rounded-xl px-4 py-4 mt-2 border-slate-300 border-[1px]">
                  <img src={"/bg1.jpeg"} className="w-[300px] h-[200px] mb-3" />
                  <div>country</div>
                  <div>city</div>
                  <div>days</div>
                  <div>deposit</div>
                  <div>comment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
