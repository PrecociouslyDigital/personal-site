declare module 'react-copy-to-clipboard' {
    export const CopyToClipboard : React.FC<{
        text: string;
        onClick?: () => void;
    }>
}