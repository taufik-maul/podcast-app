import React from 'react';
import {ReactComponent as LogoSvg} from '../../icons/logo.svg';

const Logo = () => {
    return (
        <div className="logo">
            <LogoSvg />
            <h1>Developer Talks</h1>
        </div>
    );
}

export default Logo;
