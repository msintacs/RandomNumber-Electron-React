import React from "react";

function Titlebar() {
  const minimizeWindow = () => window.electron.send("minimize-window");
  const maximizeWindow = () => window.electron.send("maximize-window");
  const closeWindow = () => window.electron.send("close-window");

  return (
    <div
      className="flex select-none items-center justify-between bg-gray-800 text-gray-50"
      style={{ WebkitAppRegion: "drag", height: "32px" }}
    >
      <div className="flex h-full items-center px-4">
        <span className="text-sm">Number Generator</span>
      </div>
      <div className="flex h-full" style={{ WebkitAppRegion: "no-drag" }}>
        <button
          onClick={minimizeWindow}
          className="flex h-full items-center justify-center px-4 hover:bg-gray-700"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={maximizeWindow}
          className="flex h-full items-center justify-center px-4 hover:bg-gray-700"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3"
            />
          </svg>
        </button>
        <button
          onClick={closeWindow}
          className="flex h-full items-center justify-center px-4 hover:bg-red-600"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Titlebar;
