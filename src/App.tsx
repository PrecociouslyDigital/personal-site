import React from 'react';
import { Head, Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import './app.css';
import 'fomantic-ui-css/semantic.min.css';
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
                <link href="https://fonts.googleapis.com/css?family=Fira+Code|Fira+Sans|Lora&display=swap" rel="stylesheet" />
            </Head>
            <div className="content">
                <React.Suspense fallback={<Loader inverted active>Loading</Loader>}>
                    <MDXProvider components={{ wrapper: Wrapper }}>
                        <Router>
                            <Routes path="*" />
                        </Router>
                    </MDXProvider>
                </React.Suspense>
            </div>
        </Root>
    )
}

export default App
