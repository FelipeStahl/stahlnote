<template>
  <v-container
        class="fill-height"
        fluid
      >
        <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="usuario"   
                    :error-messages="userError"                 
                    label="Usuário"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    required
                    @input="$v.usuario.$touch()"
                    @blur="$v.usuario.$touch()"
                  />

                  <v-text-field
                    v-model="senha"
                    :error-messages="senhaError"
                    id="password"
                    label="Senha"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    @input="$v.senha.$touch()"
                    @blur="$v.senha.$touch()"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn @click="doLogin()" color="primary" :loading="loading" :disabled="loading">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      </v-container>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import firebase from '../firebase'

export default {
  name: 'Login',
  props: {
      source: String,
    },
  components: {
    
  },
  data: () => ({
      usuario: '',
      senha: '',
      submitStatus: null,
      loading: false,
    }),
    validations: {
      usuario: { 
        required
      },
      senha: { 
        required,
        minLength: minLength(4) 
      }
  },
  computed: {
      userError () {
        const errors = []
        if (!this.$v.usuario.$dirty) return errors
        !this.$v.usuario.required && errors.push('Preencha o seu usuário.')
        return errors
      },
      senhaError () {
        const errors = []
        if (!this.$v.senha.$dirty) return errors
        !this.$v.senha.minLength && errors.push('A senha deve ter no mínimo 4 caracteres.')
        !this.$v.senha.required && errors.push('Insira a sua senha.')
        return errors
      },
    },
    methods: {
      async doLogin () {
        this.loading = true
        const { usuario, senha } = this
        if(usuario == "" || senha == ""){
          this.$store.dispatch('setInfoError',{
            showing:true,
            text: "Preencha usuário ou senha"
          })
          this.senha = ""
        }else{
          try {
            const res = await firebase.auth().signInWithEmailAndPassword(usuario, senha)

            window.uid = res.user.uid

            this.$router.push({ name: 'home' })
          } catch (err) {
            let message = ''

            switch (err.code) {
              case 'auth/user-not-found':
                message = 'Não foi possível localizar o usuário.'
                break
              case 'auth/wrong-password':
                message = 'Senha inválida'
                break
              default:
                message = 'Não foi possível fazer login, tente novamente'
            }
            this.$store.dispatch('setInfoError',{
              showing:true,
              text: message
            })
            this.senha = ""
          }
        }      
        this.loading = false
      }
    },
    created () {
      //this.$vuetify.theme.dark = true
    },
}
</script>