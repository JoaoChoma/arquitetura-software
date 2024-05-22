import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
//import { getDatabase } from "firebase/database";
import { getDatabase, ref, push } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCrJPf8gJBcesVMAUjCbZm3yQQk2hnNiGA",
    authDomain: "monday-3d3b4.firebaseapp.com",
    databaseURL: "https://monday-3d3b4.firebaseio.com",
    projectId: "monday-3d3b4",
    storageBucket: "monday-3d3b4.appspot.com",
    messagingSenderId: "695665645433",
    appId: "1:695665645433:web:39f8cbefb94eb4c8",
    measurementId: "G-V119GM3VZ7"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exemplo de função de login
async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const uid = userCredential.user.uid;
        return uid;
        //console.log('Usuário autenticado com sucesso:', userCredential.user);
        //return true;
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        return false;
    }
}



function writeUserData(userId, nome, idade) {
  const db = getDatabase();
  const timestamp = Date.now();  // Usando timestamp como chave
  push(ref(db, 'users/' + userId + '/' + timestamp), {
    nome: nome,
    idade: idade,
  });
}

async function handleUserLogin() {
    const userId = await loginUser('joaochoma@gmail.com', 'teste123');
    if (userId) {
        writeUserData(userId, 'JoaoCh', 32);  // Chama writeUserData apenas se o userId for obtido com sucesso
        return true;
    } else {
        console.log('Falha na autenticação do usuário.');
        return false;
    }
}

handleUserLogin();