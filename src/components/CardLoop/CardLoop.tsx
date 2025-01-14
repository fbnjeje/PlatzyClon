import React from 'react'


interface CardLoopProps {
    img: string
}
function CardLoop({ img }: CardLoopProps) {
    return (
        <section>
            <figure>

                <img src={img} alt={img} width={90} height={90} />
            </figure>
        </section >
    )
}

export default CardLoop
