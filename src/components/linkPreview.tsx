import * as React from 'react';
import { Popup, Placeholder } from 'semantic-ui-react';
import memo from 'micro-memoize';
import { unfurl, Metadata } from 'unfurl.js';
import { useAsync } from "react-async"


const metadataConverter = (metadata : Metadata) => ({
    ...metadata,
    ...metadata.oEmbed,
    ...metadata.open_graph,
    ...metadata.twitter_card,
});

type MetadataProps = ReturnType<typeof metadataConverter>;
// DON'T USE THIS IT'S BROKEN
const promiseGenerator : (link: string) => Promise<MetadataProps> =
    memo((previewLink) => unfurl(previewLink).then(metadataConverter));
export const LinkPreview : React.FC<{href: string}> = ({ href, children }) => {
    const { data, error, isPending } = useAsync(promiseGenerator(href));

    return (<Preview link={<a href={href}>{children}</a>}>
        {isPending ? 
            <PlaceholderPreview /> :
            
            error != null ? error : <>
                <h3> {data.title}</h3>
                {data.description}
            </>
            
        }
        </Preview>
        
    );
};

export const Preview : React.FC<{link: JSX.Element}> = ({children, link}) => (
    <Popup
        trigger={link}
        on="hover"
        mouseEnterDelay={500}
        mouseLeaveDelay={500}
    >   
        <Popup.Content>
            {children}
        </Popup.Content>
    </Popup>
);

const PlaceholderPreview : React.FC = () => (
    <Placeholder>
        <Placeholder.Header>
            <Placeholder.Line />
            <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
        </Placeholder.Paragraph>
    </Placeholder>
);

