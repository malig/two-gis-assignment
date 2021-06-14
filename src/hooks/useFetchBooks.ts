import { useEffect, useState } from 'react';
import { Book } from '../components/BookListItem/BookListItem';

const url = {
    big: 'https://raw.githubusercontent.com/malig/two-gis-assignment/master/data/30000-items.json',
    norm: 'https://raw.githubusercontent.com/malig/two-gis-assignment/master/data/10-items.json'
}

type FetchBooks = () => {
    books: Book[] | null,
}

export const useFetchBooks: FetchBooks = () => {
    const [books, setBooks] = useState<Book[] | null>(null);

    useEffect(() => {
        fetch(url.big)
            .then((resp) => resp.json())
            .then((books) => setBooks(books.items));
    }, []);

    return { books }
}
