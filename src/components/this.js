import { Component } from 'react';
import { Page } from './project';
import thisIcon from '../assets/projects/this.png';
import thisScreen from '../assets/projects/screenshots/this-1.png';

const body = `I can't seem to escape React!😱 Every where I go, every time I wake up, React is right there.
I'm mostly exaggerating but it's extremely popular, frameworks I use such as Ionic offer React options, and my 
current place of work is embracing this web technology. Honestly, I'm excited to explore React and have begun 
<a target="_blank" href="https://epicreact.dev">Kent C. Dodds Epic React course</a> which came highly 
recommended by a coworker. Along side that I'm using this site as opportunity to play around with React 
outside of the course and test things I'm learning.`;

class Lumaki extends Component {
    constructor(props){ 
        super(props); 
        // this.state = { color : '#4cb96b' }; 
    }
    render () {
        return (
            <div>
                <Page 
                    icon={thisIcon} 
                    title="This website"
                    body={body}
                    pic1={thisScreen}></Page>
            </div> 
        )
    }
}
export default Lumaki;
