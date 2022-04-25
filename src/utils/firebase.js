
import { initializeApp} from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDXFssUh3QFkbJQNWMqrRXhJtni-9VN5Kk",
  authDomain: "ecommerce-80fd8.firebaseapp.com",
  projectId: "ecommerce-80fd8",
  storageBucket: "ecommerce-80fd8.appspot.com",
  messagingSenderId: "185069216829",
  appId: "1:185069216829:web:dc2088c48d4e54c94af654"
};

export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider) 
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return 
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
        return userDocRef;
    };
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
};

export const onAuthStateChangedListener = (callback) => 
{
    onAuthStateChanged(auth, callback)
}

export const signOutUser = async () => await signOut(auth)