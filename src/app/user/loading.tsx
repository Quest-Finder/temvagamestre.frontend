export default function Loading() {
  return (
    <div className='flex h-screen flex-col items-center	justify-center'>
      <div className='flex place-items-center gap-2 rounded-md bg-black px-2 py-4'>
        <svg
          className='h-5 w-5 animate-spin'
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          fill='#fff5f5'
          viewBox='0 0 256 256'
        >
          <path d='M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z' />
        </svg>
        <p className='text-white'>carregando...</p>
      </div>
    </div>
  )
}
