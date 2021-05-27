const baseUrl = "Mangler penge på azure"
Vue.createApp({
    data(){
        return {
            Hops: [],
            HopsToGetBy:"",
            singleHop: null,
            idToGetBy: 0,
            deleteId: 0,
            deleteMessage: "",
            HopData: { name: "", alphaacid: 00, harvetyear: 0 , price: 0},
            addMessage: "",
            updateData: { name: "", alphaacid: 00, harvetyear: 0 , price: 0},
            updateMessage: ""
        }
    },
    created(){this.helperGetAndShow(baseUrl)},
    methods: 
    {
        getAllHops() {
            this.helperGetAndShow(baseUrl)
        },
        

        async helperGetAndShow(url) { // helper metode: getAllRecords + getByArtist are very similar
            try {
                const response = await axios.get(url)
                this.Hops = await response.data
            } catch (ex) {
                alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
            }
        },
        async getById(id) {
            const url = baseUrl + "/" + id
            try {
                const response = await axios.get(url)
                this.singleHops = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async deleteHops(deleteId) {
            const url = baseUrl + "/" + deleteId
            try {
                response = await axios.delete(url)
                this.deleteMessage = response.status + " " + response.statusText
                this.getAllRecords()
            } catch (ex) {
                alert(ex.message)
            }
        },
        async addHop() {
            try {
                response = await axios.post(baseUrl, this.HopData)
                this.addMessage = "response " + response.status + " " + response.statusText
                this.getAllHops()
            } catch (ex) {
                alert(ex.message)
            }
        },
        async updateHop() {
            const url = baseUrl + "/" + this.updateData.id
            try {
                response = await axios.put(url, this.updateData)
                this.updateMessage = "response " + response.status + " " + response.statusText
                this.getAllRecords()
            } catch (ex) {
                alert(ex.message)
            }
        }
    }
}).mount("#app")