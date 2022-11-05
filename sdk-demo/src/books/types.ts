export declare type GET_BOOKS_CONFIG = {
  limit?: number;
};
export declare type GET_BOOKS_BY_AUTHOR = {
  name: string;
};

export declare type Book = {
  title: string;
  reference_number: string;
  published: boolean;
  book_image: string;
  slug: string;
  summary: string;
  active: boolean;
  isbn: string;
  epub: string;
  author_cut: string;
  keywords: string;
  price: string;
  status: string;
};
