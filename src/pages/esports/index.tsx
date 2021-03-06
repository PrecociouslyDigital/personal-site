import * as React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { Navbar } from '../../components/navbar';

import { Title } from '../../components/title/title';

export default React.memo(() => (
    <Container text>
        <Navbar />
        <Title>
        Esports
        </Title>
        <p>
        Things the esports industry and the wider gaming industry.
        </p>
        <Grid columns="2" divided stackable>
            <Grid.Row>
                <Grid.Column>
                    <h2>Game-Specific Thoughts</h2>
                    <p>Things about specific games</p>
                    <ul />
                </Grid.Column>
                <Grid.Column>
                    <h2>Plans Papers and Presentations</h2>
                    <p>Things I wrote to present to people.</p>
                    <ul />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <h2>Industry musings</h2>
                    <p>Things about the industy as a whole</p>
                    <ul />
                </Grid.Column>
                <Grid.Column>
                    <h2>Personal</h2>
                    <p>Things about my personal experiences in the space </p>
                    <ul />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
));
