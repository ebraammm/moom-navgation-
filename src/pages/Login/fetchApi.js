import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import Cookies from 'js-cookie';

export const login = async (email, password) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
        return user;
    }
    catch (error) {
        return error;
    }
};

export const logout = async () => {

    try {
        const auth = getAuth();
        await signOut(auth);
        Cookies.remove('user');
    }
    catch (error) {
        return error;
    }
};

export const checkAuth = (setUser) => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
    });
};



