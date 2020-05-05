import firebase from '../firebase'

export default (async(to, from, next) => {
  if (!await firebase.getCurrentUser()) {
    next('/');
  } else {
    next();
  }
})
