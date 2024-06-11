import React from 'react'
import '../stylesheets/feed.css'
import CreatePost from './CreatePost'

const Feed = () => {
  return (
    <div className='feed overflow-auto z-50 text-white h-full w-1/2 p-8'>
      <CreatePost />
      <div className='top'>
        <h4 className=' text-2xl pt-3' >Feed Stay Informed and Inspired</h4>
        <p className=' text-zinc-700 text-sm'>Explore, engage, and discover a world of knowledge and inspiration in our feed.</p>
      </div>
      <div className='mt-4 posts-container flex flex-col gap-5 pb-20'>
        <div className='post p-3 border-[1px] border-slate-800 rounded-lg'>
          <div className='header flex justify-between items-center'>
            <div className='flex gap-2 left'>
              <div className='profile h-12 w-12 rounded-full overflow-hidden object-cover'><img alt='profile' src='https://imgv3.fotor.com/images/gallery/3D-Female-Profile-Picture.jpg' /></div>
              <div className='flex flex-col'><h4>Khushie Pal</h4><p className=' text-zinc-600'>18 minutes ago</p></div>
            </div>
            <h3>view</h3>
          </div>
          <p className='  py-5'>I am in a confusion right now , I have 2 years of experience in wipro support project , Currently I am on notice period.</p>
          <div className='tags pb-4 flex gap-2'>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>java</span>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>c++</span>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>python</span>
          </div>
          <div className='border-t-[1px] border-t-zinc-800 pt-2 reactions flex justify-between'>
            <div className='left flex gap-3'>
              <h4>0 Likes</h4>
              <h4>0 Comments</h4>
            </div>
            <h4>share</h4>
          </div>
        </div>
        <div className='post p-3 border-[1px] border-slate-800 rounded-lg'>
          <div className='header flex justify-between items-center'>
            <div className='flex gap-2 left'>
              <div className=' h-12 w-12 rounded-full overflow-hidden object-cover'><img alt='profile' src='https://imgv3.fotor.com/images/gallery/3D-Female-Profile-Picture.jpg' /></div>
              <div className='flex flex-col'><h4>Khushie Pal</h4><p className=' text-zinc-600'>18 minutes ago</p></div>
            </div>
            <h3>view</h3>
          </div>
          <p className='  py-5'>I am in a confusion right now , I have 2 years of experience in wipro support project , Currently I am on notice period.</p>
          <div className='tags pb-4 flex gap-2'>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>java</span>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>c++</span>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>python</span>
          </div>
          <div className='border-t-[1px] border-t-zinc-800 pt-2 reactions flex justify-between'>
            <div className='left flex gap-3'>
              <h4>0 Likes</h4>
              <h4>0 Comments</h4>
            </div>
            <h4>share</h4>
          </div>
        </div>
        <div className='post p-3 border-[1px] border-slate-800 rounded-lg'>
          <div className='header flex justify-between items-center'>
            <div className='flex gap-2 left'>
              <div className=' h-12 w-12 rounded-full overflow-hidden object-cover'><img alt='profile' src='https://imgv3.fotor.com/images/gallery/3D-Female-Profile-Picture.jpg' /></div>
              <div className='flex flex-col'><h4>Khushie Pal</h4><p className=' text-zinc-600'>18 minutes ago</p></div>
            </div>
            <h3>view</h3>
          </div>
          <p className='  py-5'>I am in a confusion right now , I have 2 years of experience in wipro support project , Currently I am on notice period.</p>
          <div className='tags pb-4 flex gap-2'>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>java</span>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>c++</span>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>python</span>
          </div>
          <div className='border-t-[1px] border-t-zinc-800 pt-2 reactions flex justify-between'>
            <div className='left flex gap-3'>
              <h4>0 Likes</h4>
              <h4>0 Comments</h4>
            </div>
            <h4>share</h4>
          </div>
        </div>
        <div className='post p-3 border-[1px] border-slate-800 rounded-lg'>
          <div className='header flex justify-between items-center'>
            <div className='flex gap-2 left'>
              <div className=' h-12 w-12 rounded-full overflow-hidden object-cover'><img alt='profile' src='https://imgv3.fotor.com/images/gallery/3D-Female-Profile-Picture.jpg' /></div>
              <div className='flex flex-col'><h4>Khushie Pal</h4><p className=' text-zinc-600'>18 minutes ago</p></div>
            </div>
            <h3>view</h3>
          </div>
          <p className='  py-5'>I am in a confusion right now , I have 2 years of experience in wipro support project , Currently I am on notice period.</p>
          <div className='tags pb-4 flex gap-2'>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>java</span>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>c++</span>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>python</span>
          </div>
          <div className='border-t-[1px] border-t-zinc-800 pt-2 reactions flex justify-between'>
            <div className='left flex gap-3'>
              <h4>0 Likes</h4>
              <h4>0 Comments</h4>
            </div>
            <h4>share</h4>
          </div>
        </div>
        <div className='post p-3 border-[1px] border-slate-800 rounded-lg'>
          <div className='header flex justify-between items-center'>
            <div className='flex gap-2 left'>
              <div className=' h-12 w-12 rounded-full overflow-hidden object-cover'><img alt='profile' src='https://imgv3.fotor.com/images/gallery/3D-Female-Profile-Picture.jpg' /></div>
              <div className='flex flex-col'><h4>Khushie Pal</h4><p className=' text-zinc-600'>18 minutes ago</p></div>
            </div>
            <h3>view</h3>
          </div>
          <p className='  py-5'>I am in a confusion right now , I have 2 years of experience in wipro support project , Currently I am on notice period.</p>
          <div className='tags pb-4 flex gap-2'>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>java</span>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>c++</span>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>python</span>
          </div>
          <div className='border-t-[1px] border-t-zinc-800 pt-2 reactions flex justify-between'>
            <div className='left flex gap-3'>
              <h4>0 Likes</h4>
              <h4>0 Comments</h4>
            </div>
            <h4>share</h4>
          </div>
        </div>
        <div className='post p-3 border-[1px] border-slate-800 rounded-lg'>
          <div className='header flex justify-between items-center'>
            <div className='flex gap-2 left'>
              <div className=' h-12 w-12 rounded-full overflow-hidden object-cover'><img alt='profile' src='https://imgv3.fotor.com/images/gallery/3D-Female-Profile-Picture.jpg' /></div>
              <div className='flex flex-col'><h4>Khushie Pal</h4><p className=' text-zinc-600'>18 minutes ago</p></div>
            </div>
            <h3>view</h3>
          </div>
          <p className='  py-5'>I am in a confusion right now , I have 2 years of experience in wipro support project , Currently I am on notice period.</p>
          <div className='tags pb-4 flex gap-2'>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>java</span>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>c++</span>
            <span className=' bg-green-500 px-3 py-1 rounded-2xl text-black'>python</span>
          </div>
          <div className='border-t-[1px] border-t-zinc-800 pt-2 reactions flex justify-between'>
            <div className='left flex gap-3'>
              <h4>0 Likes</h4>
              <h4>0 Comments</h4>
            </div>
            <h4>share</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed