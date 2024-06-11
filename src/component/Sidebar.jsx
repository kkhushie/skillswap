import React from 'react'
import logo from '../assets/logo.png'
import '../stylesheets/sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar text-white flex flex-col items-center border-r-[1px] border-slate-800 z-10 h-screen w-64 bg-[#0F172A] text-lg'>
      <div className='logo py-2 flex w-full items-center border-b-[1px] border-slate-800 justify-center'>
        <h1 className='py-[2px] text-center font-semibold text-green-500 flex items-center justify-center'><img className=' h-12 w-12' src={logo} /> geeks</h1>
      </div>
      <ul className=' text-gray-500 py-10'>
        <li className=' p-4 text-xl text-green-500'>
          <a href='#' className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" className="h-[24px] w-[24px] stroke-green-500 stroke-2"><path d="M7.333 15.584h7.334M10.1 2.534 3.882 7.369c-.415.324-.623.485-.773.688-.132.179-.231.38-.291.596-.068.242-.068.505-.068 1.032v6.632c0 1.027 0 1.54.2 1.932.176.345.456.626.801.801.392.2.906.2 1.932.2h10.634c1.026 0 1.54 0 1.932-.2.345-.175.625-.456.801-.8.2-.393.2-.906.2-1.933V9.685c0-.527 0-.79-.068-1.032a1.833 1.833 0 0 0-.291-.596c-.15-.203-.358-.364-.773-.688L11.9 2.534c-.322-.25-.483-.376-.66-.424a.917.917 0 0 0-.48 0c-.177.048-.338.173-.66.424Z"></path></svg>
            <span>Feed</span>
          </a></li>
        <li className=' p-4 text-xl'><a href='#' className='flex gap-2 items-center '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" className="h-[22px] w-[22px] stroke-slate-500 stroke-2"><g clip-path="url(#message-chat-square_svg__a)"><path d="m9.166 13.75-2.819 2.855c-.393.398-.59.597-.758.611a.458.458 0 0 1-.386-.158c-.11-.13-.11-.409-.11-.968v-1.43c0-.502-.412-.866-.909-.938a2.75 2.75 0 0 1-2.322-2.323c-.029-.198-.029-.434-.029-.908V6.234c0-1.54 0-2.31.3-2.898a2.75 2.75 0 0 1 1.202-1.202c.588-.3 1.358-.3 2.898-.3h6.783c1.54 0 2.31 0 2.899.3a2.75 2.75 0 0 1 1.202 1.202c.3.588.3 1.358.3 2.898v3.85m0 10.083L15.42 18.78c-.28-.195-.42-.292-.573-.361a1.831 1.831 0 0 0-.424-.133c-.165-.03-.336-.03-.677-.03H12.1c-1.027 0-1.54 0-1.933-.2a1.833 1.833 0 0 1-.8-.802c-.2-.392-.2-.905-.2-1.932v-2.305c0-1.026 0-1.54.2-1.932.175-.345.455-.625.8-.801.393-.2.906-.2 1.933-.2h5.133c1.027 0 1.54 0 1.932.2.345.176.626.456.802.801.2.392.2.906.2 1.932v2.488c0 .855 0 1.282-.14 1.619-.186.449-.543.806-.992.992-.337.14-.764.14-1.619.14v1.911"></path></g><defs><clipPath id="message-chat-square_svg__a"><path fill="#fff" d="M0 0h22v22H0z"></path></clipPath></defs></svg>
          <span>Inbox</span>
        </a>
        </li>
        <li className=' p-4 text-xl hide'><a href='#' className='flex gap-2 items-center '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" className="h-[22px] w-[22px]  stroke-slate-500 dark:stroke-grey-500 stroke-2"><path d="M19.833 16.917V13.41c0-.21 0-.314-.032-.406a.584.584 0 0 0-.134-.218c-.069-.07-.162-.117-.35-.21L14 9.916m-9.333 1.168v7.94c0 .434 0 .651.067.841.06.168.158.32.285.445.145.14.342.23.736.412l7.467 3.422c.286.13.43.196.578.222.132.023.267.023.4 0 .149-.026.292-.091.578-.222l7.466-3.422c.395-.181.592-.272.736-.412.128-.125.226-.277.286-.445.067-.19.067-.407.067-.84v-7.941m-21-1.167 11.25-5.625c.153-.076.23-.115.31-.13a.583.583 0 0 1 .214 0c.08.015.157.054.31.13l11.25 5.625-11.25 5.624c-.153.077-.23.115-.31.13a.585.585 0 0 1-.215 0c-.08-.015-.156-.053-.31-.13L2.333 9.918"></path></svg> <span>Bootcamps</span></a></li>
        <li className=' p-4 text-xl hide'><a href='#' className='flex gap-2 items-center '> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" className="h-[24px] w-[24px] stroke-slate-500 dark:stroke-grey-500 stroke-2"><path stroke="inherit" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.167 7.335a2.06 2.06 0 0 1 4.005.687c0 1.374-2.061 2.061-2.061 2.061m.026 2.75h.01M6.417 16.5v2.14c0 .49 0 .733.1.859.087.11.219.173.358.172.161 0 .352-.152.733-.457l2.187-1.75c.447-.357.67-.536.918-.663.221-.113.456-.195.699-.245.273-.056.56-.056 1.131-.056h2.307c1.54 0 2.31 0 2.899-.3A2.751 2.751 0 0 0 18.95 15c.3-.589.3-1.359.3-2.899V7.15c0-1.54 0-2.31-.3-2.898A2.75 2.75 0 0 0 17.75 3.05c-.589-.3-1.359-.3-2.899-.3h-7.7c-1.54 0-2.31 0-2.898.3A2.75 2.75 0 0 0 3.05 4.252c-.3.588-.3 1.358-.3 2.898v5.683c0 .853 0 1.279.094 1.629a2.75 2.75 0 0 0 1.944 1.944c.35.094.776.094 1.629.094"></path></svg>
          <span>Mentorships</span>
        </a>
        </li>
        <li className=' p-4 text-xl hide'><a href='#' className='flex gap-2 items-center '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" className="h-[22px] w-[22px]  stroke-slate-500 dark:stroke-grey-500 stroke-2"><g clip-path="url(#message-chat-circle_svg__a)"><path d="M5.586 10.294A7.343 7.343 0 0 1 5.5 9.167c0-4.05 3.304-7.333 7.381-7.333s7.382 3.283 7.382 7.333c0 .915-.169 1.791-.477 2.599a2.687 2.687 0 0 0-.11.317.824.824 0 0 0-.022.177c-.002.067.008.14.026.288l.369 2.998c.04.325.06.487.006.605a.458.458 0 0 1-.236.23c-.12.051-.28.028-.604-.02l-2.92-.428c-.153-.022-.229-.033-.298-.033a.826.826 0 0 0-.184.02c-.068.014-.155.046-.328.111a7.496 7.496 0 0 1-3.731.384m-4.759 3.752c2.718 0 4.921-2.257 4.921-5.041 0-2.785-2.203-5.042-4.92-5.042-2.719 0-4.922 2.257-4.922 5.042 0 .56.09 1.098.254 1.6.07.213.104.32.115.392a.781.781 0 0 1 .01.196c-.004.073-.023.156-.06.322l-.56 2.531 2.745-.375c.15-.02.225-.03.29-.03.07 0 .106.004.173.018.065.013.16.046.35.114a4.808 4.808 0 0 0 1.604.273"></path></g><defs><clipPath id="message-chat-circle_svg__a"><path fill="#fff" d="M0 0h22v22H0z"></path></clipPath></defs></svg>
          <span>Sessions</span></a></li>
        <li className=' p-4 text-xl'><a href='#' className='flex gap-2 items-center '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-[22px] w-[22px]  stroke-slate-500 dark:stroke-grey-500 stroke-2" viewBox="0 0 24 24"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
          <span>Roadmaps</span></a></li>
        <li className=' p-4 text-xl'><a href='#' className='flex gap-2 items-center '>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" className="h-[22px] w-[22px]  stroke-slate-500 dark:stroke-grey-500 stroke-2"><path d="m2.462 14.344 1.749-1.01a.458.458 0 0 1 .313-.053l3.442.644a.458.458 0 0 0 .542-.453l-.013-3.015c0-.082.021-.163.063-.234l1.736-2.973a.459.459 0 0 0-.02-.495L7.349 2.593m10.067 1.864c-5.042 2.42-2.292 5.629-1.375 6.087 1.72.86 4.113.917 4.113.917a9.167 9.167 0 1 0-8.697 8.697m3.903-.044-2.903-7.653 7.653 2.903-3.393 1.356-1.357 3.394"></path></svg>
          <span>webinars</span></a></li>
      </ul>
    </div>
  )
}

export default Sidebar