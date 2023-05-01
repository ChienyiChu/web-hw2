import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, deleteDoc } from "firebase/firestore";
import products from "../json/products.json";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};


const app_length = getApps().length > 0;

const app = app_length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);


const productsCollection = collection(db, "product"); 

export const feedProducts = async () => {
  // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(productsCollection);
  querySnapshot.forEach(async (product) => {
    await deleteDoc(doc(db, "products", product.id));
  });
  // ADD NEW DOCS
  products.forEach(async (product) => {
    const docRef = await doc(productsCollection);
    await setDoc(docRef, { ...product, id: docRef.id, category: product.category.toUpperCase() });
  });
};


/* export const getProductById = async (id) => {
    const docRef = await doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
 };
 
 export const getProductsByCategory = async (category) => {
    // Create a query against the collection.
    const q = await query(productsCollection, where("category", "==", category.toUpperCase()));
    const querySnapshot = await getDocs(q);
    // Convert query to a json array.
    let result = [];
    querySnapshot.forEach(async (product) => {
       await result.push(product.data());
    });
    return result;
 }; */
 
 export const getProducts = async () => {
    const querySnapshot = await getDocs(productsCollection);
    // Convert query to a json array.
    let result = [];
    querySnapshot.forEach(async (product) => {
       await result.push(product.data());
    });
    console.log({ result });
    return result;
 };