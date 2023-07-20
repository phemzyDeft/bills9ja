import React from 'react'

const Loader = () => {
  return (
    <div className="loader">
        <img src='/images/logo.png' alt='bills9ja-loader'/>
        <div className='mt-2'>
            <div class="spinner-grow text-danger mx-1" role="status">
            </div>
            <div class="spinner-grow text-danger mx-1" role="status">
            </div>
            <div class="spinner-grow text-danger mx-1" role="status">
            </div>
        </div>
    </div>
  )
}

export default Loader