import logo from './logo.svg';
import './App.css';
import store from './redux/store.js'
import CakeContainer from './components/CakeContainer.js'
import HooksCakeContainer from './components/HooksCakeContainer.js'
import IcecreamContainer from './components/IcecreamContainer.js'
import HooksIcecreamContainer from './components/HooksIcecreamContainer.js'
import CookieContainer from './components/CookieContainer.js'
import HooksCookieContainer from './components/HooksCookieContainer.js'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <h1>Cakes</h1>
        <HooksCakeContainer />
        <CakeContainer />
        <br/><hr/>
        <h1>Icecreams</h1>
        <HooksIcecreamContainer />
        <IcecreamContainer />
        <br/><hr/>
        <h1>Cookie</h1>
        <HooksCookieContainer />
        <CookieContainer />
      </div>
    </Provider>
  );
}

export default App;
