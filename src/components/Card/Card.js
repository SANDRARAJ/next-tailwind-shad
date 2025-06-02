import Image from 'next/image';
import React from 'react'
import Assets from '../Layout/CommonLayout/asset';
import Link from 'next/link';

const Card = ({data}) => {
  return (
    <div className='w-full h-full'>
        <figure className='aspect-square relative mb-6'>
            <Image src={data?.img} alt={data?.alt} fill className='object-cover' />
        </figure>
        <h3 className='text-[#50505d] text-2xl font-normal mb-4'>{data?.title}</h3>
        <p className="text-lg mb-4">{data?.content}</p>
        <Link href={'/'} className='text-[#c4ab82] underline hover:text-[#0056b3] underline-offset-2 transition-all duration-300 ease-in-out'>{data?.button_text}</Link>
    </div>
  )
}

export default Card;