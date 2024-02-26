import "./App.css";

const generateColor = () => 
{
  let color =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";

  document.body.style.background = color;
};

function App() 
{
  return (
    <div>
      <button onClick={generateColor}>Click to Change background</button>
    </div>
  );
}

export default App;
