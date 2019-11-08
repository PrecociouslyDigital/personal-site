import * as React from 'react';
import { Segment } from 'semantic-ui-react';
import { Head } from 'react-static';

export const Abstract : React.FC = ({ children }) => (<>
	<Segment secondary text-align="center">{children}</Segment>
	<Head>
		<meta property="og:description" content={children.toString()} />
	</Head>
</>);