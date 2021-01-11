//Dependencies
import React from 'react';
import epgData from '../../data/epg.json';
import {
  IonSlides,
  IonSlide,
} from '@ionic/react';

//Assets
import './style.css';

/**
 * Epg Class
 */


customElements.define('modal-page', class extends HTMLElement {
  connectedCallback() {
    const modalElement = document.querySelector('ion-modal');
this.innerHTML = `
<ion-header>
  <ion-toolbar>
    <ion-title>    ${modalElement.componentProps.data.title}
    </ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
    ${modalElement.componentProps.data.description}
</ion-content>`;
  }
});





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


  
   presentModal(data) {
     console.log(data)
    // create the modal with the `modal-page` component
    const modalElement = document.createElement('ion-modal');
    modalElement.component = 'modal-page';
    modalElement.cssClass = 'my-custom-class';
  
    modalElement.componentProps = {
      'data': data,
  
    };
    // present the modal
    document.body.appendChild(modalElement);
    return modalElement.present(data);
  }

  ConvertDate(utcEpoch) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', time: 'numeric' };
    //console.log(options)
    let date = new Date(0);
    date.setUTCSeconds(utcEpoch);
    return date.toLocaleString("es-ES", options);
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

      <ion-row
>
        <ion-label className="my-label">
          <ion-header>
            {this.state.title}
            <img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Logo_TVE-1.svg"></img>
          </ion-header>
        </ion-label>
        <IonSlides options={slideOpts}>

          {this.state.events.map((eventEPG, index) => (
            <IonSlide >
              <ion-card key={'col_' + index}>
                <ion-card-header>
                  <ion-card-title>{this.ConvertDate(eventEPG.spa.start)}</ion-card-title>
                  <ion-card-title>
                    <ion-chip>
                      <ion-label>
                        {eventEPG.spa.name}
                      </ion-label>
                    </ion-chip>
                  </ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  
                  <ion-card-title>
                    {"For:  " + this.ConvertSeconds(eventEPG.spa.start)} <br/>
                    {"To:  " +  this.ConvertSeconds((eventEPG.spa.start + eventEPG.spa.duration))}
                  </ion-card-title>

                  <ion-buttons slot="primary">
                    <h1 key={index} onClick={() => this.presentModal({ "description": eventEPG.spa.ext.text, "title":eventEPG.spa.name})}>
                      Description
                    </h1>
                  </ion-buttons>

                  
                </ion-card-content>
              </ion-card>
            </IonSlide>
          ))}
        </IonSlides>
      </ion-row
>

    );
  }
}