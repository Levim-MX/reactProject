import React, { useState } from 'react';
import './ServicesContent.css'
import './app.css'

function ServicesContent(){

    return(
    <section className='Services' id='Services'>
           {/* heading */}
        <div className='heading'>
        <h1> خدمات الصيانة </h1>
        <p></p>

        </div>
       
      
        
        
        {/* serverice continar  */}

          <div className='serverice-continar' id='serverice-continar'>
                      {/* card 1 */}
                  <div className='box'>
                    <img src="/images/part1.png" alt="" />
                    <span>150$</span>
                      <button className='btn' id='btn'> صيانة المحرك </button>
                  </div>

                       {/* card 2 */}
                       <div className='box'>
                    <img src="/images/part2.png" alt="" />
                    <span>25$</span>
                    
                      <button className='btn' id='btn'> صيانة بستم المحرك  </button>
                      <span>45$</span>

                      <button className='btn' id='btn'> تبديل بستم المحرك  </button>
                  </div>

                       {/* card 3 */}
                       <div className='box'>
                    <img src="/images/part6.png" alt="" />
                    <span>30$</span>
                      <button className='btn' id='btn'> صيانة الأطارات </button>
                  </div>

                       {/* card 4 */}
                       <div className='box'>
                    <img src="/images/CarOil.png" alt="" />
                    <span>100$</span>
                      <button className='btn' id='btn'> تبديل زيت السيارة  </button>
                  </div>  

                   {/* card 5 */}
                  <div className='box'>
                    <img src="/images/part1.png" alt="" />
                    <span>100$</span>
                      <button className='btn' id='btn'> صيانة المحرك </button>
                  </div> 
                  
                     {/* card 6 */}
                  <div className='box'>
                    <img src="/images/CarWashing.png" alt="" />
                    <span>60$</span>
                      <button className='btn' id='btn'>  غسل وتنطيف السيارة </button>
                  </div>

          </div>
        
    </section>

    );
}
export default ServicesContent