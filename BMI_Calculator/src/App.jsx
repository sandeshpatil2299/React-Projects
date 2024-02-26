import { useState } from "react";

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [msg, setMsg] = useState("");

  const reload = () => {
    window.location.reload();
  };

  const bmiCal = (e) => {
    e.preventDefault();

    if(weight === 0 || height === 0)
    {
      alert("Enter correct values");
    }

    else
    {
      let ans= (weight/(height * height) * 703);
      setBmi(ans.toFixed(1));

      if(ans < 25)
      {
        setMsg("You are underweight");
      }
      else if(ans >= 25 && ans < 30)
      {
        setMsg("You are Healthy");
      }
      else
      {
        setMsg("You are Overweight");
      }
    }
  };

  return (
    <>
      <div className="w-[24rem] h-[27rem] py-10 px-7 rounded-md main">
        <h1 className="text-center text-2xl font-bold">BMI Calculator</h1>

        <form onSubmit={bmiCal} className="pt-4 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="weight">Weight (lbs)</label>
            <input
              type="number"
              placeholder="Enter weight here..."
              id="weight"
              value={weight || ""}
              onChange={(e) => setWeight(e.target.value)}
              className="text-lg py-1 pl-3 border-2 border-black rounded-md"
            ></input>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="height">Height (in)</label>
            <input
              type="number"
              placeholder="Enter height here..."
              id="height"
              value={height || ""}
              onChange={(e) => setHeight(e.target.value)}
              className="text-lg py-1 pl-3 border-2 border-black rounded-md"  
            ></input>
          </div>

          <div className="flex flex-col gap-1">
            <button type="submit" className="bg-blue-600 text-white py-2 text-base rounded-md hover:bg-blue-500"> Submit </button>
            <button type="submit" onClick={reload} className="bg-gray-300 py-2 text-base rounded-md hover:bg-gray-200 mt-1"> Reload </button>
          </div>

          <div className="text-center">
            <h1 className="font-bold mb-2">Your BMI : {bmi}</h1>
            <h1>
              {
                bmi > 30 ? <div className="text-red-500">{msg}</div> : (bmi < 25 ? <div className="text-yellow-500">{msg}</div> : <div className="text-green-500">{msg}</div>)
              }
            </h1>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
