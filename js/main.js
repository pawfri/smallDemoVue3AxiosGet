const baseUrl = "http://localhost:5180/api/cars"

const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            allCarList:[],
            carList:[],
            carId: "",
            carVendor: '',
            carModel: '',
            carPrice: 0,
            statuskode: '',
        }
    },

    methods: {
        sortAscend(){
            this.carList.sort((a,b) => a.price - b.price)
        },
        sortDescend(){
            this.carList.sort((a,b) => b.price - a.price)
        },
        filterPrice(){
            this.carList = this.allCarList.filter((car) => car.price > 500000)
        },

        myMethod(){

        },
        getAllCars(){
            console.log("er i metoden getAllCars");

            axios.get(baseUrl)
            .then(
                response => {
                    console.log(response)
                    this.allCarList = response.data
                    this.statuskode = response.status
                    this.carList = this.allCarList
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
