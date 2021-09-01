import React from 'react';
import './App.css';

import Grid from '@material-ui/core/Grid';

import Sidebar from './components/Sidebar/Sidebar';
import SpaceXList from './components/SpaceXList/SpaceXList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Grid container spacing={2}>
          <Grid item md={3} sm={6}>
            <Sidebar width={300} height={"100vh"}>
              <h2>Exercises</h2>
              <p>Start adding types/ interfaces to GQL project<br/><br/>
              Think about what if you want to display this data in a card component.
                  Where you click it and it displays further details.
                  Think about error handling if the fetch goes wrong.</p>
              
            </Sidebar>
          </Grid>
          <Grid item xs={3} md={6}>
        <SpaceXList/>
          </Grid>
          </Grid>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
