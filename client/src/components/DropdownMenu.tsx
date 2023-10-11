import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { type Ref, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const Root = DropdownMenu.Root;
const Trigger = DropdownMenu.Trigger;
const Portal = DropdownMenu.Portal;

const Content = forwardRef(
    (props: DropdownMenu.DropdownMenuContentProps, ref: Ref<HTMLDivElement>) => {
        const { className, ...rest } = props;
        return (
            <DropdownMenu.Content
                {...rest}
                className={twMerge('flex flex-col gap-2 bg-white', className)}
                ref={ref}
            />
        );
    }
);

const Item = forwardRef((props: DropdownMenu.DropdownMenuItemProps, ref: Ref<HTMLDivElement>) => {
    const { className, ...rest } = props;
    return (
        <DropdownMenu.Item
            {...rest}
            className={twMerge(
                'min-w-[16rem] bg-white p-2 text-start outline-none hover:bg-black hover:text-white',
                className
            )}
            ref={ref}
        />
    );
});

const Arrow = forwardRef((props: DropdownMenu.DropdownMenuArrowProps, ref: Ref<SVGSVGElement>) => {
    const { className, ...rest } = props;
    return <DropdownMenu.Arrow {...rest} className={twMerge('fill-white', className)} ref={ref} />;
});

export { Root, Trigger, Portal, Content, Item, Arrow };
