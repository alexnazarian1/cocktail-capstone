import React from 'react';

import Routes from './config/routes';

import './css/App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <main className="container">
          <Routes />
        </main>
      </>
    )
  }
}

export default App;
