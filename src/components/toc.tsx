import * as React from 'react'
import { IoIosLink as Link } from 'react-icons/io';
import { Location as LocationComp } from '@reach/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Heading: React.FC<{id: string}> = ({ id, children }) => (<>
    {children}
    <LinkToClip id={id}/>
</>
);
const Subheading: React.FC<{id: string}> = ({ id, children }) => (<>
    
</>
);

const Figure: React.FC<{id: string}> = ({ id, children }) => (<>
    
</>
);

const LinkToClip: React.FC<{id: string}> = ({id}) => <LocationComp>
    {({location}) => <CopyToClipboard text={`${location.protocol}//${location.host}${location.pathname}}#${id}`}>
        <Link/>
    </CopyToClipboard>}
</LocationComp>;


export { Heading, Subheading, Figure}