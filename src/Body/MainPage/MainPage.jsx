import React from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  const goIndex = () => {
    console.log("goIndex Click");
    navigate("/index");
  };

  return (
    <div className="flex h-full w-full items-center justify-center text-gray-800">
      <div className="flex flex-col items-center">
        <div className="text-center text-4xl">NUMBER GENERATOR</div>
        <div className="py-2 text-xs"> ver 1.0 </div>
        <button
          className="my-3 rounded-sm bg-gray-800 px-3 py-1 text-gray-50 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gray-700 focus:outline-none active:scale-95"
          onClick={goIndex}
        >
          Generate
        </button>
        <div className="pt-5 text-xs text-red-300">
          주의: 이 프로그램은 무작위 번호 제공만을 목적으로 합니다. 복권 구매와
          관련된 모든 결정은 사용자에게있습니다.
        </div>
      </div>
    </div>
  );
}

export default MainPage;
