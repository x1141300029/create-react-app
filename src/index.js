import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.js'

// 把axios挂载到全局
// import * as services from './services'
// React.Component.prototype.http=services;


ReactDOM.render(<App title={"新标题"}/>,document.getElementById("root"));
