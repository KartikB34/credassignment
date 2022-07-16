import React from 'react';
import Form from '../Form/Form';
import './Landing.css';

const Landing = () => {
  return (
    <div className='landing-page'>
        <div className='landing-page_left'>

            <div className='landing-page_left_text'>
              <h1> Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non ipsum pellentesque, vehicula purus</h2>
            </div>

            <div className='landing-page_left_box'>

                <div className='above-border'>
                    <h2>WHAT WE OFFER</h2>
                </div>
                
                <div className='ul-list'>
                    <ul>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor</li>
                    </ul>
                </div>
                
            </div>

        </div>

        <div className='landing-page_right'>
            <Form />
        </div>
    </div>
  )
}

export default Landing