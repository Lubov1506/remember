import React from 'react';

const ImageWrapper = (props) => {
    const {children, width, height, ...restProps} = props
    const inlineStyles={
        width,
        height,
        boxSizing: ''
    }
    console.log(restProps);
    return (
        <div style={inlineStyles} {...restProps}>
            {children}
        </div>
    );
}

export default ImageWrapper;
