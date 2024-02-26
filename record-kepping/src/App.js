import "./App.css";
import Header from "./Components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function App() 
{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData]= useState([]);

  const addData= () =>
  {
    setData([...data, {name, email}]);
    setName("");
    setEmail("");
  }

  const removeData= (index) =>
  {
    let arr= data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Stack spacing={2} direction="row" className="stack">
          <TextField 
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="standard-basic" 
            label="Name" 
            variant="standard" />

          <TextField 
            value={email}
            onChange= {(event) => setEmail(event.target.value)}
            id="standard-basic" 
            label="Email" 
            variant="standard" />

          <Button 
            onClick={addData}
            variant="contained" 
            color="success">
            
            <AddRoundedIcon sx={{ fontSize: 35 }}></AddRoundedIcon>
          </Button>
        </Stack>

        <div className="data">
          <h2>Name</h2>
          <h2>Email</h2>
          <h2>Remove</h2>
        </div>

        {
          data.map((element, index) =>
          {
            return (
              <div key={index} className="data">
                <h2>{element.name}</h2>
                <h2>{element.email}</h2>
                <button onClick={() => removeData(index)}>
                  <h2>Remove</h2>
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
