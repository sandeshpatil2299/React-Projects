import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import moviesNames from './moviesNames.json';

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          {
            moviesNames.map((element) => {
              return (
                <Movies 
                    imgLink= {element.Poster}
                    title= {element.Title}
                    year= {element.Year}
                />
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
