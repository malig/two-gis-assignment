import { TabId } from '../consts';

type BookId = string;
type BookHash = Record<BookId, TabId>;

export const loadBookHash = (): BookHash => {
  const emptyBookHash = {};

  try {
    const bookHash = localStorage.getItem('hash');

    if (bookHash === null) {
      return emptyBookHash;
    }

    return JSON.parse(bookHash);
  } catch (err) {
    return emptyBookHash;
  }
};

export const saveBookHash = (bookHash: BookHash) => {
  try {
    localStorage.setItem('hash', JSON.stringify(bookHash));
  } catch {}
};
