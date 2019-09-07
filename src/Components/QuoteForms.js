import React from "react";

class QuoteForms extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            weight: false,

        };
    }

    // handleButtonClick = event => {
    //     this.setState({
    //         (event.targe): !this.state.weight,
    //     });
    // }

    render(){
        return(
            <div>
                <div>
                    <div>Have you experienced significant changes in Weight, Health or Finances ? (select that all apply)</div>
                    {/* <button value="Weight" type="button" onClick={this.handleButtonClick}>Weight</button> */}

                    <button value="weight" type="button" onClick={(e)=>this.setState({weight: !this.state.weight})}>Weight</button>
                
                </div>
                {
                    this.state.weight ? 
                    <p>weight clicked</p> 
                    : null
                }
            </div>



        )
    }
}

export default QuoteForms;
