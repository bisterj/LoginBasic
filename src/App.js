import './App.css';

function Field() {
  return (
    <input placeholder='placeholder'/>
  );
};

function LoginForm() {
  return(
    <div className='LoginForm'>
      <h1>LOGIN</h1>
      <Field />
      <Field />
      <button>Submit</button>
    </div>
  );
};

export default function App() {
  return(
    <div className='App'>
      <LoginForm />
    </div>
  );
};
