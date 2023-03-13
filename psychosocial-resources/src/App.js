import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Home from './routes/home/Home';
import Events from './routes/events/Events';
import About from './routes/about/About';
import Layout from './routes/layout/Layout';
import Results from './routes/results/Results'
import SingleEvent from './routes/single-event/SingleEvent';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Psychology from './routes/psychology/Psychology';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route element={<Events />} path='events' />
          <Route element={<Psychology/>} path='psychology' />
          <Route element={<About />} path='about' />
          <Route element={<Results />} path='results' />
          {['events/:id', 'results/:search='].map(path => <Route path={path} element={<SingleEvent />} />)}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
