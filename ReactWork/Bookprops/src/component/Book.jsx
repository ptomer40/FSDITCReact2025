import React from 'react';
import './book.css';

function Book({book}) {
  return (
    <div className='card'>
   <img src={book.img} height={200} width={200} alt='physics' />   
    <h2>{book.title}</h2>
    <h3>{book.price}</h3>
    <button>Add to Cart</button>
    </div>
  )
}

export default Book