import React from 'react';
import '../src/css/Homepage.css'

function Homepage() {
    return ( 
        <div className='main'>
            <p className='title'>
                Create,<br/>
                Support and Browse NFTs<br/>
                All at one place
            </p>
            <a href='/Upload' ><button className='start' >Get Started</button></a>
        </div>
     );
}

export default Homepage;