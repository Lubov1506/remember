import React from 'react';

const ImageWrapper = (props) => {
    const {children, width, height, ...restprops} = props
    const inlineStyles={
        width,
        height,
        boxSizing: ''
    }
    console.log(restprops);
    return (
        <div style={inlineStyles} {...restprops}>
            {children}
        </div>
    );
}

export default ImageWrapper;
