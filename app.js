const {createApp} = Vue

createApp({
    data(){
        return {
            msg : "hey",
            is : 'home'
        }
    },
    methods:{
        goTo(view){
            this.is = view
            console.log(view)
        }
    },
    mounted(){
        console.log("mount")
    },
    template : `
    <div v-if = "is == 'home'">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    
                </div>
                <div class="col-7">
                    <h3>Salut ! Je parle de moi ici </h3><br>
                    <p>
                        Ayant travaillé dans des projets informatiques pendant tout mon parcours academique, j'ai des competances en programmation Web front-end <span class="hc">(HTML, CSS, JS)</span> et en gerant le back-end avec <span class="hc">PHP et MySQL</span>.
                    </p>

                    <p>
                        De là, je me suis tourné vers le developpement d'application de bureau en Utilisant le JavaScript et Node Js
                    </p>

                    <p>
                        J'ai fait quelques pas dans la programmation des Jeux videos avec <span class="hc">Phaser Js</span> (et ouais... toujours JavaScript)
                    </p>

                    <p>
                        Vous pouvez voir les differents projets juste en bas.
                    </p>
                </div>
            </div>
            <br><br>
            <div class="row center">
                <div class="col-2"></div>

                <div class="col-4">
                    <div class="card center">
                        <h4>GitHub</h4>
                    </div>
                </div>

                <div class="col-4">
                    <div class="card center" @click = "goTo('apprendre')">
                        <h4>Apprendre</h4>
                    </div>
                </div>
            </div>
        </div>
        <br><br>


        <div class="footer">
        <br>
        <div class="container">
            <div class="row">
                <div class="col-6 center">
                    <p>
                        Portfolio designer par Barth Lungele <br>
                        <a href="mailto:barthlungele@gmail.com">barthlungele@gmail.com</a>
                    </p>
                </div>

                <div class="col-6 center">
                    <p>&copy; Pour l'année 2023</p>
                </div>
            </div>
        </div>
        <br>
        </div>
    </div>

    <div class="container" v-if = "is == 'apprendre'">
        <div class="row">
            <div class="col-12">
                <div class="">
                    <h3>Cette page est sera disponible très bientôt !! &smile;</h3>
                    <br><br>
                    <h4 style="color: #f66561 !important ; cursor: pointer;" @click = "goTo('home')">Retour à la page d'acceuil &UpperRightArrow;</h4>
                </div>
            </div>
        </div>
    </div>

    `
}).mount("#main")