import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {HashRouter} from "react-router-dom";
import '@fontsource/inter';
import {Provider} from "react-redux";
import store from '/src/redux/store.js';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </StrictMode>,
)
