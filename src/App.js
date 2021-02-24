import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
import Main from './Components/Main';
import ScrollToTop from './Components/ScrollToTop';


function App() {
    const store = ConfigureStore();
    return (
        <Provider store={store}>
            <Router>
              <ScrollToTop> 
                <Main/>
              </ScrollToTop > 
            </Router>
        </Provider>
    );
}
export default App;
