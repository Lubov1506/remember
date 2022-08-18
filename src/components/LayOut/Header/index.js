import React from 'react';

const Header = (props) => {
    const inlineStyles={
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'azure',
        alignItems: 'center'
    }
    return (
        <header style={inlineStyles}>
            <img style={{width: '100px', }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png' alt='facebook'/>
{props.children}
        </header>
    );
}

export default Header;
