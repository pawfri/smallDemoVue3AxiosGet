const baseUrl = "http://localhost:5180/api/cars"

const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            carList:[],
            carId: "",
            carVendor: '',
            carModel: '',
            carPrice: 0,
            statuskode: '',
        }
    },

    methods: {
        myMethod(){

        },
        getAllCars(){
            console.log("er i metoden getAllCars");

            axios.get(baseUrl)
            .then(
                response => {
                    console.log(response)
                    this.carList = response.data
                    this.statuskode = response.status
                }
            )
            .catch(
                 error => {
                    console.log(error)
                    this.statuskode = error.response.status
                 } 
            )

        },
        gemBil(){
            console.log("er i metoden gemBil");
            axios.post(baseUrl, {"vendor": this.carVendor, "model": this.carModel, "price": this.carPrice})
            .then(response => {
                console.log(response);
                console.log(response.data);
                this.statuskode = response.status

            }

            )
            .catch(error => {
                console.log(error)
                this.statuskode = error.response.status
            }

            )
        },

        sletBil(){
            console.log("blevet slettet")
            // axios.delete(`${baseUrl}/${this.carId}`) <- alternativ med string interpolation
            axios.delete(baseUrl + '/' + this.carId)
                .then(response => {
                console.log(response);
                console.log(response.data);
                this.statuskode = response.status

            }

            )
            .catch(error => {
                console.log(error)
                this.statuskode = error.response.status
            }

            )   

        }
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
