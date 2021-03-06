import * as React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { Link } from '@reach/router';
import { Navbar } from '../../components/navbar';

import Reccomendations from '../../partials/recommendations.mdx';
import { Title } from '../../components/title/title';

export default () => (
    <Container text>
        <Navbar />
        <Title>
        Personal
        </Title>
        <p>
        Things I write about me.
        </p>
        <Grid columns="2" divided stackable>
            <Grid.Row>
                <Grid.Column>
                    <h2>The Gay Agenda</h2>
                    <p>Things about being gay</p>
                    <ul />
                </Grid.Column>
                <Grid.Column>
                    <h2>School</h2>
                    <p>Things I wrote for school.</p>
                    <ul />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <h2>Math</h2>
                    <p>Things about math that I'm either looking into or found to be neat</p>
                    <ul />
                </Grid.Column>
                <Grid.Column>
                    <h2>Miscellaneous</h2>
                    <p>Things that do not fall within the bounds of the other categories </p>
                    <ul> 
                        <li><a href="https://slatestarcodex.com/2014/11/21/the-categories-were-made-for-man-not-man-for-the-categories/">
                            The Categories were Made for Man, not Man for the Categories
                        </a></li>
                        <li> <Link to="/personal/sandwich">The Definition of a Sandwich</Link> </li>
                    </ul>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <h2>Things I also read</h2>
        <Reccomendations />
    </Container>
);
