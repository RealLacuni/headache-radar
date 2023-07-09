import { PropsWithChildren } from 'react';

type CardProps = {
    className?: string;
    id?: string;
}

const Card = (props: PropsWithChildren<CardProps>) => {
    return (
        <div className={`${props.className} flex max-w-sm rounded-md h-40 p-2 lg:items-center bg-primary-[850] shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-primary-950 hover:shadow-accent-500 border-black border-opacity-25 border-2`}>
                {props.children}
        </div>
    )
}

export default Card;

