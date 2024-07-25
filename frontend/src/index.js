import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { init } from './init.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const chat = ReactDOM.createRoot(document.getElementById('chat'));

chat.render(<BrowserRouter>{await init()}</BrowserRouter>);
