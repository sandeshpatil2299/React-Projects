import React, { useState } from "react";

const App = () => {
  const [principle, setPrinciple] = useState(0);
  const [interest, setInterset] = useState(0);
  const [time, setTime] = useState(0);
  const [si, setSi] = useState(0);

  const reload = () => {
    window.location.reload();
  };

  const calSi = (e) => {
    e.preventDefault();

    if (principle === 0 || interest === 0 || time === 0) 
    {
      alert("Please enter correct values");
    } 
    else 
    {
      let ans = (parseInt(principle) * parseInt(interest) * parseInt(time)) / 100;
      setSi(ans);
    }
  };

  return (
    <div className="main py-14 px-8 rounded-sm">
      <div className="pb-3">
        <h1 className="text-4xl">Simple Interest Calculator</h1>
      </div>

      <div className="pb-3">
        <p>Calculate your simple interest easily</p>
      </div>

      <div className="bg-lime-200 py-5 text-center mb-8">
        <h1 className="text-3xl font-bold">&#8377;{si}</h1>
        <h1 className="text-sm pt-3">Total Simple Interest</h1>
      </div>

      <form onSubmit={calSi}>
        <div className="flex flex-col gap-6">
          <input
            type="number"
            value={principle || ""}
            onChange={(e) => setPrinciple(e.target.value)}
            placeholder="&#8377; Principle amount"
            className="py-2 pl-3 outline-none border-[1px] border-black"
          />

          <input
            type="number"
            value={interest || ""}
            onChange={(e) => setInterset(e.target.value)}
            placeholder="Rate of Interest (p.a) %"
            className="py-2 pl-3 outline-none border-[1px] border-black"
          />

          <input
            type="number"
            value={time || ""}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Time period (Yr)"
            className="py-2 pl-3 outline-none border-[1px] border-black"
          />
        </div>

        <div className="flex justify-around gap-2 mt-10">
          <button type="submit" className="bg-black w-full py-3 text-white rounded-sm">Calculate</button>
          <button type="submit" onClick={reload} className="w-full border-[1px] border-black rounded-sm">
            Reload
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
