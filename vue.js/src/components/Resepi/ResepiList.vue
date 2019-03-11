<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4" v-for="resepi in listOfResepi" v-bind:key="resepi.id">
            <div class="card">
                <img v-bind:src="resepi.thumbnail" alt="img" class="img-fluid">
                <div class="card-body">
    
                    <div class="card-title">{{ resepi.title }}</div>
                    <hr>
    
                    <p class="card-text">{{resepi.href}}</p>
                    <h6 class="heding ">Ingredients</h6>
                    <hr>
                    <div class="card-ingred">{{resepi.ingredients}}</div>
                    <hr>
    
                    <div class="description" v-html="description">
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
    import Resepeipage from '../containers/ResepiPage'
    export default {
        name: 'ResepiList',
        props: ["listOfResepi"],
        components: {
    
        },
        created() {
    
        }
    }
</script>

<style>
    body {
        background-color: #3F4D65;
        filter: grayscale(25%);
    }
    
    .container {
        background-color: rgb(58, 160, 121);
        padding: 25px;
        border-radius: 40px 40px 0px 0px;
        border: 5px solid rgb(249, 249, 236);
        box-shadow: 0 0 0 5px #3F4D65 inset;
    }
    
    .card {
        margin: 5px;
        padding: 25px;
        width: 100%;
        height: 660px;
    }
    
    .card-title {
        font-family: 'Times New Roman', Times, serif;
        text-align: left;
        font-size: 1.5rem;
    }
    
    .card-body {
        width: 100%;
    }
    
    .card-text {
        text-align: left;
        color: rgb(2, 2, 90);
        height: 60px;
    }
    
    .img-fluid {
        height: 200px;
        width: 200px;
        margin: auto;
        padding: 5px;
        ;
        border-radius: 50%;
        filter: grayscale(15%);
        border: 0.5px solid rgb(58, 160, 121);
        box-shadow: 0 0 0 0px transparent inset;
    }
    
    h1 {
        border-radius: 5px 5px 0px 0px;
        background-color: rgb(249, 249, 236);
        min-width: 200px;
        max-width: 250px;
        font-size: 2rem;
        margin: auto;
        text-decoration: underline rgb(58, 160, 121);
    }
    
    .card-ingred {
        margin: 0px;
        text-align: left;
        background-color: rgb(223, 222, 222);
        padding: 10px;
        color: black;
        border: 2px solid transparent;
        border-radius: 6px;
    }
    
    .heding {
        text-align: left;
        font-family: 'Times New Roman', Times, serif;
        font: 1.3em 'Times New Roman';
    }
    
    hr {
        height: 0.5px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(132, 187, 165), rgba(0, 0, 0, 0));
    }
    
    @media only screen and (max-width: 1250px) {
        .card {
            height: auto;
            ;
        }
    }
</style>
