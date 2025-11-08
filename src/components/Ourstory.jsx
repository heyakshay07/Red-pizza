import React from 'react'
import story from '../assets/ourstory/story.png' ;

const Ourstory = () => {

  return (
    <div className='flex flex-col md:flex-row p-0'>
      <div className='flex-1 p-6 rounded-2xl '>
        <h2 className='text-center font-bold text-4xl pb-5'>Our Story</h2>
        <p className='md:px-[25px]'>Contrary to industry standard strategy, USPizza, since 1996, has been committed to growing our brand slowly and steadily. Every outlet is carefully selected on strict criteria. To be a USPizza franchisee is a privilege unto itself. The same commitment to product and service perfection we practice is expected from our partners.

Our product is standardised across the Nation, supported by a robust supply chain providing all the ingredients required to perfectly craft our Pizza. Our outlets are designed by leading architects to reflect our philosophy of being open and inviting, while putting our customer comfort on priority.

Everywhere we go, we hear ‘Your pizza is the tastiest pizza around, why aren’t you open in my location’. The answer is simple, every outlet opened is a promise to our customer, and not one we take lightly.</p>
      </div>
      <div className=''>
     <div className='w-full h-auto object-cover pb-4 pt-5'><img src={story} alt="Our story" className='rounded-2xl md:h-[408px] ' /></div>
    </div>
    </div>

    
  )
}

export default Ourstory


