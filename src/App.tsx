import React from 'react';
import { Head, Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import './app.css';
import { MDXProvider } from '@mdx-js/react';
import { Container, Loader } from 'semantic-ui-react';

const Wrapper : React.FC = ({children}) => <Container text> {children} </Container>


function App() {
    return (
        <Root>
            <Head>
                <meta
                  name="viewport"
                  content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/fomantic-ui/2.7.8/semantic.min.css" rel="stylesheet" />
            </Head>
            <div className="content">
                <React.Suspense fallback={<Loader inverted active>Loading</Loader>}>
                    <MDXProvider components={{ wrapper: Wrapper }}>
                        <Router>
                            <Routes path="*" />
                        </Router>
                    </MDXProvider>
                </React.Suspense>
                <div className="push"/>
            </div>
            
            <footer>
                <Container>
                    <p>
                    This work is licensed under a 
                    <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
                    <span style={{textAlign:'right'}}>This site is serving skyedelaciel@{`${BRANCH}`}</span></p>
                </Container>
            </footer>
        </Root>
    )
}

export default App
