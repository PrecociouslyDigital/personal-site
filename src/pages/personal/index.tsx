import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from '@reach/router';
import { Navbar } from '../../components/navbar';
import { Container } from 'semantic-ui-react';
import Reccomendations from '../../partials/recommendations.mdx';

export default () => (<Container text>
	<Navbar/>
	<h1>
        Personal
    </h1>
    <p>
        Things I write about me.
    </p>
	<Grid columns='2' divided stackable>
        <Grid.Row>
        	<Grid.Column>
	            <h2>The Gay Agenda</h2>
	            <p>Things about being gay</p>
	            <ul>
	            </ul>
            </Grid.Column>
            <Grid.Column>
	            <h2>School</h2>
	            <p>Things I wrote for school.</p>
	            <ul>
	            </ul>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        	<Grid.Column>
	            <h2>Math</h2>
	            <p>Things about math that I'm either looking into or found to be neat</p>
	            <ul>
	            	<li><Link to="/technology/about"> Design Philosophy of This Site </Link></li>
	            	<li><Link to="/technology/todo"> Things I Need to Do </Link></li>
	            </ul>
            </Grid.Column>
            <Grid.Column>
	            <h2>Miscallanious</h2>
	            <p>Things that do not fall within the bounds of the other categories </p>
	            <ul>
	            	<li><a href="https://ansuz.sooke.bc.ca/entry/23">What Colour are your bits? (Skala 2004) </a></li>
	            </ul>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    <h2>Things I also read</h2>
    <Reccomendations/>
</Container>);