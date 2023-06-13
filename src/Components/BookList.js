import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';



const BookList =()=> {

        const { isLightTheme, dark, light } = useContext(ThemeContext)
        const theme = isLightTheme ? light : dark;

        return (
            
            <div className='book-list' style={{background:theme.bg,color:theme.syntax}} >
                <ul>
                    <li style={{background:theme.ui}} >Var Mısın</li>
                    <li style={{background:theme.ui}}>Hayvan Çifliği</li>
                    <li style={{background:theme.ui}}>Bir Ömür Nasıl Yaşanır</li>
                </ul>
            </div>
        );

}

export default BookList;