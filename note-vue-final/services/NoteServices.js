import axios from 'axios'

const base_url = '/api/notes'

export default {
    getallNotes() {
        return axios.get(base_url).then( response => {
            return response.data
        })
    },
    addNote(note) {
        return axios.post(base_url, note).then(response=> {
           return response.data 
        })
    },

    updateNote(note) {

        return axios.patch(`${base_url}/${note.id}` ,note).then( response => {
            return response.data
        }) 
    },
    deleteNote(note) {
        return axios.delete(`${base_url}/${note.id}`, note).then(response => {
            return response.data
        })
    }


}