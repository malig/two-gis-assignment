import { Book } from '../components/BookListItem/BookListItem';

export const filterBooks = (books: Book[], filterTags:string[], limit: number): Book[] => {
    if (!filterTags.length) {
        return books;
    }

    const filteredBooks: Book[] = [];

    for (let book of books) {
        if (filterTags.every(tag => book.tags.includes(tag))) {
            filteredBooks.push(book);
        }

        if (filteredBooks.length === limit) {
            break;
        }
    }

    return filteredBooks;
}
