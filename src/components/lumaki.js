import { Component } from 'react';
import { Page } from './project';
import lumakiIcon from '../assets/projects/lumaki.svg';
import lumakiScreen from '../assets/projects/screenshots/lumaki-1.png'

const body = `Lumaki is an umbrella company I put my projects under. I built the site similar to this one
using React and Github pages. I'm trying to integrate React into more projects since it seems to be pretty
cool and people like it! 
<br /><br />
My dad is from the Philippines and I have pride in being Filipino so I wanted to celebrate this. The name 
Lumaki comes from Tagalog meaning "to grow" or "growth". I think there's something very satifying about 
personal growth, looking at your progression from the past and reflecting on that so that's why I chose that word!`;

class Lumaki extends Component {
    constructor(props){ 
        super(props); 
        // this.state = { color : '#4cb96b' }; 
    }
    render () {
        return (
            <div>
                <Page 
                    icon={lumakiIcon} 
                    title="Lumaki"
                    body={body}
                    link="https://lumaki.io/"
                    body={body}
                    pic1={lumakiScreen}
                    ></Page>
            </div> 
        )
    }
}
export default Lumaki;
