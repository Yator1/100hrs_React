import React from 'react'

function MenuItem({img, title, desc, price}) {
  return (
    <article>
        <img src={img} alt={title} className='img' />
        <div className='item-info'>
            <header>
                <h5>{title}</h5>
                <h4 className='item-price'>${price}</h4>
            </header>
            <p className='item-text'>{desc}</p>``
        </div>
    </article>
  )
}

export default MenuItem