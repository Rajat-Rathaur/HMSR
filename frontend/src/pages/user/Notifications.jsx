import React from 'react'

const Notifications = () => {
  return (
    <main className="bg-white w-full flex flex-col relative p-8">
      <div className=" w-full flex justify-center xs:justify-start" >
        <div>
          <header className="hd-p">Notifications</header>
          <span className="text-xs font-medium leading-4 px-1 text-zinc-400">Everything at your fingertips.</span>
        </div>
      </div>
      <div className='mt-10 bg-slate-50 p-4 rounded-lg'>
        <span className='italic text-sm'>Nothing to display as of now </span>
      </div>
    </main>
  )
}

export default Notifications