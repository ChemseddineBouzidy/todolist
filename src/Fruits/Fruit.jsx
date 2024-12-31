import React from 'react'

function Fruit({ Fruits }) {
    const displayFruits = () => Fruits.map(function (Fruits) {
        return <li>{Fruits}</li>
    })
    return (
        <>
            <h1 className='title'>Fruits</h1>
            <ul>
                {displayFruits()}
            </ul>

        </>
    )
}

export default Fruit
