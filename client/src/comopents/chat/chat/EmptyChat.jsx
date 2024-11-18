import empty from '../../../assets/em.png'

export default function EmptyChat() {
  return (
    <div className='bg-[#e1e6e1] w-full h-screen flex justify-center items-center flex-col'>
      <img src={empty} className=' mix-blend-multiply w-96 '/>
      <p className='text-3xl font-normal text-[#415258] mt-5 py-2'>WhatsApp Web <span className=' bg-slate-300 text-sm p-1'>NEW</span></p>
      <p className='text-sm text-gray-500 mt-4'>Now send and receive messages without keeping your phone online.</p>
      <p className='text-sm text-gray-500'>Use WhatsAPp on up to 4 linked devices and 1 phone at the same time</p>
      <div className='border-b-2 border-gray-300 w-[50%] py-5'></div>
      <p className='text-sm text-gray-500 mt-2'>Make Calls from desktop with WhatsApp for Windows. Get ithere</p>
    </div>
  )
}
