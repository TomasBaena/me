import { Component } from 'react';
import { Page } from './project';
import breadhoundIcon from '../assets/projects/breadhound.png';

import b1  from '../assets/projects/screenshots/breadhound-1.png';
import b2  from '../assets/projects/screenshots/breadhound-2.png';
import b3  from '../assets/projects/screenshots/breadhound-3.png';
import b4  from '../assets/projects/screenshots/breadhound-4.png';
import b5  from '../assets/projects/screenshots/breadhound-5.png';

const body = `As I progress in adulthood I've slowly come to realize that money does <b>not</b> infact grow on trees.
I sought out ways to manage my money and to me using an app was the obvious solution. I tried a couple but 
I didn't like them for a few reasons so I made my own! This app is extremely simple yet flexible. It's meant to 
be a softer entry into personal finances and money management. The app is based around 50/30/20 rule allocating 
your money to needs, wants, and savings respectively. <br /><br />
I built breadhound using a hybrid web app approach using <a href="https://ionicframework.com/">Ionic 5</a> paired 
with <a href="https://angular.io/">Angular</a> and packaged up using <a href="https://capacitorjs.com/">Capacitor</a>.
For backend I went with a serverless approach with a noSQL document database via Cloud Firestore on Firebase.
I chose these frameworks/tools for a couple reasons. The first reason is they allow me to deploy natively to several platforms via 
one codebase using web technologies I'm familar with and enjoy. The second reason is they offer scalability and 
reliability in key areas like authentication allowing me to focus on the user experience.`;


class Breadhound extends Component {
    constructor(props){ 
        super(props); 
        // this.state = { color : '#4cb96b' }; 
        console.log(props);
    }
    render () {
        return (
            <div>
                <Page 
                    icon={breadhoundIcon} 
                    title="breadhound"
                    link="https://lumaki.io/#/breadhound"
                    body={body}
                    pic1={b1}
                    pic2={b2}
                    pic3={b3}
                    pic4={b4}
                    pic5={b5}></Page>
            </div> 
        )
    }
}
export default Breadhound;
