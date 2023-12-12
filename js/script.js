const { createApp } = Vue;

createApp({
    data() {
        return {
            number: 0,
            botNumber: 0,
        }
    },

    methods: {
        getNewNumber(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/int').then(
                (response) =>{
                console.log(response);
                this.number = response.data.response;
            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/int').then(
                (response) =>{
                console.log(response);
                this.botNumber = response.data.response;
            });
        }
    },

    created() {
        this.getNewNumber();
    },
}).mount('#app');
