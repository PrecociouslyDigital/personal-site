import React from 'react';
import { Head, Root, Routes } from 'react-static';
import { Router, Location } from '@reach/router';
import './app.css';
import { MDXProvider } from '@mdx-js/react';
import { Container, Loader, Grid } from 'semantic-ui-react';
import { CommitLink } from './components/githubLink';
import { MDXComponents } from './components/mdxComponents';

function App() {
    return (
        <Root>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                <Location>
                    {({ location }) => <meta property="og:url" content={location.href} />}
                </Location>
                <title> Skyedelaciel </title>
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Skyedelaciel" />
                <meta property="og:description" content="Skyedelaciel" />
                <meta property="og:description" content="Personal Site for Skyedelaciel" />
                <link href="/css/semantic.min.css" rel="stylesheet"/>

                <link rel="stylesheet" href="/css/katex.min.css" integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"/>
            </Head>
            <div className="bodyContent">
                <React.Suspense fallback={<Loader inverted active>Loading</Loader>}>
                    <MDXProvider components={MDXComponents}>
                        <Router>
                            <Routes path="*" />
                        </Router>
                    </MDXProvider>
                </React.Suspense>
                <div className="push" />
            </div>

            <footer>
                <Container>
                    <Grid>
                        <Grid.Column floated="left" width={9}>
                            This work is licensed under a
                            {' '}
                            <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>
.
                        </Grid.Column>
                        <Grid.Column floated="right" width={4}>
                            This site is serving
                            {' '}
                            <CommitLink>
                                {' '}
skyedelaciel@
                                {`${BRANCH}`}
                                {' '}

                            </CommitLink>
                        </Grid.Column>
                    </Grid>
                </Container>
            </footer>
        </Root>
    );
}

export default App;
