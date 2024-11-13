import React, { useState } from "react";
import Main645 from "./Lottery645/Main645";
import Main720 from "./Lottery720/Main720";

const category = [
  { id: 1, name: "로또" },
  { id: 2, name: "연금복권" },
];

const MAX_HISTORY = 10;

function ContentSelector() {
  const [selectValue, setSelectValue] = useState(1);
  const [lotto645Numbers, setLotto645Numbers] = useState([]);
  const [pension720Numbers, setPension720Numbers] = useState([]);

  const selectValueChange = (id) => {
    setSelectValue(id);
    setLotto645Numbers([]);
    setPension720Numbers([]);
  };

  const onReset = () => {
    if (selectValue === 1) {
      setLotto645Numbers([]);
    } else {
      setPension720Numbers([]);
    }
  };

  const generateLotto645Numbers = () => {
    const numbers = [];
    while (numbers.length < 6) {
      const num = getRandomNumber(1, 45);
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers.sort((a, b) => a - b);
  };

  const generatePension720Numbers = () => {
    const numbers = [];
    for (let i = 0; i < 6; i++) {
      numbers.push(getRandomNumber(0, 9));
    }
    return { group: getRandomNumber(1, 5), numArray: numbers };
  };

  const onGenerate = () => {
    if (selectValue === 1) {
      // 로또 645
      const newNumbers = generateLotto645Numbers();
      setLotto645Numbers((prevNumbers) => {
        const updatedNumbers = [{ numArray: newNumbers }, ...prevNumbers];
        return updatedNumbers.slice(0, MAX_HISTORY);
      });
    } else {
      // 연금복권 720
      const newNumbers = generatePension720Numbers();
      setPension720Numbers((prevNumbers) => {
        const updatedNumbers = [newNumbers, ...prevNumbers];
        return updatedNumbers.slice(0, MAX_HISTORY);
      });
    }
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="h-full w-full px-12 py-6">
      <div className="flex flex-col">
        <div className="mb-10 flex w-full items-center justify-between border-b py-3">
          <div className="flex">
            {category.map((item) => (
              <div
                key={item.id}
                className={`me-4 ${selectValue === item.id ? "font-bold text-emerald-500" : "text-gray-400"} cursor-pointer`}
                onClick={() => selectValueChange(item.id)}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="flex">
            <button
              className="rounded-sm border border-double px-2 py-1 transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none active:scale-95"
              onClick={onGenerate}
            >
              Generate
            </button>
            <button
              className="rounded-sm border border-double px-2 py-1 transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none active:scale-95"
              onClick={onReset}
            >
              Reset
            </button>
          </div>
        </div>
        <div>
          {selectValue === 1 ? (
            <Main645 numbers={lotto645Numbers} />
          ) : (
            <Main720 numbers={pension720Numbers} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ContentSelector;
