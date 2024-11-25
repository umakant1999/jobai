import React from 'react';
import { useLocation } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const { id, name, description, price } = location.state || {}; // Safeguard in case `location.state` is undefined

  console.log(id, name, description, price);

  return (
    <div className='w-full h-full flex justify-center items-center bg-neutral-500'>
      <div className='bg-white rounded-md p-6'>
        <h2 className='text-2xl font-bold'>{name || 'No Name Available'}</h2>
        <p className='text-lg'>{description || 'No Description Available'}</p>
        <p className='text-lg font-bold'>Price: ${price || 'N/A'}</p>
      </div>
    </div>
  );
};

export default Detail;
