import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Leaderboard from './Leaderboard';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Leaderboard />, document.getElementById('root'));

serviceWorker.unregister();
