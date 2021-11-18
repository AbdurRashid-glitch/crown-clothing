import React from 'react'
import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='Title'>Hats</h1>
                        <span className='sub-title'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='Title'>JACKETS</h1>
                        <span className='sub-title'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='Title'>SNEAKERS</h1>
                        <span className='sub-title'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='Title'>WOMEN</h1>
                        <span className='sub-title'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='Title'>MENS</h1>
                        <span className='sub-title'>Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;