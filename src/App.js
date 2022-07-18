import './App.css';
import MainArea from './Components/Mainarea/MainArea';
import Sidebar from './Components/Sidebar/Sidebar';
import { ElementContextProvider } from './Components/Store/ElementContext';




function App() {
  return (
    <ElementContextProvider>
      <MainArea/>
      <Sidebar/>
    </ElementContextProvider>
  );
}

export default App;
