import React from 'react';
import Sidebar from './Sidebar';
import Resume from './Resume/Resume';
import Grid from '@material-ui/core/Grid';
import { hot } from 'react-hot-loader/root';

function App() {
  const [currPage, setPage] = React.useState("resume")

  return (
    <div>
      <Sidebar pageChange={setPage}></Sidebar>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh', paddingTop: '10vh' }}
      >
        {currPage === 'resume' ? <Resume /> : null}
      </Grid>
    </div>
  );
}

export default hot(App);