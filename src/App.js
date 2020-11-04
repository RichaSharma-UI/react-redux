import { BrowserRouter } from 'react-router-dom';

import { Routes } from "./Routes";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="text-center py-5">Welcome React Redux</h3>
          <div className="row">
            <Routes/>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
