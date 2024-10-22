import { Header } from "./components/Header";
import { Guitarra } from "./components/Guitarra";

import { useCart } from "./hooks/useCart";

export const App = () => {
  const {
    data,
    cart,
    addToCart,
    removeGuitarra,
    addItemCart,
    removeItemCart,
    vaciarCartF,
    EmptyCart,
    carTotal
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        removeGuitarra={removeGuitarra}
        addItemCart={addItemCart}
        removeItemCart={removeItemCart}
        vaciarCartF={vaciarCartF}
        
        EmptyCart= {EmptyCart}
        carTotal={carTotal}

      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitarra key={guitar.id} guitar={guitar} addToCart={addToCart} />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
};
