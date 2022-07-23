import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
Navigation.propTypes = {
    menuList: PropTypes.array.isRequired,
    menuItem: PropTypes.object.isRequired,
};

function Navigation(props) {
    const logoHome = "https://cdnimg.vietnamplus.vn/uploaded/bojoka/2020_07_15/spotify.jpg";
    const menuList = [
        {
            id: 1,
            title: 'ABOUT US'
        },
        {
            id: 1,
            title: 'PRODUCT'
        },
        {
            id: 1,
            title: 'POLICY'
        },
        {
            id: 1,
            title: 'BRAND'
        },
    ]
    return (
        <div className='nav'>
            <div className="nav-menu">
                <div className="nav-logo">
                    <img src={logoHome} alt="" />
                </div>
                <ul className='nav-list'>
                    {menuList.map(menuItem => (
                        <li key={menuItem.id}>
                            <a href="">{menuItem.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navigation;