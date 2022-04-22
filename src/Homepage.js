import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../src/css/Homepage.css'

function Homepage() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className='main'>
                            <p className='hometitle'>
                                Create,<br/>
                                Support and Browse NFTs<br/>
                                All at one place
                            </p>

                            <div>
                                <a href='/Upload' ><button className='start' >Get Started</button></a>
                                <a href='/Mint' ><button className='start' >Mint your NFT</button></a>
                            </div>

                            
                        </div>
                    </Col>
                    <Col>
                        <img className='illus' src="https://uploads-ssl.webflow.com/60098c5b3e6c5a3d3125082e/60a24499b2d3121e347c7857_design-nft.png" width="100%" />
                    </Col>
                </Row>
            </Container>
        </div>
        
     );
}

export default Homepage;