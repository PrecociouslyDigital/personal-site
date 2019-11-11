import * as React from 'react';
import { Components } from '@mdx-js/react';
import { CopyLink } from './copyLink';
import { Container } from 'semantic-ui-react';
import { Location, WindowLocation } from '@reach/router';


const newHash = (location: WindowLocation, hash: string) => location.protocol+'//'+
  location.hostname+
 (location.port?":"+location.port:"")+
  location.pathname+
 (location.search?location.search:"") + "#" + hash;

 const generateLink : (element: React.FC) => React.FC = (element: React.FC) => React.memo((props: any) => (<Location>
		{({location}) => element({
			...props,
			children: (<>
				{props.children}
				<CopyLink href={newHash(location, props.id)}/>
			</>)
		})}
</Location>));

export const MDXComponents : Components = {
	wrapper: ({ children }) => (<Container text>{children}</Container>),
	h1: generateLink((props) => <h1 {...props}> {props.children} </h1>),
	h2: generateLink((props) => <h2 {...props}> {props.children} </h2>),
	h3: generateLink((props) => <h3 {...props}> {props.children} </h3>),

};