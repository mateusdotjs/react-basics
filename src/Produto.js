import React from 'react'

const Produto = ({nome, propriedades}) => {
  return (
    <div style={{border: '1px solid black', padding: '1rem 3rem', margin: '1rem'}}>
        <p>{nome}</p>
        <ul>
            {propriedades.map(propriedade => <li>{propriedade}</li>)}
        </ul>
    </div>
  )
}

export default Produto