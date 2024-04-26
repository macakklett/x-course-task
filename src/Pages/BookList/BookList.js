import { React, useContext } from 'react';
import { BooksContext } from '../../context/use-books';
import { Link } from 'react-router-dom';

import './BookList.css'

export default function BookList() {
  console.log("render BookList");
  const books = useContext(BooksContext);
  

  return (
    <div className='main_book_list'>
        {books.map((book) => {
        return (
          <Link key={book.id} to={`/booklist/${book.id}`}>
            <li>
              <div>{book.author}</div>
              <div>{book.price}</div>
              <div>{book.shortDescription}</div>
            </li>
          </Link>
        )
      })}
    </div>
  )
}
