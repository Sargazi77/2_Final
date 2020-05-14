<template>
    <div>
        <div class="card note-list m-2 p-2">
            <div id="note-table">
                <table class="table">
                    <tr>
                        
                        <th>Name</th>
                        <th>Title</th>
                        <th>Message</th>
                        <th>Date</th>
                        <th>Status</th>
                        
                    </tr>
                     <Note
                        v-for="note in notes" v-bind:key="note.Title"
                        v-bind:note="note"
                        v-on:delete-note="notestatus">
                    </Note>
                     
                </table>
            </div>
        </div>
  

    </div>
</template>

<script>
import Note from '@/components/Note.vue'
export default {
    name: 'Notes',
    components: {Note},

    props:{
        notes: Array
    },

    methods:{
        notestatus(note) {
          this.$emit('delete-note', note)
        }
        
    }
}
    

</script>

<style>

</style>