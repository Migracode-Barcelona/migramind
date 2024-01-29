import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Home from './routes/home/Home';
import Layout from './routes/layout/Layout';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
