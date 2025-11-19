import './App.css';

function Field({ placeholder, type }) {
  return (
    <input placeholder={placeholder} type={type} />
  );
};

function LoginForm() {
  return(
    <form className='LoginForm'>
      <h1>LOGIN</h1>
      <Field placeholder={'Username'} type={'text'} />
      <Field placeholder={'Password'} type={'password'} />
      <button>Submit</button>
    </form>
  );
};

export default function App() {
  return(
    <div className='App'>
      <LoginForm />
    </div>
  );
};
