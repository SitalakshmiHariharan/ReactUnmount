import React,{Component} from 'react';

class Main extends Component{
    constructor(props){
        super(props)
        this.state={
            topic:"Artificial Intelligence",
            venue:"GG Memorial Stadium"
        }

     this.changeTopic = this.changeTopic.bind(this);   
    }

    changeTopic(){
        this.setState({topic:"Neural Networks",venue:"Devan Meeting Hall"})
    }

    render(){
        return(
            <div>
               <p> I am the Main Component. {this.props.content}.So, let me tell you something. There will be a seminar on {this.state.topic} at the {this.state.venue}</p>
               <button onClick={this.changeTopic}>Next Information</button>
            </div>
        )
    }
}

export default Main;