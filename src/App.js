import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

// import Home from './Components/Home';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './Route';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App() {
  return (
    // <div className="App">
    //   <BrowserRouter>
    //   <AppRoute/>
    // </BrowserRouter>
    // </div>
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <AppRoute/>
        </BrowserRouter>
      </div>
    </Provider>
    
  );
}

export default App;
