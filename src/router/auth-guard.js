import firebase from '../firebase'
import store from '../store'

export default (async(to, from, next) => {
  store.dispatch('setCarregando', true)
  if (!await firebase.getCurrentUser()) {
    store.dispatch('setConectado', false)
    next('/login');
  } else {
    store.dispatch('setConectado',true)
    next();
  }
  store.dispatch('setCarregando', false)
})
