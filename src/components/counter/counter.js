import React from 'react';
import {intervalToDuration} from 'date-fns';
import couplePic from './couplePic.jpg';


export class CounterComponent extends React.Component{
    constructor(props){
        super(props);
      
        this.state = {
            weddingDate: new Date(2020, 9, 18, 18), //set for noon, change accordingly
            currentDate: new Date(),
            play: false
        }
        this.returnDate = this.returnDate.bind(this);
        this.renderVideoPlayer = this.renderVideoPlayer.bind(this);
        this.updateTime = this.updateTime.bind(this);
    }

    updateTime(){
        let duration = intervalToDuration({
            start: this.state.weddingDate,
            end: this.state.currentDate
        })

        if (duration.days <= 0 && duration.hours <= 0 && duration.minutes <= 0){
            this.setState({play: true})
        }

        this.setState({
            currentDate: new Date()
        })
    }


    returnDate(){
        let duration = intervalToDuration({
            start: this.state.weddingDate,
            end: this.state.currentDate
        })
        
        let outString = `${duration.days} days, ${duration.hours} hours, ${duration.minutes} minutes`
        return outString;
    }

    renderVideoPlayer(){
        // if (this.state.play){
        //     return (
        //     <div>
        //         <hr></hr>
        //             {/* This is where the stream goes */}
        //             {/* <div className = "iframeContainer">
        //                 <iframe className = "responsiveIframe" src="https://www.youtube.com/embed/B6Vq5Jyhm_w" title = "streamPlayer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen></iframe>
        //             </div> */}
        //             <p>Thanks for coming by! We will post the recording soon</p>
        //         <hr></hr>
        //     </div>
        //     )
        // } else {
        //     return (
        //     <div>
                
        //         <h2>The wedding stream will begin in {this.returnDate()}.</h2>
        //         <hr></hr>
        //         <div className = "picContainer">
        //                 <img className = "heroImg" src={couplePic} alt="Emilie and Eric"></img>
        //         </div>
        //         <hr></hr>
        //         <p>Once the stream starts the image will update to a video player containing the stream.</p>
        //         <a href='https://www.zola.com/wedding/ericandemilie' target='_blank' rel="noopener noreferrer">return to the main wedding site here</a>
        //     </div> 
        //     )
        // }
        return (
            <div>
                <hr></hr>
                    {/* This is where the stream goes */}
                    {/* <div className = "iframeContainer">
                        <iframe className = "responsiveIframe" src="https://www.youtube.com/embed/B6Vq5Jyhm_w" title = "streamPlayer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen></iframe>
                    </div> */}
                    {/* <p>Thanks for coming by! We will post the recording soon</p> */}
                    <div className = "iframeContainer">
        //                 <iframe className = "responsiveIframe" src="https://www.youtube.com/embed/JpalskUfPCs" title = "streamPlayer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen></iframe>
        //             </div>
                <hr></hr>
            </div>
        )
    }
    
    componentDidMount(){
        setInterval(()=>this.updateTime(), 1000);
    }

    render(){
        return(
            <div>
                <br></br>

                <div className = "TimeLeftConatiner">
                    <h1>{this.returnDate()}</h1>
                    <h1 className = "h1Light">Until the Miesner Martinez wedding live stream!</h1>
                </div>
                <div className = "VideoContainer">
                    {this.renderVideoPlayer()}
                </div>
            </div>
        )
    }
}