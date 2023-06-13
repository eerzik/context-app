
import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {

    static contextType = ThemeContext;

    render() {

        //  console.log(this.context);

        const { isLightTheme, dark, light } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <nav style={{background:theme.ui,color:theme.syntax}} >
                <h1>AOS App</h1>
                <ul>
                    <li>Anasayfa</li>
                    <li>Hakkımızda</li>
                    <li>İletişim</li>
                </ul>
            </nav>
        )
    }
}
export default Navbar;