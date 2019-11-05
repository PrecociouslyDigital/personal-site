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
        Under Construction y'all
    </Grid>
</Container>);