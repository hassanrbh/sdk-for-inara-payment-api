import { Base } from "../base";
import { GET_BOOKS_BY_AUTHOR, GET_BOOKS_CONFIG, Book } from "./types";

const resource = "api/v2/books";
const resourceWallet = "api/v2/wallet";
export class Books extends Base {
  getBooks({ limit }: GET_BOOKS_CONFIG): Promise<Book[]> {
    return this.rq(`/${resource}`);
  }

  getBooksByAuthor({ name }: GET_BOOKS_BY_AUTHOR): Promise<Book[]> {
    return this.rq(`/${resource}/search?name=${name}`);
  }

  createBookandGetBalance(book: Book) {
    const quee: { book: any; balance: any } = {
      book: undefined,
      balance: undefined,
    };

    const createBook = this.rq(`/${resource}`, {
      method: "POST",
      body: JSON.stringify({
        book: {
          title: book.title,
          price: book.price,
          reference_number: book.reference_number,
          summary: book.summary,
          published: book.published,
          slug: book.slug,
          status: book.status,
          book_image: book.book_image,
          epub: book.epub,
          isbn: book.isbn,
        },
      }),
    });

    const get_balance = this.rq(`/${resourceWallet}`);
    createBook.then((res) => {
      quee.book = res;
    });
    get_balance.then((res) => {
      quee.balance = res;
    });
    return quee;
  }
}
