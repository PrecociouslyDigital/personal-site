import * as React from 'react';
import { Segment } from 'semantic-ui-react';
import { Head } from 'react-static';

export const Abstract : React.FC = ({ children }) => (
    <>
        <Segment secondary textAlign="center">{children}</Segment>
        <Head>
            <meta property="og:description" content={children.toString()} />
        </Head>
    </>
);
