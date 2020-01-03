import React from 'react';
import Sidebar from './Sidebar';
import Resume from './Resume';
import Grid from '@material-ui/core/Grid';
import './App.css';

export default function App() {
  const [currPage, setPage] = React.useState("resume")

  return (
    <div>
      <Sidebar pageChange={setPage.bind(this)}></Sidebar>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh', paddingTop: '10vh' }}
      >
        { currPage === 'resume' ? <Resume /> : null}
      </Grid>
    </div>
  );
}