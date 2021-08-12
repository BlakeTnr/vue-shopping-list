<template lang="">
    <div>
        <v-text-field clearable filled label="List code" v-model="code"></v-text-field>
        <v-btn color="primary" v-on:click="viewList">View list</v-btn>
        <v-btn color="secondary" v-on:click="createList">Create list</v-btn>
        <v-btn color="secondary" v-on:click="randomCode(5)">Randomly generate code</v-btn>
    </div>
</template>
<script>
import { Database } from "../firebaseStuff"
import { setDoc, doc } from "@firebase/firestore"
export default {
    name: "CodeHandler",
    data() {
        return {
            code: ""
        }
    },
    methods: {
        viewList() {
            this.$router.push({name: "List", params: { id: this.code }})
        },
        
        async createList() {
            try {
                await setDoc(doc(Database, "lists", this.code), {
                });
                this.code = ""
            } catch(e) {
                console.log(e)
            }
        },

        randomCode(length) {
            const characters = "abcdefghijklmnopqrstuvwxyz1234567890"
            const characterArray = characters.split('')

            var code = ""
            for(let i=0; i<=length; i++) {
                const newChar = characterArray[Math.floor(Math.random() * characters.length)]
                code = code.concat(newChar)
            }
            this.code = code.toUpperCase()
        }
    },
}
</script>
<style lang="">
    
</style>