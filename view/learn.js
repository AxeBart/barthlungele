export default{
    data(){
        return{
            msg : "desolé"
        }
    },
    mounted(){
        console.log("mount 2")
    },
    template: `
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="">
                        <h3>Cette page est sera disponible tes bientôt {{msg}}</h3>
                    </div>
                </div>
            </div>
        </div>
    `
}