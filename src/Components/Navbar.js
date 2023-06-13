
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

//Fonksiyonel component
const Navbar = () => {

    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const { isLightTheme, dark, light } =useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <nav style={{ background: theme.ui, color: theme.syntax }} >
            <h1>AOS App</h1>
            <div onClick={toggleAuth} >
                {isAuthenticated ? "Çıkış Yap" : "Giriş Yap"}
            </div>
            <ul>
                <li>Anasayfa</li>
                <li>Hakkımızda</li>
                <li>İletişim</li>
            </ul>
        </nav>
    )
}

export default Navbar






// import React, { Component } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';

// class Navbar extends Component {



//     render() {
//         return (
//             <ThemeContext.Consumer>{(context) => {
//                 //  console.log(this.context);

//                 const { isLightTheme, dark, light } = context;
//                 const theme = isLightTheme ? light : dark;

//                 return (
//                     <nav style={{ background: theme.ui, color: theme.syntax }} >
//                         <h1>AOS App</h1>
//                         <ul>
//                             <li>Anasayfa</li>
//                             <li>Hakkımızda</li>
//                             <li>İletişim</li>
//                         </ul>
//                     </nav>
//                 )
//             }}
//             </ThemeContext.Consumer>

//         )

//     }
// }
// export default Navbar;