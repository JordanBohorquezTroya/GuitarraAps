import { useEffect, useState, useMemo } from "react";
import { db } from "../data/db";
import {  Guitar ,CartItem } from "../types";

export const useCart = () => {
  const useLocalStorge = (): CartItem[] =>{
    const localStoragev = localStorage.getItem('cart')
                           //Convierte A UN ARREGLO O SINO INICIA UN ARREGLO VACIO
    return localStoragev ? JSON.parse(localStoragev) : [ ]
  }
  const [data,] = useState(db);
  const [cart, setcart] = useState(useLocalStorge)
  
  function addToCart(item : Guitar)  {
    const cartExisst =  cart.findIndex((cartCantidad => cartCantidad.id === item.id))
    if(cartExisst >= 0 ){
      if(cart[cartExisst].cantida >= 5) return 
      const UpdateCart = [...cart]
      UpdateCart[cartExisst].cantida++
      setcart(UpdateCart)
    }else{
      const newItem : CartItem = {...item, cantida : 1}
      setcart( [...cart, newItem  ])
    }
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  

  function removeGuitarra(id :Guitar['id']) {
    setcart(PreCart => PreCart.filter( guitar => guitar.id !== id ))
  }

  function addItemCart(id :Guitar['id']) {
    const UpdateContador = cart.map((item)=>{
      if(item.id === id && item.cantida < 5){
        return {
          ...item,
          cantida: item.cantida +1 
        }
      }
      return item
    })
    setcart(UpdateContador)
  }

  function removeItemCart(id : Guitar['id'])  {
    const removeCart =  cart.map((item)=>{
      if(item.id === id && item.cantida > 1){
        return {
          ...item,
          cantida: item.cantida - 1
        }
      }
      return item

    })
    setcart(removeCart)
  }


  function vaciarCartF(){
    setcart([])
  }

  const EmptyCart = useMemo(() => cart.length === 0,[cart]);

  const carTotal = useMemo (() =>
    cart.reduce((total, item) => total + item.cantida * item.price, 0), [cart]);

  return {
    data,
    cart,
    addToCart,
    removeGuitarra,
    addItemCart, 
    removeItemCart,
    vaciarCartF,
    EmptyCart,
    carTotal
  }
}
