<template>
    <div>
        <h2>Faça uma pergunta em que a resposta seja SIM ou NÂO</h2>
        <form>
            Pergunta: <input type="text" placeholder="você gosta deste app?" name="pergunta">
            <input type="submit" value="enviar" v-on:click="perguntaOraculo">
        </form>
        <!-- <Answer :resposta="{answer: 'yes', image:'http://lorempixel.com/output/sports-q-c-150-100-6.jpg'}"/> -->
        <Answer v-if="oraculoDisse && oraculoDisse.answer" :resposta="oraculoDisse"/>
        <br/>
        <input type="submit" value="De novo" v-on:click="reinicia" />

    </div>
</template>

<script>
import Answer from './Answer'
import axios from 'axios'

    export default {
        name: "Question",
        components: {
            Answer
        },
        data: function() {
            return {
                oraculoDisse: null
            }
        },
        methods: {
            perguntaOraculo: function(e) {
                e.preventDefault()
                axios
                    .get('https://yesno.wtf/api')
                    .then(response => {
                        console.log(response)
                        this.oraculoDisse = response.data
                    })
            },
            reinicia: function() {
                this.oraculoDisse = null
            }

        }
    }
</script>

<style>

</style>