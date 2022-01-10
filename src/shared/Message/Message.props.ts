export type MessageProps = {
    className?: string;
    messages: string | Array<string>;
    onClose?: () => void,
    variant: 'error' | 'success'
}

