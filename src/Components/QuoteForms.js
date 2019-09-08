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
            weightChangeDetail: "Weight Change Detail",
            healthChangeDetail: "Health Change Detail",
            financeChangeDetail: "Finance Change Detail",
            

        };
        this.flagChangeHandler = this.flagChangeHandler.bind(this);

       

    }

    // componentWillUpdate() 
	// { 
	// 	console.log("componentWillUpdate()"); 
    // }
    
    //handle flag state, to show/hide certin sections
    flagChangeHandler= event=> {
        const {visibilityFlag} = {...this.state};
        const currentVisibility = visibilityFlag;
        const tagValue = event.target.value;
        currentVisibility[tagValue] = !(visibilityFlag[tagValue]);

        this.setState ({ [visibilityFlag]: currentVisibility});
    }

    textInputHandler = event => {
        let name = event.target.name;
        let value = event.target.value;
        
        this.setState({
            ...this.state,
            [name]:value,
        });
    }
    formSubmitHandler= (event) => {
        event.preventDefault();
        console.log(this.state.visibilityFlag, this.state.financeChangeDetail);
    }
    

    render(){

        return(
            // section for health, weight, finance changing 
            <div className="Transamerica-LifeInsuranceDemo">
                <form>

                    <div>
                        <div>
                            <div>Have you experienced significant changes in Weight, Health or Finances ? (select that all apply)</div>
                            <button value="weight" type="button" onClick={this.flagChangeHandler}>Weight</button>
                            <button value="health" type="button" onClick={this.flagChangeHandler}>health</button>
                            <button value="finance" type="button" onClick={this.flagChangeHandler}>finance</button>
        
                        </div>
                        { 
                            this.state.visibilityFlag.weight &&
                            <div>
                                <input type="text" name="weightChangeDetail" value={this.state.weightChangeDetail} onChange={this.textInputHandler}></input>
                            </div>
                        }
        
                        { 
                            this.state.visibilityFlag.health &&
                            <div>
                                <input type="text" name="healChangeDetail" value={this.state.healthChangeDetail} onChange={this.textInputHandler}></input>
                            </div>
                        }

                        { this.state.visibilityFlag.finance &&
                            <div>
                            <input type="text" name="financeChangeDetail" value={this.state.financeChangeDetail} onChange={this.textInputHandler}></input>
                        </div>
                        }
                    </div>

                    <div>
                        <button onClick={this.formSubmitHandler}>Submit</button>    
                    </div>
                


                </form>
            </div>
           






        )
    }
}

export default QuoteForms;
