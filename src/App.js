import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import GifList from './components/GifList'
import GifForm from './components/GifForm'
import data from './data/gif'

function App(props) {
  const gifs = data
  const loading = false
  const error = ""

  return (
    <div className="App">
      <h1>Search for gifs</h1>
      <GifForm/>

      {
        loading ? <h3>We are loading</h3> : <GifList gifs = {gifs}/>
      }
    </div>
  );
}

export default App;