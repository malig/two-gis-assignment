import React from 'react';
import { Router } from './Router';
import { BookPage } from '../../pages/BookPage/BookPage';
import { useFetchBooks } from '../../hooks/useFetchBooks';

import './App.css';

export const App = () => {
    const { books } = useFetchBooks();

    return (
        <div className='app'>
            {
                !books ? null :
                    <Router>
                        {(props) => <BookPage {...props} books={books} />}
                    </Router>
            }
        </div>
    );
}
