import './App.css';
import Component1 from './components/TestComponent1';
import { UserContextProvider } from './context/HeaderContext';
import { TimeContextProvider } from './context/TimeContext';

function App() {
  return (
    <UserContextProvider>
      <TimeContextProvider>
      <div className="App">
        <Component1 />
      </div>
      </TimeContextProvider>
    </UserContextProvider>

  );
}

export default App;
