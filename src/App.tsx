import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {phonePortrait, apps, eye, tvSharp } from 'ionicons/icons';
import Contact from './pages/contact'
import About from './pages/about'
import Epg from './components/epg-component/epg'
import Home from './pages/home'
import Login from './components/login_register-components/login';
import Register from './components/login_register-components/register';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';



const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/epg" component={Epg}  />
          <Route path="/signin" component={Login}  />
          <Route path="/signup" component={Register}  />
          <Route path="/home" component={Home}  />
          <Route path="/about" component={About}  />
          <Route path="/contact" component={Contact}  />
          <Route path="/indoorfootball" component={IndoorFootball}  />
          <Route path="/football-7" component={Football7}  />
          <Route path="/football-11" component={Football_11}  />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
        <IonTabButton tab="EPG" href="/epg">
            <IonIcon icon={tvSharp} />
            <IonLabel>EPG</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Contact" href="/contact">
            <IonIcon icon={phonePortrait} />
            <IonLabel>Contact Us</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Home" href="/home">
            <IonIcon icon={apps} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="About us" href="/about">
            <IonIcon icon={eye} />
            <IonLabel>About us</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>

    </IonReactRouter>
  </IonApp>
);

export default App;
