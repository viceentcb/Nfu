import {IonPage} from "@ionic/react";
import React from "react";
import '../theme/home.css'
import Footer from "../components/footer-component/footer"
import Header from "../components/header-component/header"


class Home extends React.Component {
    render() {
        return (
            <IonPage>
                                    <Header/>

                  <div class="banner">
                        <div class="container">
                            <br></br>
                            <br></br>
                            <br></br> 
                            <h2 class="logo-font">NOS FALTA UNO </h2>
                            <p>Inicia tu Mejor  <i>PACHANGA</i> </p>
                        </div>
                    </div>
                    <Footer/>


            </IonPage >
        );
    }
}

export default Home;