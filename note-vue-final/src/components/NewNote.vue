<template>
    <div>
        
            <div class="alert alert-danger" v-show="errors.length">
                <li v-for="error in errors" v-bind:key="error"> {{error}}</li>
            </div>
            <div>
                <h4 class="card-title">Work orders</h4>

                <div class="form-group">
                    
                    <b-form-input placeholder="Name of the staff..." id="name" class="form-control" v-model.trim="newstaffName"></b-form-input>
                </div>    

                <div class="form-group">
                    
                    <input  placeholder="Title..." id="Title" class="form-control" v-model.trim="newtitleName">
                </div>
                <div class="form-group">
                    
                    <b-form-datepicker   placeholder="Pick a Date..." id="Date" class="form-control" v-model.trim="newDate"> </b-form-datepicker>
                </div>
                <div class="form-group">
                    <!-- TODO v-model -->
                    <textarea  placeholder="Message..." id="Message" class="form-control" v-model.trim="newbodymessage"></textarea>
                </div>

                <!-- TODO v-on:click event handler -->
                <b-button class="btn btn-primary" v-on:click.prevent="addNote" variant="success">Submit</b-button>
            </div>

    </div>
</template>

<script>

    export default {
        name:'NewNote',
        data(){
            return {
                newstaffName:'',
                newtitleName: '',
                newDate:'',
                newbodymessage:'',
                errors:[]
                
            }
        },
        methods: {
            addNote() {
                       this.errors=[]
                    if (this.newstaffName && this.newtitleName && this.newDate && this.newbodymessage ) { // checks if the name and startId are both entered
                        let note = {name: this.newstaffName, Title:this.newtitleName, Message:this.newbodymessage, Date:this.newDate }
                        this.$emit('note-added', note)
                        this.newstaffName ='' 
                        this.newtitleName = ''
                        this.newbodymessage=''
                        this.newDate=''
                    } else if (!this.newstaffName) {
                        this.errors.push("Name is required ")
                    } else if (!this.newtitleName) {
                         this.errors.push("Title is required ")     
                    }else if (!this.newbodymessage) {
                         this.errors.push("Message is required ")     
                    }else if (!this.newDate) {
                         this.errors.push("Date is required ")     
                    }            
            }
        }

    }
    

</script>

<style>

</style>