import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import { robots } from './robots';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Card id={robots[0].id} name={robots[0].name} user={robots[0].username}/>
        <Card id={robots[1].id} name={robots[1].name} user={robots[1].username}/>
        <Card id={robots[2].id} name={robots[2].name} user={robots[2].username}/> 
    </div>,




document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
