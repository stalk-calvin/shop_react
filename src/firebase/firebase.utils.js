import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBspwhF5006rzjfg221jcjwpD8ZO5nrY3o",
    authDomain: "shop-react-1713d.firebaseapp.com",
    databaseURL: "https://shop-react-1713d.firebaseio.com",
    projectId: "shop-react-1713d",
    storageBucket: "shop-react-1713d.appspot.com",
    messagingSenderId: "628666017941",
    appId: "1:628666017941:web:04685de146f239fedad39c",
    measurementId: "G-LZ4T88XSC2"
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        
        const {title, items} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });
    
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const SignInWithGoogle = () => auth.signInWithPopup(googleProvider).then((result) => {
    document.location.href="/";
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        const current = new Date();
        const expiry = current;
        current.setHours(current.getHours() + 1);

        try {
            await userRef.set({
                displayName, 
                email, 
                createdAt, 
                expiry,
                ...additionalData
            });
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }

    return userRef;
}

export const addCollectionAndItems = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

   return await batch.commit();
}

// const githubProvider = new firebase.auth.GithubAuthProvider();
// githubProvider.setCustomParameters({ prompt: 'select_account' })
// export const SignInWithGithub = () => auth.signInWithPopup(githubProvider);

export default firebase;