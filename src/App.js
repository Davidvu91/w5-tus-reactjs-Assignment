
import './App.css';
import React from 'react';
import {useState} from 'react';


function App() {

  const [factor, setFactor] = useState({
    yourName: '',
    email: '',
    phone: '',
    password: '',
    retypePassword: '',
  })

  const handleSubmit = (event) => {
      event.preventDefault();
      if(factor.password!==factor.retypePassword) {
        alert('Your password not match')
      }
  };



const handleFunction = (event) => {

  setFactor({...factor, [event.target.name]: event.target.value});

}
console.log(factor);
  return (
    <div className="App">
      <h1> Hello Jaguar</h1>

      <form onSubmit={handleSubmit} id="form">

        <label htmlFor="emai">Name:</label><br/>
        <input type="text" id="emai" name="yourName" onChange={handleFunction} /><br/>

        <label htmlFor="password">Email:</label><br/>
        <input type="mail" id="password" name="email" onChange={handleFunction} /><br/>

        <label htmlFor="password">Phone No:</label><br/>
        <input type="text" id="password" name="phone" onChange={handleFunction}/><br/>

        <label htmlFor="password">Password:</label><br/>
        <input type="password" id="password" name="password" onChange={handleFunction} /><br/>

        <label htmlFor="password">Retype Password:</label><br/>
        <input type="password" id="password" name="retypePassword" onChange={handleFunction} /><br/><br/>

        <button type="submit"> Submit </button>

      </form> 

    </div>
  );
}


export default App;