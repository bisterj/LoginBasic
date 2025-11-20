import { useState } from 'react';
import './App.css';

function Field({ placeholder, type, value, setValue }) {
  return (
    <input 
      placeholder={placeholder} 
      type={type} 
      value={value} 
      onChange={(e) => setValue(e.target.value)} />
  );
};

function LoginForm({ users }) {
  const [message, setMessage] = useState('no successful login yet');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleClick(username, password) {

    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      if (user.username === username && user.password === password) {
        setMessage('successful login');
        break;
      } else if (i === users.length - 1) {
        setMessage('failed Login');
      }
    }
  }

  return(
    <div className='LoginForm'>
      <h1>LOGIN</h1>
      <Field 
        placeholder={'Username'} 
        type={'text'} 
        value={username} 
        setValue={setUsername} />
      
      <Field 
        placeholder={'Password'} 
        type={'password'} 
        value={password} 
        setValue={setPassword} />
      
      <button onClick={() => handleClick(username, password)} >Submit</button>
      <p>{message}</p>
      <p>Username: {username}</p>
      <p>Passsword: {password}</p>
    </div>
  );
};

export default function App() {
  return(
    <div className='App'>
      <LoginForm users={users} />
    </div>
  );
};

const users = [
  {username: 'bisterj', password:'Pass123!'},
  {username: 'gregguy', password:'Greg#32'}
];
