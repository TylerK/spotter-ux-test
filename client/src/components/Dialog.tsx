import { Ref, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import * as DialogPrimitive from '@radix-ui/react-dialog';

const Root = DialogPrimitive.Root;
const Trigger = DialogPrimitive.Trigger;
const Portal = DialogPrimitive.Portal;

const Overlay = forwardRef(
    (props: DialogPrimitive.DialogOverlayProps, ref: Ref<HTMLDivElement>) => {
        const { className, ...rest } = props;
        return (
            <DialogPrimitive.Overlay
                {...rest}
                className={twMerge(
                    'fixed bottom-0 left-0 right-0 top-0 bg-white bg-opacity-30 backdrop-blur-sm',
                    className
                )}
                ref={ref}
            />
        );
    }
);

const Content = forwardRef(
    (props: DialogPrimitive.DialogContentProps, ref: Ref<HTMLDivElement>) => {
        const { className, ...rest } = props;
        return (
            <DialogPrimitive.Content
                {...rest}
                className={twMerge(
                    'fixed bottom-0 right-0 top-0 w-1/2 max-w-2xl bg-white p-8',
                    className
                )}
                ref={ref}
            />
        );
    }
);

export const Dialog = { Root, Trigger, Portal, Overlay, Content };
