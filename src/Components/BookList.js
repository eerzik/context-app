import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
class BookList extends Component {

    static contextType = ThemeContext;

    render() {
        const { isLightTheme, dark, light } = this.context;
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
}

export default BookList;