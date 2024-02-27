import React from 'react';
import { TikTokIcon } from './icons/tiktok';
import { TrashIcon } from './icons/trash';

export default function SocialNetworkRegistration() {
    return (
        <>
            <div className='flex gap-4 flex-col w-full'>
                <div className='flex gap-4  w-full'>
                    <div className='bg-[#222222] w-10 h-10 flex items-center justify-center rounded-md my-auto'>
                        <TikTokIcon />
                    </div>
                    <div className='flex gap-2 flex-col  w-full'>
                        <p>Url</p>
                        <div className='flex items-center justify-center border border-neutral-300 py-2 px-3 rounded-md '>
                            <p className='text-neutral-300'>https://www.tiktok.com/</p>
                            <input type="text" placeholder='@firstname' className='text-neutral-800 placeholder-text-neutral-300 outline-none w-full' />
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <label htmlFor="toggle" className='inline-flex items-center cursor-pointer relative outline-none'>
                            <input type="checkbox" id="toggle" className='peer sr-only outline-none' />
                            <div className='peer-checked:bg-[#0F172A] bg-[#E2E8F0] cursor-pointer transition-all w-11 h-6  rounded-xl peer-focus:outline-none peer-focus:ring-[#0F172A]' />
                            <span className='absolute w-5 h-5  top-[2px] left-1 transition-all rounded-full z-10 peer-checked:left-5 bg-[#FFFFFF] shadow-md' />
                        </label>
                        <p className='text-neutral-300'>Visibilidade</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TrashIcon />
                        <p className='text-neutral-300'>Visibilidade</p>
                    </div>

                </div>
            </div>
        </>
    );
}
