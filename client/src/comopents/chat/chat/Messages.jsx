import bg from '../../../assets/mgsbg.png';
import Footer from './Footer';

export default function Messages() {
  return (
    <div
      style={{
        backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${bg})`, // Set background image
        backgroundSize: 'cover',         // Ensure it covers the entire div
        backgroundPosition: 'center',   // Center the image
        height: '100vh',                // Full viewport height
        width: '100%',                  // Full width
      }}
      className=' overflow-y-scroll mb-4'
    >
      <div className='px-4 h-[78vh]'>
        message
        
      </div>
      <Footer/>
    </div>
  );
}
