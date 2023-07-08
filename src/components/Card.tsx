
type CardProps = {
    className?: string;
    children?: React.ReactNode;
}

const Card = (props: CardProps) => {
    return (
        <div className={`${props.className} `}>
                {props.children}
        </div>
    )
}

export default Card;