import React from 'react';
import {
   FaDribbbleSquare,
   FaFacebookSquare,
   FaGithubSquare,
   FaInstagram,
   FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
       <div>
       <h1 className='w-full text-3xl font-bold text-[#00df9a] '>REACT.</h1>
         <p className='py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
           <div className='flex justify-between md:w-[75%] my-6'>
              <FaFacebookSquare size={30}   />
              <FaInstagram size={30}  />
              <FaGithubSquare size={30} />
              <FaDribbbleSquare size={30} />
              <FaTwitterSquare size={30} />
           </div>
        </div>
 

        <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'><button>Analytics </button></li>
            <li className='py-2 text-sm'><button>Marketing </button></li>
            <li className='py-2 text-sm'><button>Commerce </button></li>
            <li className='py-2 text-sm'><button>Insights </button></li>
        </ul>
        </div>
        
        <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'><button>Pricing </button></li>
            <li className='py-2 text-sm'><button>Documentation </button></li>
            <li className='py-2 text-sm'><button>Guides </button></li>
            <li className='py-2 text-sm'><button>API Status </button></li>
        </ul>
        </div>
        
        <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'><button>About </button></li>
            <li className='py-2 text-sm'><button>Blogs </button></li>
            <li className='py-2 text-sm'><button>Jobs </button></li>
            <li className='py-2 text-sm'><button>Carrers </button></li>
        </ul>
        </div>
        </div>
    </div>
    
  )
}

export default Footer