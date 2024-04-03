import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BooksContext } from '../../context/use-books';
import { useCart } from '../../hook/useCart';

import imageAlternative from './imageNotFound.png';

const SpecificBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [count, setCount] = useState(1);
  const books = useContext(BooksContext);
  const { booksCart, addBooksToCart } = useCart();

  useEffect(() => {
    const result = books.find(el => parseInt(el.id) === parseInt(id));
    setBook(result);
  }, [id, books]);

  const addedToCart = booksCart.filter(el => parseInt(el.id) === parseInt(id));

  const handleAdd = () => {
    if (count > 0) {
      addBooksToCart(id, count);
      setCount(0);
    }
  };

  const handleCountChange = value => {
    const newCount = Number(value);
    if (!isNaN(newCount) && newCount >= 0 ) {
      if(newCount > book.amount) {
        setCount(Number(book.amount)); 
      } else{
        setCount(newCount);
      }
    }
  };

  return (
    <div>
      {book && (
        <>
          <img src={book.image || imageAlternative} alt="Book's look title" />
          <div>{book.title}</div>
          {addedToCart.length === 0 ? (
            <>
              <button
                onClick={() => handleCountChange(count - 1)}
                disabled={count <= 0}
              >
                -
              </button>
              <input
                type="text"
                value={count}
                onChange={e => handleCountChange(e.target.value)}
              />
              <button
                onClick={() => handleCountChange(count + 1)}
                disabled={count >= book.amount}
              >
                +
              </button>
              <button onClick={handleAdd}>Add to Cart</button>
            </>
          ) : (
            <>
              The book added to cart already!!!
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SpecificBook;
