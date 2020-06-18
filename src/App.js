import React from 'react';
import AppRouter from './client/Root';
import NavBar from './client/NavBar';

import Container from '@material-ui/core/Container';

function App(){
    return (
        <div>
            <NavBar />
            <Container>
                <AppRouter />
            </Container>
        </div>
    );
}

export default App;