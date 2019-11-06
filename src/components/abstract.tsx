import * as React from 'react';
import { Segment } from 'semantic-ui-react';

export const Abstract : React.FC = ({ children }) => (
	<Segment secondary text-align="center">{children}</Segment>
);