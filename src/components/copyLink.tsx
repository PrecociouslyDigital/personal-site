import * as React from 'react';
import { Popup, Icon } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';


export const CopyLink : React.FC<{href: string}> = ({ href }) => (
    <CopyItem
        text={href}
        copy={(copied) => (copied ? 'Copied!' : 'Copy to Clipboard')}
        icon={<Icon name="linkify" size="small" aria-label="Copy to Clipboard" />}
    />
);

export const CopyItem : React.FC<{
	text: string;
	copy: (copied: boolean) => string;
	icon: JSX.Element;
}> = ({ text, copy, icon }) => {
    const [copied, setCopy] = React.useState(false);
    return (
        <Popup
            trigger={(
                <CopyToClipboard text={text} onCopy={() => setCopy(true)}>
                    {icon}
                </CopyToClipboard>
            )}
            onClose={() => setCopy(false)}
            on="hover"
            size="small"
            inverted
            position="top center"
            popperDependencies={copied as any}
        >
            <Popup.Content>
                {copy(copied)}
            </Popup.Content>
        </Popup>
    );
};
