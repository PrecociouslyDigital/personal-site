declare module 'react-copy-to-clipboard' {
    export const CopyToClipboard : React.FC<{
        text: string;
        onCopy?: (text:string, result:boolean) => void;
        options?: {debug: boolean; message: boolean;};
    }>
}