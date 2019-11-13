import * as React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { Link } from '@reach/router';
import { Navbar } from '../../components/navbar';

import { Title } from '../../components/title/title';


export default () => (
    <Container text>
        <Navbar />
        <Title>
        Technology
        </Title>
        <p>
        Things I write about the magic boxes.
        </p>
        <Grid columns="2" divided stackable>
            <Grid.Row>
                <Grid.Column>
                    <h2>Web</h2>
                    <p>Things about things that show up in a browser</p>
                    <ul />
                </Grid.Column>
                <Grid.Column>
                    <h2>Portfolio</h2>
                    <p>Things that I've worked on</p>
                    <ul>
                        <li><a href="https://mozak.science/">Mozak</a> a citizen science game helping neuroscience research</li>
                        <li><a href="https://github.com/anubiann00b/ElementalBattle">A short and sweet game I worked on with some friends at Codeday 2015</a></li>
                    </ul>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <h2>Meta</h2>
                    <p>Things about this site</p>
                    <ul>
                        <li><Link to="/technology/about"> Design Philosophy of This Site </Link></li>
                        <li><Link to="/technology/todo"> Things I Need to Do </Link></li>
                    </ul>
                </Grid.Column>
                <Grid.Column>
                    <h2>Misc</h2>
                    <p>Things that do not fall within the bounds of the other categories </p>
                    <ul>
                        <li><a href="https://ansuz.sooke.bc.ca/entry/23">What Colour are your bits? (Skala 2004) </a></li>
                        
                    </ul>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
);
