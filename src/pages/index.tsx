import React from 'react';
import { Container } from 'semantic-ui-react';
import { Navbar } from '../components/navbar';


export default React.memo(() => (
    <Container text>
        <Navbar />
        <div style={{ textAlign: 'center' }}>
            <h1>
            Welcome to Skyedelaciel
            </h1>
            <p>
            Personal site where I write essays or link to other people's on topics I care about.
            Opinions are my own.
            </p>
        </div>
    </Container>
));
