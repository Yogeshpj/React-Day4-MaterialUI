import { Button, FormControl, InputLabel,MenuItem,Select } from '@mui/material';
import React from 'react'
import { useState } from 'react';
function Separate(){
  const [name,setName] = useState('');
  const [fruit,setFruit] = useState('');
  const [msg,setMsg] = useState('');


  const setSubmit = (event) => {
    event.preventDefault();

    setMsg(`Hello,${name}! Your favorite fruit is ${fruit}`);
    setName('');
    setFruit('');
  };
  const style1={width:300}
  const style2={height:40}
  const style3={borderRadius: 10}
  return (
    <div style={{marginTop:"200px"}}>
        <h1>Enter your name and Favourite fruit:</h1>
      <form onSubmit={setSubmit}>
        <input
        type="text"
        name="name"
        style={{...style1 , ...style2 , ...style3}}
        
        value={name}
        placeholder="Name"
        onChange={(event) =>
          setName(event.target.value)
        }
        />
        <br/><br/>
        <FormControl style={{...style1 , ...style3}}>
        <InputLabel variant="standard"><em>Choose a fruit</em>
        </InputLabel>
        <Select 
        placeholder="choose a fruit"
        value={fruit}
        onChange={(event) =>
          setFruit(event.target.value)
        }
        >
          <MenuItem value={"Apple"}>Apple</MenuItem>
          <MenuItem value={"Banana"}>Banana</MenuItem>
          <MenuItem value={"Cherry"}>Cherry</MenuItem>
          <MenuItem value={"Durian"}>Durian</MenuItem>
          <MenuItem value={"Elderberry"}>Elderberry</MenuItem>
        </Select>
        </FormControl>
        <br/><br/>
        <br/><br/>
        <Button variant="contained" type="submit">Submit</Button>
        <br/><br/>
        <h2>{msg}</h2>
      </form>
    </div>
  )
};

export default Separate