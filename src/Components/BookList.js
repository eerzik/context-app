import React, { Component } from 'react';

class BookList extends Component {
    render() {
        return (
            <div className='book-list' >
                <ul>
                    <li>Var Mısın</li>
                    <li>Hayvan Çifliği</li>
                    <li>Bir Ömür Nasıl Yaşanır</li>
                </ul>
            </div>
        );
    }
}

export default BookList;