import logo from './logo.svg';
import './App.css';
import ListTodo from './views/todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={`.${logo}`} className="App-logo" alt="logo" />
        <ListTodo />
      </header>
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  );
}

export default App;
