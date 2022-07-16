import React from 'react';
import './Points.css';

const Points = () => {
  return (
    <div className='points-container'>
        <div className='text'>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus id odio hendrerit commodo quis a orci</p>
        </div>

        <div className='points-block'>
            <div className='imp-points'>
                <div className='points'>
                    <div className='circle'>
                        <h1>1</h1>
                    </div>
                    <h2>Lorem ipsum dolar</h2>
                </div>
                <div className='points'>
                    <div className='circle'>
                        <h1>2</h1>
                    </div>
                    <h2>Lorem ipsum dolar</h2>
                </div>
                <div className='points'>
                    <div className='circle'>
                        <h1>3</h1>
                    </div>
                    <h2>Lorem ipsum dolar</h2>
                </div>
            </div>

            <div className='imp-points'>
                <div className='points'>
                    <div className='circle'>
                        <h1>4</h1>
                    </div>
                    <h2>Lorem ipsum dolar</h2>
                </div>
                <div className='points'>
                    <div className='circle'>
                        <h1>5</h1>
                    </div>
                    <h2>Lorem ipsum dolar</h2>
                </div>
                <div className='points'>
                    <div className='circle'>
                        <h1>6</h1>
                    </div>
                    <h2>Lorem ipsum dolar</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Points;