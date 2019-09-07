import React from "react";

class QuoteForms extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            visibilityFlag: {
                weight: false,
                health: false,
                finance: false
            },
            test: "good"

        };
        this.handleButtonClickFlag = this.handleButtonClickFlag.bind(this);

       

    }

    componentWillUpdate() 
	{ 
		console.log("componentWillUpdate()"); 
	}
 

    handleButtonClickFlag= event=> {
        

        // const { name, value } = event.target;
        // this.setState({ [name]: value });

        const {visibilityFlag} = {...this.state};
        // console.log(visibilityFlag);
        const currentVisibility = visibilityFlag;
        const value = event.target.value;
        console.log(value);
        currentVisibility[value] = !(visibilityFlag[value]);
        // console.log(!visibilityFlag.value);
        console.log("currentVisibility: ",currentVisibility);
        
        this.setState ({ [visibilityFlag]: currentVisibility});
        console.log(this.state);

        console.log(this.state.visibilityFlag.weight);


    }

    

    render(){

        return(
            // section for health, weight, finance changing 
           

            <div>
                <div>
                    <div>Have you experienced significant changes in Weight, Health or Finances ? (select that all apply)</div>
                    <button value="weight" type="button" onClick={this.handleButtonClickFlag}>Weight</button>
                    <button value="health" type="button" onClick={this.handleButtonClickFlag}>health</button>
                    <button value="finance" type="button" onClick={this.handleButtonClickFlag}>finance</button>

                </div>
                { 
                    this.state.visibilityFlag.weight &&
                    <div>
                        <input type="text" placeholder="Weight clicked, please let us know what kind of medications, medical events, and/or diet/exercise you have taken" name="weightChange" ></input>
                    </div>
                }

                { this.state.visibilityFlag.health &&
                    <div>
                        <input type="text" placeholder="Health clicked, please let us know what kind of medications, medical events, and/or diet/exercise you have taken" name="healthChange" ></input>
                    </div>
                }
                { this.state.visibilityFlag.finance &&
                    <div>
                        <input type="text" placeholder="Finance clicked, please let us know what kind of medications, medical events, and/or diet/exercise you have taken" name="financeChange" ></input>
                    </div>
                }

                

            </div>





        )
    }
}

export default QuoteForms;
