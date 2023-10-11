import { type Ref, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import * as Dialog from '@radix-ui/react-dialog';

const Root = Dialog.Root;
const Trigger = Dialog.Trigger;
const Portal = Dialog.Portal;

const Overlay = forwardRef((props: Dialog.DialogOverlayProps, ref: Ref<HTMLDivElement>) => {
    const { className, ...rest } = props;
    return (
        <Dialog.Overlay
            {...rest}
            className={twMerge(
                'fixed bottom-0 left-0 right-0 top-0 bg-white bg-opacity-30 backdrop-blur-sm',
                className
            )}
            ref={ref}
        />
    );
});

const Content = forwardRef((props: Dialog.DialogContentProps, ref: Ref<HTMLDivElement>) => {
    const { className, ...rest } = props;
    return (
        <Dialog.Content
            {...rest}
            className={twMerge(
                'fixed bottom-0 right-0 top-0 w-1/2 max-w-2xl bg-white p-8',
                className
            )}
            ref={ref}
        />
    );
});

export { Root, Trigger, Portal, Overlay, Content };
