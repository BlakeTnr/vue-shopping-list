<template lang="">
    <div>
        {{id}}
        <v-container>
            <v-row>
                <v-col cols="10">
                    <v-text-field v-model="inputItem" clearable filled placeholder="Item"></v-text-field>
                </v-col>
                <v-col cols="2">
                    <v-btn v-on:click="addItem" color="primary" fab>
                        <v-icon>
                            mdi-plus
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row v-for="item in items" :key="item">
                <v-col cols="10">
                    {{item}}
                </v-col>
                <v-col cols="2">
                    <v-btn v-on:click="removeItem(item)" color="secondary" fab>
                        <v-icon>
                            mdi-minus
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import { collection, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore"
import { Database } from "../firebaseStuff"
export default {
    name: "ListViewer",
    props: {
        id: String
    },
    data() {
        return {
            items: [],
            inputItem: ""
        }
    },
    methods: {
        async getItems() {
            var querySnapshop
            try { querySnapshop = await getDocs(collection(Database, "lists", this.id, "items")) } catch(e) { console.log(e) }
            querySnapshop.forEach((doc) => {
                this.items.unshift(doc.id)
            })
        },
        async addItem() {
            await setDoc(doc(Database, "lists", this.id, "items", this.inputItem), {
                
            })
            this.items.unshift(this.inputItem);
        },
        async removeItem(item) {
            await deleteDoc(doc(Database, "lists", this.id, "items", item))
            this.items.splice(this.items.indexOf(item), 1)
        }
    },
    created: async function() {
        await this.getItems();
    }
}
</script>
<style lang="">
    
</style>