<template>
    <div>
        <p v-if="resposta.answer == 'yes'">SIM</p>
        <p v-if="resposta.answer == 'no'">NÂO</p>
        <img :src="resposta.image"/>
    </div>
</template>

<script>
export default {
    name: "Answer",
    props: {
        resposta: Object
    }
}
</script>

<style>

</style>