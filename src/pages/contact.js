import {IonPage} from "@ionic/react";
import React from "react";
import Footer from "../components/footer-component/footer"

class Contact extends React.Component {
    render() {
        return (
            <IonPage>
                <form>

                    <ion-item>
                        <ion-label>First Name
                        <ion-input />
                        </ion-label>
                    </ion-item>

                    <ion-item>
                        <ion-label>Email
                        <ion-input />
                        </ion-label>
                    </ion-item>

                    <ion-item>
                        <ion-label>Message
                        <ion-textarea placeholder="Write your question"></ion-textarea>
                        </ion-label>
                    </ion-item>

                    <ion-button>
                        Send Message
                    </ion-button>

                </form>

                <Footer/>
            </IonPage >
        );
    }
}

export default Contact;