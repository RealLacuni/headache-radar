import { PropsWithChildren } from 'react';

type CardProps = {
    className?: string;
    id?: string;
}

const Card = (props: PropsWithChildren<CardProps>) => {
    return (
        <div className={`flex flex-col font-inter gap-4 rounded-md p-6 bg-gray-800 shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-primary-950 border-black border-opacity-25 border-2 ${props.className} `}>
                {props.children}
        </div>
    )
}

export default Card;
