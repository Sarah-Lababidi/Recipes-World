import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Main from './Components/Main';

function App() {
  const store = ConfigureStore();
  return (
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>
  );
}
export default App;
