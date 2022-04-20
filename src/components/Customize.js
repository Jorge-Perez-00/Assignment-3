import '../css/Customize.css';
import { Component } from 'react'




class Customize extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.username,
            backgroundColor: this.props.backgroundColor,
            textColor: this.props.textColor,
            buttonPressed: false
        }

    }

    handleChange = (event) => {
        let target = event.target.name;
        this.setState({ 
            [target]: event.target.value 
           
        });
    }

    handleClick = () => {
        this.setState({
            buttonPressed: true
        })
    }

    handleSubmit = (event) => {
        const name = this.state.name;
        const backgroundColor = this.state.backgroundColor;
        const textColor = this.state.textColor;

        this.setState({
            buttonPressed: false
        })
        this.props.update(name, backgroundColor, textColor)
        event.preventDefault();
    }


    render(){

        const isbuttonClicked = this.state.buttonPressed;
        let element;

        if(isbuttonClicked){
            element = (
                <div class='form'>
                    
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input name={"name"} type="text" value={this.state.name} onChange={this.handleChange} />
                        </label>
                        <label>
                            Background Color:
                            <input name={"backgroundColor"} type="text" value={this.state.backgroundColor} onChange={this.handleChange} />
                        </label>
                        <label>
                            Text Color:
                            <input name={"textColor"} type="text" value={this.state.textColor} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="submit" />
                    </form>
                </div>)
        }
        else{
            element = <button class = "customize-button" onClick={this.handleClick}>Customize Profile</button>
        }

        

        return (
            <div class='customize'>
                {element}
            </div>
        )
    }

}


export default (Customize)