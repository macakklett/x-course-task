import { useCart } from "../../hook/useCart";

const Cart = () => {
  const {booksCart, purchase} = useCart();

  return (
    <>
      {booksCart.length !== 0 ? 
      (<>
      <button onClick={() => purchase()}>Purchase</button>
        {booksCart.map((book, index) => { return (<div key={index}>
          <div>Title: {book.title}</div>
          <div>Count: {book.count}</div>
          <div>Total: {book.total}</div>
        </div>)
        })}
      </>) : 
      (<>Empty Cart</>)}
    </>
  )
}
export default Cart;