//Dependencies
import React from 'react';
import epgData from '../../data/epg.json';
import {
  IonSlides,
  IonSlide,
  IonRow,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';

//Assets
import './style.css';

/**
 * Epg Class
 */

export default class Epg extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: Object.values(epgData.events).reverse(),
      name: epgData.name,
      title: epgData.title,
    };

    this.ConvertSeconds = this.ConvertSeconds.bind(this);

  }

  componentDidMount() {
    //Ja vorem
  }


  /**
   * Function to covert the program seconds to Hour + minutes + seconds
   * @param {*} seconds 
   */
  ConvertSeconds(seconds) {
    return new Date(seconds * 1000).toISOString().substr(11, 8)
  }


  /**
   * I use this function to show using an alert the Description of TVE program
   * @param {*} text 
   */
  DescriptionClik(text) {
    // console.log(this.state.events.spa);
    // console.log(text)
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = this.state.title;
    alert.subHeader = 'Descripcion';
    alert.message = text;
    alert.buttons = ['Return'];
    document.body.appendChild(alert);
    return alert.present();
  }

  /**
   *  The function convertUTCtoDate convert the seconds that we have in the Epg json 
   *  to weekday + number , month and finaly the year 
   *  from ES locale
   * @param {*} utcEpoch 
   */
  convertUTCtoDate(utcEpoch) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', time: 'numeric' };
    //console.log(options)
    let d = new Date(0);
    d.setUTCSeconds(utcEpoch);
    return d.toLocaleString("es-ES", options);
  }

  /**
   * The Render 
   */

  render() {


    /**
     * Options of Ionic Slides
     */

    const slideOpts = {
      slidesPerView: 'auto',
      zoom: true,
      grabCursor: true,
      virtual: true,
    };


    return (

      <IonRow>
        <IonLabel className="my-label">
          <ion-header>
            {this.state.title}
            <img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Logo_TVE-1.svg"></img>
          </ion-header>
        </IonLabel>
        <IonSlides options={slideOpts}>

          {this.state.events.map((eventEPG, index) => (
            <IonSlide >
              <IonCard key={'col_' + index}>
                <IonCardHeader>
                  <IonCardTitle>{this.convertUTCtoDate(eventEPG.spa.start)}</IonCardTitle>
                  <IonCardTitle>
                    <ion-chip>
                      <ion-label>
                        {eventEPG.spa.name}
                      </ion-label>
                    </ion-chip>
                  </IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  
                  <IonCardTitle>
                    {"Desde:" + this.ConvertSeconds(eventEPG.spa.start)}
                    {" Hasta:" +  this.ConvertSeconds((eventEPG.spa.start + eventEPG.spa.duration))}
                  </IonCardTitle>



                  <ion-buttons slot="primary">
                    <h1 key={index} onClick={() => this.DescriptionClik(eventEPG.spa.ext.text)}>
                      Description
                    </h1>
                  </ion-buttons>

                  
                </IonCardContent>
              </IonCard>
            </IonSlide>
          ))}
        </IonSlides>
      </IonRow>

    );
  }
}