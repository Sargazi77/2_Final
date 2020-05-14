<template>
   <tr>
        
        <td>{{note.name}}</td>
        <td>{{note.Title}}</td>
       <b-button  pill variant="success" id="show-btn" @click="$bvModal.show('bv-modal-example')">See Message</b-button>
        <b-modal id="bv-modal-example" hide-footer>
        <template v-slot:modal-title>
           Massege From {{note.name}}
        </template>
        <div class="d-block text-center">
        <h3><td>{{note.Message}}</td></h3>
        </div>
        <b-button variant="success" class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close</b-button>
       </b-modal>  
        <td>{{note.Date}}</td>
        <td><input type="checkbox" v-on:click="deleteNote(note)"> Completed?</td>
       
   </tr>
                     
</template>


<script>
    export default {
        name: "Note",
        props: {
            note: Object


        },

        methods: {
            deleteNote(note) {
               if (confirm(`Delete note from ${note.name}, Are you Sure?`)) {
                    this.$emit('delete-note', note)
            }
            } 
        }
    }
</script>

<style>

</style>