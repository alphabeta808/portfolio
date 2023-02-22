import React from 'react';
import '../index.css';
import MyImg from '../images/me.png'


const AboutPage = () => {
  return (
    <div className='bg-[#474745] h-screen w-screen tracking-widest p-20 text-[#ebebdd] font-medium'>
      <div className='profile flex justify-center'>
        <div className='h-28'>
          <div className='picture w-[50%] h-[50%]'>
            <img src={MyImg} alt='MyImg'></img>
          </div>
        </div>
        <div className='border-slate-900 shadow-md shadow-gold p-2 rounded-md w-[70%]'>
          <p>
            Hai, nama saya Alfan maulana, saya adalah seorang Web Developer dan It Enthusias. Saat ini saya memahami beberapa bahasa pemrograman beserta sebagian teknologinya seperti Javascript(ReactJS, NodeJS, ExpressJS), Golang, Python, MaterialUI, TailwindCSS, Bootstrap, GIT dan Github.
          </p>
          <br></br>
          <p>
            Diluar ketertarikan saya terhadap dunia programming saya memiliki hobi bermain futsal(tidak jago) dan membaca buku. Biasanya buku yang saya baca hanya buku-buku dengan kategori tertentu saja seperti buku tentang sejarah islam, novel dan teknologi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage