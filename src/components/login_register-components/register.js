import { IonCheckbox, IonPage, IonItem, IonLabel, IonInput, IonButton } from "@ionic/react";
import React from "react";
import './register.css';
import Footer from "../footer-component/footer"

class Register extends React.Component {
    render() {
        return (
            <IonPage>

                <form className="ion-padding">
                    <IonItem>
                        <IonLabel>Email</IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Username</IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Password</IonLabel>
                        <IonInput type="password" />
                    </IonItem>
                    <IonItem lines="none">
                        <IonLabel>Remember me</IonLabel>
                        <IonCheckbox defaultChecked={true} slot="start" />
                    </IonItem>
                    <IonButton className="ion-margin-top" type="submit" expand="block">
                        Register
                </IonButton>

                </form>

                <Footer/>
            </IonPage >
        );
    }
}

export default Register;