import { Component } from 'react'
import axios from 'axios';
import '../css/Content.css';




class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressedDebits: false,
            pressedCredits: false,
            apiData: []
        }

    }


    debitsClicked = async () => {
        this.setState({
            pressedDebits: true,
            pressedCredits: this.state.pressedCredits ? false : false
        });

        let debitsAPI = 'https://moj-api.herokuapp.com/debits';

        try{
            let response = await axios.get(debitsAPI);

            this.setState({apiData: response.data})
        } catch (error) {
            if(error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        }


    }

    creditsClicked = async () => {
        this.setState({
            pressedCredits: true,
            pressedDebits: this.state.pressedDebits ? false : false
        })

        let creditsAPI = 'https://moj-api.herokuapp.com/credits';

        try {
            let response = await axios.get(creditsAPI);

            this.setState({apiData: response.data})
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        }
    }


    makeList = () => {
        let data = this.state.apiData;

        let list = data.map( (debit) => {
            return (
                <tr>
                    <td>{debit.date.slice(0,10)}</td>
                    <td>{debit.description}</td>
                    <td>{debit.amount}</td>
                </tr>
            )
        });
        return list;
    }





    render(){
        let debits = this.state.pressedDebits;
        let credits = this.state.pressedCredits;

        let data;

        if(debits){
            data = (
                <div class="data">
                    <h1 class='type'>DEBITS</h1>,
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                        {this.makeList()}
                    </table>
                   
                </div>       
            )   
        }
        else if(credits){
            data = (
                <div class="data">
                    <h1 class="type">CREDITS</h1>,
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                        {this.makeList()}
                    </table>
                </div>   
            )
        }

        return(
            <div>
                <div class="content">
                <button class="data-buttons" onClick={this.debitsClicked}>Debits</button>
                <button class="data-buttons" onClick={this.creditsClicked}>Credits</button>
                </div>
                {data}
            </div>
        )
    }

}



export default (Content)