import * as React from 'react';
import { Head } from 'react-static';

import './title.css';

export const Title: React.FC = ({ children }) => (
    <>
        <h1 className="title">{children}</h1>
        <Head>
        	<title> {children.toString()} - Skyedelaciel </title>
            <meta property="og:title" content={children.toString()} />
        </Head>
    </>
);
