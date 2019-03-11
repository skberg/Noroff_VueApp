<template>
    <div class="container" >
    <resepi-list v-bind:list-of-resepi="resepi"></resepi-list>
    </div>
</template>
<script>
    import ResepiList from '../Resepi/ResepiList'


export default {


  name: "ResepiSite",
        components: {
            ResepiList //Registere far og mor til barn. 
        },
        created() {
    
            //get all of the awesom jobs 
            const conversionUrl = 'https://cors-anywhere.herokuapp.com/';
            const Resepi = 'http://www.recipepuppy.com/api/';
            fetch(`${conversionUrl}${Resepi}`).then(resp => resp.json())
                .then(data => {
                     
                     this.resepi = data.results
                })
                .catch(err => {
                    console.log(err);
    
                })
        },
        data() {
            return {
                resepi:[]
            }
        }
    }
</script>
<style scoped>

</style>
