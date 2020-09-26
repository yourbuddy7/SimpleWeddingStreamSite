import React from 'react';
import {intervalToDuration} from 'date-fns';

export class CounterComponent extends React.Component{
    constructor(props){
        super(props);
      
        this.state = {
            weddingDate: new Date(2020, 9, 10, 12), //set for noon, change accordingly
            currentDate: new Date(),
            play: false
            //toDateString()
        }
        this.returnDate = this.returnDate.bind(this);
        this.renderVideoPlayer = this.renderVideoPlayer.bind(this);
    }

    returnDate(){
        let duration = intervalToDuration({
            start: this.state.weddingDate,
            end: this.state.currentDate
        })
        if (duration < 500){
            this.setState({play: true})
        }
        let outString = `${duration.days} days, ${duration.hours} hours, ${duration.minutes} minutes`
        return outString;
    }

    //make this into a lifecycle method please
    renderVideoPlayer(){
        if (this.state.play){
            return (
            <div>
                <hr></hr>
                    {/* add live stream link to src */}
                    <p>This is where the stream will go</p>
                    <div className = "iframeContainer">
                        <iframe className = "responsiveIframe" src="" title = "streamPlayer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen></iframe>
                    </div>
                <hr></hr>
            </div>
            )
        } else {
            return (
            <div>
                <h2>The wedding stream will begin in {this.returnDate()}.</h2>
                <h2>Until then feel free to watch one of the greatest youtube videos of all time</h2>
                <hr></hr>
                <div className = "iframeConstraint">
                    <div className = "iframeContainer">
                        <iframe className = "responsiveIframe" src="https://www.youtube.com/embed/F-X4SLhorvw" title = "streamPlayer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen></iframe>
                    </div>
                </div>
                <hr></hr>
                <p>Once the stream starts the video player will update and show something (hopefully) just as good. Aka the Miesner Martinez wedding :)</p>
            </div> 
            )
        }
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