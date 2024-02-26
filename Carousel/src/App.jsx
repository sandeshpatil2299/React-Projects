import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const images = [
    "https://picsum.photos/500/500?random=1",
    "https://picsum.photos/500/500?random=2",
    "https://picsum.photos/500/500?random=3",
    "https://picsum.photos/500/500?random=4",
    "https://picsum.photos/500/500?random=5",
    "https://picsum.photos/500/500?random=6",
  ];

  const increase = () => {
    setCount((count + 1) % images.length);
  };

  return (
    <div className="w-[100wh] h-[100vh] bg-gray-400 grid place-items-center">
      <div>
        <button onClick={increase} className="w-[100%] bg-slate-500 py-2 text-white text-2xl text-center font-bold mb-3">Next</button>
        <img src={images[count]} className="rounded-md" />
      </div>
    </div>
  );
}

export default App;
