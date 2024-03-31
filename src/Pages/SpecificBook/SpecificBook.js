import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BooksContext } from '../../context/use-books';
import { useCart } from '../../hook/useCart';

import imageAlternative from './imageNotFound.png'

const SpecificBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [count, setCount] = useState(1);
  const books = useContext(BooksContext);
  const { addBooksToCart } = useCart();

  useEffect(() => {
    const result = books.find(el => parseInt(el.id) === parseInt(id));
    setBook(result);
  }, [id, books]);

  const handleAdd = () => {
    addBooksToCart(id, count);
    setCount(0);
  }

  return (
    <div>
      {book && (
        <>
          <img src={book.image || imageAlternative} alt='Book`s look title'/>
          <div>{book.title}</div>
          {/* <div>{book.author}</div>
          <div>{book.level}</div>
          <div>Tags:{book.tags && book.tags.map((tag, index) => <div key={index}>{tag}</div>)}</div>
          <div>{book.description}</div> */}
          <button onClick={() => setCount((number) => number - 1)}>-</button>
          <input type='text' value={count} onChange={(e) => setCount(Number(e.target.value))} />
          <button onClick={() => setCount((number) => number + 1)}>+</button>
          <button onClick={handleAdd}>Add to Cart</button>
        </>
      )}
    </div>
  );
};

export default SpecificBook;
