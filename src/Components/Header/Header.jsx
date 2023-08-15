import React from 'react';

const Header = () => {
    return (
        <div className='bg-slate-200 h-20'>
            <div className='flex justify-between w-10/12 mx-auto items-center p-4'>
            <h1 className='text-5xl font-semibold text-indigo-950'>SI Limon</h1>
            <div className='text-2xl'>
                <a href="/Home">Home</a>
                <a className='mx-8' href="/friends">Friends</a>
                <a href="/posts">Posts</a>
                <a className='mx-8' href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
            </div>
    );
};

export default Header;