import React from 'react';
import activa from '../../Assets/activa.png';
import './About.css'

const About = () => {
  return (
    <div className='about-page'>
        <div className='text-portion'>
            <div className='text-div-one'>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                <p>Aliquam leo nisl, lobortis sit amet ante gravida, tempor venenatis quam. Donec lobortis est arcu, non fermentum quam porta id. Pellentesque</p>
            </div>
            <div className='text-div-two'>
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt sodales elementum. Morbi at ullamcorper odio. Sed bibendum pulvinar fringilla. Aliquam leo nisl, lobortis sit amet ante gravida, tempor venenatis quam. Donec lobortis est arcu, non fermentum quam porta id. Pellentesque iaculis at massa non placerat</p>
                <p>Vestibulum in nisi non nibh viverra euismod. Sed non nisi hendrerit, ultricies nunc finibus, vulputate sapien. Donec maximus vitae sem nec sollicitudin. Duis elit purus, ullamcorper ut tristique eget, dictum sed diam. Cras sit amet elementum risus. Proin non orci ut mauris congue.</p>
            </div>
        </div>
        <div className='image-div'>
            <img src={activa} alt='activa' />
        </div>
    </div>
  )
}

export default About;