import * as React from 'react';

export const CommitLink : React.FC = ({ children }) => (
	<a href={`https://github.com/PrecociouslyDigital/personal-site/tree/${COMMITHASH}`}>{children}</a>
);