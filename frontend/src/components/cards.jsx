import React from 'react'

function cards({item}) {
  return (
   <>
    <div className='mt-4'>
        <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline px-4 py-2 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
  Buy Now
</div>
    </div>
  </div>
</div>
    </div>
   </>
  )
}

export default cards
