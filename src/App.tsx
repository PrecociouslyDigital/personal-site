import React from 'react';
import { Head, Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import 'tufte-css/tufte.min.css';
import './app.css';


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
                <React.Suspense fallback={<div>uwu nyah</div>}>
                    <Router>
                        <Routes path="*" />
                    </Router>
                </React.Suspense>
            </div>
        </Root>
    )
}

export default App
