<template>
  <div id="app">
      <Nav></Nav>
      <b-card img-src="https://picsum.photos//1000/300?image=1016" img-alt="Card image" img-top>

  <b-container class="bv-example-row">
    <b-row>
      <b-col> 
        
        <b-card  class="text-center" img-src="https://picsum.photos/600/300/?image=307" img-alt="Image" img-top  tag="article" style="max-width: 100rem;"  >
          <NewNote v-on:note-added="newNoteAdded"></NewNote>
          </b-card>

          
          </b-col>
      <b-col> 
        
      <b-card title="Work List" class="text-center" img-src="https://picsum.photos/600/300/?image=1048" img-alt="Image" img-top  tag="article" style="max-width: 100rem;"  >

          <Notes 
              v-bind:notes="notes"
              v-on:delete-note="NoteCompleteOrN">
          </Notes>
      </b-card>

      </b-col>
    </b-row>
  </b-container>
      </b-card>
  </div>  
</template>

<script>
import NewNote from './components/NewNote.vue'
import Notes from './components/Notes.vue'
import Nav from './components/Nav.vue'


export default {
  name: 'app',
  data() {
    return{
      notes: [],

      
    }
  },
  components: {
    NewNote,
    Notes,
    Nav
  },  
  mounted() {    

      this.updateNote()
  },
  methods: {
    newNoteAdded(note) {
      this.$note_api.addNote(note).then( note =>{
        this.updateNote()
      })  
    
    }, 
    NoteCompleteOrN(note) {
      this.$note_api.deleteNote(note).then( () =>{
        this.updateNote()
      })

    
  },
  updateNote() {
    this.$note_api.getallNotes().then( notes => {
        this.notes = notes
      })
    }

  }
    

}
</script>

<style>

</style>

