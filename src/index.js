import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App'; // 상대경로는 모두 src 집에서 찾아라


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App bgcls="bg-dark fixed-top" textcls="text-white" />

);

