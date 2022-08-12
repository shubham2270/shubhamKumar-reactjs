import React from "react";

const ProductCard = ({}) => {
  return (
    <div className='w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <a href='#'>
        <img
          className='p-8 rounded-t-lg'
          src='/docs/images/products/apple-watch.png'
          alt='product image'
        ></img>
      </a>
      <div className='lg:px-5 lg:pb-5 px-3 pb-3'>
        <a href='#'>
          <h5 className='text-l lg:text-xl lg:font-semibold tracking-tight text-gray-900 dark:text-white'>
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>

        <div className='flex justify-between items-center'>
          <span className='text-2xl lg:text-3xl  font-bold text-gray-900 dark:text-white'>
            $599
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
