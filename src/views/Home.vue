<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Criar</span>
        </v-card-title>
        <v-card-text>
          <v-container>
              <v-col cols="12" class="d-block">
                <v-text-field v-model="titulo" label="Título*" required></v-text-field>
                <v-text-field v-model="descricao" label="Descrição"></v-text-field>
              </v-col>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Cancelar</v-btn>
          <v-btn color="blue darken-1" text @click="addNote()">Criar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container fluid>
      <v-col cols="12">
        <v-row justify="start">
          <v-card class="ma-3 pa-3" outlined min-width="344" max-width="344">
              <v-col cols="12" class="d-block mt-10">
              <v-row justify="center" align="center">
                <v-btn class="mt-2" @click="dialog=true" outlined large fab color="deep-purple accent-4">
                  <v-icon>add</v-icon>
                </v-btn>
              </v-row>
                <v-row justify="center" align="center">         
                  <p class="mt-1 display-0 text--primary" color="deep-purple accent-4">
                  Novo
                  </p>
                </v-row>
              </v-col>           
          </v-card>
          <v-card
            v-for="n in notas"
            :key="n.key"
            class="ma-3 pa-3"
            outlined
            max-width="344"
          >
            <v-card-text>
              <div>Título</div>
              <p class="display-1 text--primary">
                {{n.titulo}}
              </p>
              <div class="text--primary">
                {{n.descricao}}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="deep-purple accent-4"
              >
                Abrir
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
  </v-container>
    
  </div>
</template>

<script>
import firebase from '../firebase'
export default {
  name: 'Home',
  props: {
      source: String,
    },
  components: {
    
  },
  data: () => ({ 
    titulo: '',
    descricao: '',
    notas: {},
    editForm: [],
    dialog: false,
  }),
  created () {
    firebase.database().ref('notes').on('value', snapshot =>{
      this.notas = snapshot.val()
    })
  },
  methods: {
    addNote() {
      this.dialog = false
      firebase.database().ref('notes').push({titulo: this.titulo, descricao: this.descricao})
      .then(this.$store.dispatch('setInfoError',{
            showing:true,
            text: "Nota criada com sucesso!"
          }))
      .catch(error=>{window.alert(error)})
    },
    editNome(key){
      firebase.database().ref('notes/'+key).set({
        name:this.editForm[key]
      })
      this.editForm=[]
    },
    deleteNome(key){
      firebase.database().ref('notes/'+key).remove()
    }
  },
}
</script>
