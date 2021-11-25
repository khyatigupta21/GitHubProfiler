import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import GithubProfileSearch from './GithubRepoSearch'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <GithubProfileSearch/>
  </React.StrictMode>,
  document.getElementById('root')
)
