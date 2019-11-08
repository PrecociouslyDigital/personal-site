import * as React from 'react';
import { Popup, Placeholder } from 'semantic-ui-react';
import useFetch from 'fetch-suspense';

const LinkPreview : React.FC<{link: string}> = ({ link }) => {
    const response = useFetch(link);
    return (
        <Popup
            trigger={<a href={link} />}
            on="hover"
            mouseEnterDelay={500}
            mouseLeaveDelay={500}
        >
            <React.Suspense fallback={<PlaceholderPreview />}>
                {response}
            </React.Suspense>
        </Popup>
    );
};

const PlaceholderPreview : React.FC = () => (
    <Placeholder>
        <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
        </Placeholder.Paragraph>
    </Placeholder>
);

export { LinkPreview };
