import React from "react";
import formValidator from "../Tools/FormValidator";
import TextInput from "../Utilities/TextInput";
import './QuoteForms.css';

const tagName = {
    healthOfBiologicalBrothers: "healthOfBiologicalBrothers",
    numberOfBiologicalBrothers: "numberOfBiologicalBrothers",
    healthOfBiologicalSisters: "healthOfBiologicalSisters",
    numberOfBiologicalSisters: "numberOfBiologicalSisters",
    biologicalFather: "biologicalFather",
    healthOfBiologicalFather: "healthOfBiologicalFather",
    biologicalMother: "biologicalMother",
    healthOfBiologicalMother: "healthOfBiologicalMother",
};

const tagType = {
    text: "text",
    number: "number",
}

class QuoteForms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visibilityFlag: {
                weight: false,
                health: false,
                finance: false,
                biologicalSiblings: false,
            },
            formControls: {
                weightChangeDetail: {
                    value: "",
                    placeholder: "Weight Change Detail",
                    valid: false,
                    touched: false,
                    validationRules: {
                        //adding rules here
                        minLength: 20,
                    }
                },
                healthChangeDetail: {
                    value: "",
                    placeholder: "Health Change Detail",
                    valid: false,
                    touched: false,
                    validationRules: {
                        //adding rules here
                        minLength: 20,
                    }
                },
                financeChangeDetail: {
                    value: "",
                    placeholder: "Finance Change Detail",
                    valid: false,
                    touched: false,
                    validationRules: {
                        //adding rules here
                        minLength: 20,
                    }
                },
                numberOfBiologicalBrothers: {
                    value: "",
                    placeholder: "number",
                    valid: false,
                    touched: false,
                    validationRules: {
                        // //adding rules here
                        // minLength: 20,
                    }
                },
                healthOfBiologicalBrothers: {
                    value: [],
                    placeholder: "health of your brothers",
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 20,
                    },
                },
                numberOfBiologicalSisters: {
                    value: "",
                    placeholder: "number",
                    valid: false,
                    touched: false,
                    validationRules: {
                        // //adding rules here
                        // minLength: 20,
                    }
                },
                healthOfBiologicalSisters: {
                    value: [],
                    placeholder: "health of your sisters",
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 20,
                    },
                },
                biologicalFather: {
                    value: "Deseased",
                    placeholder: "",
                    valid: false,
                    touched: false,
                    validationRules: {

                    }
                },
                healthOfBiologicalFather: {
                    value: "",
                    placeholder: "health of father",
                    valid: false,
                    touched: false,
                    validationRules: {

                    }
                },
                biologicalMother: {
                    value: "Deseased",
                    placeholder: "",
                    valid: false,
                    touched: false,
                    validationRules: {

                    }
                },
                healthOfBiologicalMother: {
                    value: "",
                    placeholder: "health of mother",
                    valid: false,
                    touched: false,
                    validationRules: {

                    }
                },

            },

            // healthChangeDetail: "Health Change Detail",
            // financeChangeDetail: "Finance Change Detail",


        };
        this.flagChangeHandler = this.flagChangeHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);




    }

    // componentWillUpdate() 
    // { 
    // 	console.log("componentWillUpdate()"); 
    // }

    //handle flag state, to show/hide certin sections
    flagChangeHandler = event => {
        let { visibilityFlag } = { ...this.state };
        let currentVisibility = visibilityFlag;
        let tagValue = event.target.value;
        currentVisibility[tagValue] = !(visibilityFlag[tagValue]);

        this.setState({ [visibilityFlag]: currentVisibility });
    }

    changeHandler = event => {
        let name = event.target.name;
        let value = event.target.value;

        let updatedControls = {
            ...this.state.formControls
        };

        let updatedFormElement = {
            ...updatedControls[name]
        };

        // let updatedFormElement = updatedControls[name];
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = formValidator(value, updatedFormElement.validationRules);

        updatedControls[name] = updatedFormElement;

        this.setState({
            formControls: updatedControls,
        });
    }




    formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }


    render() {

        return (
            // section for health, weight, finance changing 
            <div className="Transamerica-LifeInsuranceDemo">
                <form>

                    {/* FirstSection in Form - question one :  Have you experienced significant changes in Weight, Health, or Finances"? (select all that apply)*/}
                    <div>
                        <div>
                            <div>Have you experienced significant changes in Weight, Health or Finances ? (select that all apply)</div>
                            <button value="weight" type="button" onClick={this.flagChangeHandler}>Weight</button>
                            <button value="health" type="button" onClick={this.flagChangeHandler}>health</button>
                            <button value="finance" type="button" onClick={this.flagChangeHandler}>finance</button>

                        </div>

                        {/* Weight Change Detail */}
                        {
                            this.state.visibilityFlag.weight &&
                            <div>
                                <div>
                                    <TextInput type="text" name="weightChangeDetail" placeholder={this.state.formControls.weightChangeDetail.placeholder} onChange={this.changeHandler} />
                                </div>
                                {/* show error of meeting requirement */}
                                {(!this.state.formControls.weightChangeDetail.valid && this.state.formControls.weightChangeDetail.touched) ? (<p>Input not fullfill requirement</p>) : null}
                            </div>
                        }

                        {/* Health Change Detail */}
                        {
                            this.state.visibilityFlag.health &&
                            <div>
                                <div>
                                    <TextInput type="text" name="healthChangeDetail" placeholder={this.state.formControls.healthChangeDetail.placeholder} onChange={this.changeHandler} />
                                </div>
                                {/* show error of meeting requirement */}
                                {(!this.state.formControls.healthChangeDetail.valid && this.state.formControls.healthChangeDetail.touched) ? (<p>Input not fullfill requirement</p>) : null}
                            </div>
                        }

                        {/* finance Change Detail */}
                        {
                            this.state.visibilityFlag.finance &&
                            <div>
                                <div>
                                    <TextInput type="text" name="financeChangeDetail" placeholder={this.state.formControls.financeChangeDetail.placeholder} onChange={this.changeHandler} />
                                </div>
                                {/* show error of meeting requirement */}
                                {(!this.state.formControls.financeChangeDetail.valid && this.state.formControls.financeChangeDetail.touched) ? (<p>Input not fullfill requirement</p>) : null}
                            </div>
                        }



                    </div>

                    {/* SecondSection in Form - question two : Biological siblings  */}
                    <div>
                        <div>
                            <div>Do you have any biological siblings? </div>
                            <div>
                                <label>Brother(s)
                                    <TextInput type={tagType.number} name={tagName.numberOfBiologicalBrothers} value={this.state.formControls.numberOfBiologicalBrothers.value} placeholder={this.state.formControls.numberOfBiologicalBrothers.placeholder} onChange={this.changeHandler} />
                                </label>
                                {
                                    this.state.formControls.numberOfBiologicalBrothers.value &&
                                    <div>
                                        <label>Brothers Siblings' health
                                            <TextInput type={tagType.text} name={tagName.healthOfBiologicalBrothers} value={this.state.formControls.healthOfBiologicalBrothers.value} placeholder={this.state.formControls.healthOfBiologicalBrothers.placeholder} onChange={this.changeHandler} />
                                        </label>
                                    </div>
                                }
                            </div>

                            <div>
                                <label>Sister(s)
                                    <TextInput type={tagType.number} name={tagName.numberOfBiologicalSisters} value={this.state.formControls.numberOfBiologicalSisters.value} placeholder={this.state.formControls.numberOfBiologicalSisters.placeholder} onChange={this.changeHandler} />
                                </label>
                                {
                                    this.state.formControls.numberOfBiologicalSisters.value &&
                                    <div>
                                        <label>Sister Siblings' health
                                            <TextInput type={tagType.text} name={tagName.healthOfBiologicalSisters} value={this.state.formControls.healthOfBiologicalSisters.value} placeholder={this.state.formControls.healthOfBiologicalSisters.placeholder} onChange={this.changeHandler} />
                                        </label>
                                    </div>
                                }
                            </div>
                        </div>

                    </div>

                    {/* ThirdSection in Form - question three: Biological Father&&Mother Living||Deceased  */}
                    <div>
                        <div>BiologicalParents</div>
                        <div>
                            <label>
                                <select name={tagName.biologicalFather} value={this.state.formControls.biologicalFather.value} onChange={this.changeHandler}  >
                                    <option name={tagName.biologicalFather} value="Living" >Living</option>
                                    <option name={tagName.biologicalFather} value="Deseased">Deseased</option>
                                    <option name={tagName.biologicalFather} value="Not willing to disclosure">Not willing to disclosure</option>
                                </select>
                                Father
                            </label>

                        </div>
                        <div>
                            {this.state.formControls.biologicalFather.value == "Living" &&
                                <label>Father's general health
                                        <TextInput name={tagName.healthOfBiologicalFather} placeholder={this.state.formControls.healthOfBiologicalFather.placeholder} value={this.state.formControls.healthOfBiologicalFather.value} onChange={this.changeHandler} />
                                </label>
                            }

                        </div>

                        <div>
                            <label>
                                <select name={tagName.biologicalMother} value={this.state.formControls.biologicalMother.value} onChange={this.changeHandler}  >
                                    <option name={tagName.biologicalMother} value="Living" >Living</option>
                                    <option name={tagName.biologicalMother} value="Deseased">Deseased</option>
                                    <option name={tagName.biologicalMother} value="Not willing to disclosure">Not willing to disclosure</option>
                                </select>
                                Father
                            </label>

                        </div>
                        <div>
                            {this.state.formControls.biologicalMother.value == "Living" &&
                                <label>Mother's general health
                                        <TextInput name={tagName.healthOfBiologicalMother} placeholder={this.state.formControls.healthOfBiologicalMother.placeholder} value={this.state.formControls.healthOfBiologicalMother.value} onChange={this.changeHandler} />
                                </label>
                            }

                        </div>
                    </div>



                    {/* FourthSection in Form - will be keep working on after appearance figured */}





                    <div>
                        <button onClick={this.formSubmitHandler}>Submit</button>
                    </div>
                </form>
            </div>










        )
    }
}
export default QuoteForms;
