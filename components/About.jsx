import React from 'react'

export const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#4db1dc]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>
                    I  began my path as a developer at about 2 years ago
                    when I began to study python by my own, in  that time my objective was
                    to understand the language and upgrade my ability to solve problems, time ago I had the opportunity
                    to begin studying a technical career focus on programming, there I learned the basics about PHP, Jquery, CSS and HTML. 
                </p>
                <p className='py-2 text-gray-600'>
                   Since then I have worked in real projects applying those technologies and some more javascript´s stack like
                   React, Angular and Node with Express, that has been accompanied by a hard study and practice what has taken me to a good level.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some project´s I have worked in</p>
            </div>
            <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className="rounded-xl" src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'></img>
            </div>
        </div>

    </div>
  )
}
