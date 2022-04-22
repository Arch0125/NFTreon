import React from 'react';
import IPFSUploader from './utils/IPFSUploader';
import '../src/css/Uploadpage.css'
import {Row, Col, Container } from 'react-bootstrap';
import { ImageUpload } from 'react-ipfs-uploader';
import Imgupload from './Imgupload';

function Uploadpage() {
    return (
        <div>
            <div className='cont' >
                <label className='title' >Showcase your Artwork</label>
            </div>
            <div className='cont1'>
                <div className='card'>
                    <label>Upload image to IPFS</label>
                    <Imgupload/>
                </div>
                
            </div> 
            <div className='cont1'>
            <a href='/Mint' ><button className='mintbutton'>Mint your NFT</button></a>

            </div>
        </div>
        
     );
}

export default Uploadpage;