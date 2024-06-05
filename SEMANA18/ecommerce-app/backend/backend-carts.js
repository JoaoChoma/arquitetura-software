// backend-cart.js
const db = firebase.firestore();

export const addToCart = (userId, product) => {
  return db.collection("carts").doc(userId).collection("items").add(product);
};

export const getCart = (userId) => {
  return db.collection("carts").doc(userId).collection("items").get();
};
