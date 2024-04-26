import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import Signin from './Pages/Signin/Signin';
import BookList from './Pages/BookList/BookList';
import SpecificBook from './Pages/SpecificBook/SpecificBook'
import Cart from './Pages/Cart/Cart';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import RequireAuth from './hoc/RequireAuth';
import { AuthProvider } from './context/AuthProvider';
import { CartProvider } from './context/CartProvider';
import { BooksContext } from './context/use-books';

import dataBooks from './data/books.json';

import './App.css';



function App() {
 
  console.log("render app");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(dataBooks.books);
  }, [books]);
  
  return ( 
    <div className='app'>
      <BooksContext.Provider value={books}>
      <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path='/x-course-task' element={<Navigate to='/' replace />} />
          <Route path='/' element={<Layout />}>
            <Route index element={<Signin />}></Route>
            <Route path='booklist' element={
                <RequireAuth><BookList /></RequireAuth>}>
            </Route>
            <Route path='booklist/:id' element={
                <RequireAuth><SpecificBook /></RequireAuth>}>
            </Route>
            <Route path='cart' element={
                <RequireAuth><Cart /></RequireAuth>}>
            </Route>
            <Route path='*' element={<ErrorPage />}></Route>
          </Route>
          
        </Routes>
      </CartProvider>
      </AuthProvider>
      </BooksContext.Provider>
    </div>
  );
}

export default App;