import { PropsWithChildren } from 'react';

type CardProps = {
    className?: string;
}

const Card = (props: PropsWithChildren<CardProps>) => {
    return (
        <div className={`${props.className} max-w-sm rounded-md p-1 bg-primary-800 shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-primary-700 hover:shadow-accent-500 `}>
                {props.children}
        </div>
    )
}

export default Card;

