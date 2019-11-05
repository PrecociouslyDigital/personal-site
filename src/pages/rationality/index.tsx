import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from '@reach/router';
import { Navbar } from '../../components/navbar';
import { Container } from 'semantic-ui-react';

export default () => (<Container text>
	<Navbar/>
	<h1>
        Rationality
    </h1>
    <p>
        I write about rational and rat-adjacent things here so I don't spend as many 
        <a href="https://www.lesswrong.com/posts/wkuDgmpxwbu2M2k3w/you-have-a-set-amount-of-weirdness-points-spend-them-wisely">
        weirdness points </a> on them. 
    </p>
	<Grid columns='2' divided stackable>
        <Grid.Row>
        	<Grid.Column>
	            <h2>Web</h2>
	            <p>Things about things that show up in a browser</p>
	            <ul>
	            </ul>
            </Grid.Column>
            <Grid.Column>
	            <h2>Security</h2>
	            <p>Things about getting places we shouldn't be</p>
	            <ul>
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
	            	<li><a href="https://ansuz.sooke.bc.ca/entry/23">What Colour are your bits?</a></li>
	            </ul>
            </Grid.Column>
        </Grid.Row>
    </Grid>
</Container>);