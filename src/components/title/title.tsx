import * as React from 'react';

import './title.css';

export const Title: React.FC = ({ children }) => (
	<h1 className='title'>{children}</h1>
)