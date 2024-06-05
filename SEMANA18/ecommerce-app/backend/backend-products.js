// backend-products.js
import firebase from "firebase/app";
import "firebase/firestore";

// Configuração do Firebase
const db = firebase.firestore();

// Adicionar um novo produto
export const addProduct = (product) => {
  return db.collection("products").add(product);
};

// Obter todos os produtos
export const getProducts = () => {
  return db.collection("products").get();
};
