import React from "react";
import {accessibilityOutline } from 'ionicons/icons';
import {IonIcon} from "@ionic/react";


class Header extends React.Component {
    render() {
        return (
            <ion-header>
                        <ion-button  color="dark" href="/signin">Signin  
                        <IonIcon icon={accessibilityOutline} />
                        </ion-button>
                        <ion-button color="dark" href="/signup">Register
                        <IonIcon icon={accessibilityOutline} />
                        </ion-button>
            </ion-header>
        );
    }
}
export default Header;