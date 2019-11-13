import * as React from 'react';

const MarginNote: React.FC<{symbol: string, id: string}> = 	({ id, symbol, children }) => (
    <>
        <label htmlFor={`mn-${id}`} className="margin-toggle">
            {' '}
            {symbol}
            {' '}
        </label>
        <input
            type="checkbox"
            id={`mn-${id}`}
            className="margin-toggle"
        />
        <span className="marginNote">
            {children}
        </span>
    </>
);


export { MarginNote };
