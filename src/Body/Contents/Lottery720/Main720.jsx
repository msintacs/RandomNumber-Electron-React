import React from "react";

function Main720({ numbers }) {
  return (
    <div>
      {numbers.length === 0 && <p>아직 생성된 번호가 없습니다.</p>}

      {numbers.map((num, index) => (
        <div key={index} className="mb-2">
          {num.group}조 &nbsp; {num.numArray.join(", ")}
        </div>
      ))}
    </div>
  );
}

export default Main720;
