import React from 'react'
import ImagesList from '../data/ImagesList'
import '../index.css'

const CertificatePage = () => {
  return (
    <div className='bg-[#474745] h-screen w-screen tracking-widest p-20 text-[#ebebdd] font-medium'>
      <div className='flex flex-row'>
        <div className="grid grid-cols-5 gap-5">
            <ImagesList />
        </div>
        {/* <div className='button flex'>
          <div className="left">Left</div>
          <div className="right">Right</div>
        </div> */}
      </div>
    </div>
  )
}

export default CertificatePage