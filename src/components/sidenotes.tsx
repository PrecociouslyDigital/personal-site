import * as React from 'react'

const SideNote: React.FC<{id: string}> = ({ id, children }) => (<>
    <label htmlFor={`sn-${id}`} className="margin-toggle sidenote-number"></label>
    <input type="checkbox"
           id={`sn-${id}`}
           className="margin-toggle"/>
    <span className="sideNote">
        {children}
    </span>

</>
);
const MarginNote: React.FC<{id: string}> = ({ id, children }) => (<>
    <label htmlFor={`mn-${id}`} className="margin-toggle"></label>
    <input type="checkbox"
           id={`mn-${id}`}
           className="margin-toggle"/>
    <span className="marginNote">
        {children}
    </span>
</>
);


export { SideNote, MarginNote };