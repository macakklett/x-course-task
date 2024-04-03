import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BooksContext } from "./use-books";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
    const books = useContext(BooksContext);
    const [booksCart, setBooksCart] = useState([]);

    const addBooksToCart = (id, count) => {
        const result = books.find(el => parseInt(el.id) === parseInt(id));
        const total = result.price * count;
        const list = [{id, title: result.title, count, total}, ...booksCart];
        setBooksCart(list);
        navigate('/cart', {replace: true});
    }

    const purchase = () => {
        // POST QUERY
        setBooksCart([]);
    }

    const value = {booksCart, addBooksToCart, purchase};

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}