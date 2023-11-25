import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Whiteboard } from './components/whiteboard/Whiteboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/whiteboard' element= {<Whiteboard/>} />
      </Routes>
    </Router>
  )
};

export default App;


      //<Link to='/'>Home</Link>
      //<Link to='/whiteboard'>Whiteboard</Link>
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
