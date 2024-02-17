import React from 'react'
// import banner from '../../public/buton-big-main-logo.jpg'
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

const HomePage = () => {

    const cld = new Cloudinary({ cloud: { cloudName: 'ddvlnojuu' } });

    const myImage = cld.image('docs/big-logo');

    const imageUrl = myImage.toURL();

    return (
        <div>
            <div style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '300px'
            }}
            >
            </div>
            <div>
                <span>Featured Items</span>

            </div>
            <div>
                <div>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default HomePage