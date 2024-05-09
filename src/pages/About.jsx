import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className='bg-gray-800 min-h-screen w-full'>
        <Navbar/>
        <div >
        <h1 className='text-amber-400 font-bold text-2xl ml-9 mt-4'>About</h1>
        <p className='text-white ml-9 mt-4'>
        Aplikasi ini dibuat untuk memenuhi tugas UTS mata kuliah praktikum sistem multimedia.
        Aplikasi ini dirancang untuk membantu pengguna dalam mengolah dan memodifikasi media gambar dan audio.
        Aplikasi ini dibuat Oleh Muhamad Iqbal fauzi 1217050085, UIN Sunan Gunung Djati Bandung
        </p>
        </div>
        
    </div>
  )
}

export default About