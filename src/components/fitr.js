import { Component } from 'react';
import { Page } from './project';
import fitrIcon from '../assets/projects/fitr.png';
import screen1 from '../assets/projects/screenshots/fitr-1.png';
import screen2 from '../assets/projects/screenshots/fitr-2.png';
import screen3 from '../assets/projects/screenshots/fitr-3.png';

const body = `
Fork in the Road was a super cool project I had the opportunity to contribute to with the founder Andrew Cram. 
Ontario has so many amazing farms providing top quality produce, meats, wines, and so much more. Some of these
farms sell directly to consumer on site which is great but it's super 
time consuming to know which farms sell what, store information, contact details etc. This makes planning a
trip a real pain in the ass. <br /><br />

Fork in the Road is a web app allowing you to browse direct to consumer farms in the Grand Bend area. You can 
see all the items they offer, shop information, and social links. You start by selecting a category
and then pick which items you're interested in buying. Based on your selection it creates a list of farms that carry 
these items. You can add or remove farms and email yourself a copy of your selections. With this you can plan your 
trip in less time and discover new farms. <br /><br />

Andrew was the creator of this idea and I built the app. It has been a few years now since this project but I 
really like the way it turned out from a UX perspective and love the idea of supporting these exceptional farms.`;

class Fitr extends Component {
    constructor(props){ 
        super(props); 
        // this.state = { color : '#4cb96b' }; 
    }
    render () {
        return (
            <div>
                <Page 
                    icon={fitrIcon} 
                    title="Fork in the road"
                    link="https://fitr.earth/"
                    body={body}
                    pic1={screen1}
                    pic2={screen2}
                    pic3={screen3}></Page>
            </div> 
        )
    }
}
export default Fitr;
