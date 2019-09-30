import React from "react";
import formValidator from "../../Tools/FormValidator";
import TextInput from "../../Utilities/TextInput";
import './QuoteForms.css';

//items from React-Bootstrap
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { ButtonToolbar, Button } from 'react-bootstrap';




const tagName = {
    healthOfBiologicalBrothers: "healthOfBiologicalBrothers",
    numberOfBiologicalBrothers: "numberOfBiologicalBrothers",
    healthOfBiologicalSisters: "healthOfBiologicalSisters",
    numberOfBiologicalSisters: "numberOfBiologicalSisters",
    biologicalFather: "biologicalFather",
    healthOfBiologicalFather: "healthOfBiologicalFather",
    biologicalMother: "biologicalMother",
    healthOfBiologicalMother: "healthOfBiologicalMother",
    otherActivities: "otherActivities",
    militaryExperience: "militaryExperience",
    drinkPerWeek: "drinkPerWeek",
    nicoteneLast5Years: "nicoteneLast5Years",
    drugUseLast5Years: "drugUseLast5Years",
    diagnosedIssue: "diagnosedIssue",


};

const tagType = {
    text: "text",
    number: "number",
}

class QuoteForms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPageNumber: 1,
            
            visibilityFlag: {
                weight: false,
                health: false,
                finance: false,
                military: false,
                drugUsage: false,
                diagnose: false,
                irregularHeartBeat: false,
                irregularHeartBeatHospitalized: false,
                heartAttack: false,
                pacemaker: false,

                // biologicalSiblings: false,
            },
            medicationHistory: [
                { detail: "the first detail" },
                { detail: "the second detail" }

            ],
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
                otherActivities: {
                    value: "",
                    placeholder: "Other activities such as: Rodeos, Zorbing, Bobsledding, etc...",
                    valid: false,
                    touched: false,
                    validationRules: {

                    }
                },
                militaryExperience: {
                    value: "",
                    placeholder: "Tell us your military Experience, like: function/title/ranks",
                    valid: false,
                    touched: false,
                    validationRules: {

                    }
                },
                drinkPerWeek: {
                    value: "",
                    placeholder: "Drink per week",
                    valid: false,
                    touched: false,
                    validationRules: {

                    }
                },
                nicoteneLast5Years: {
                    value: "",
                    placeholder: "Nicotine usage ",
                    valid: false,
                    touched: false,
                    validationRules: {

                    }
                },
                drugUseLast5Years: {
                    value: "",
                    placeholder: "please indicate your prescription ",
                    valid: false,
                    touched: false,
                    validationRules: {

                    }
                },
                diagnosedIssue: {
                    value: "",
                    placeholder: "diagnosed issue from past ",
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
        this.addMedicationHistory = this.addMedicationHistory.bind(this);
        this.pageHandler = this.pageHandler.bind(this);

    }

    // componentWillUpdate() 
    // { 
    // 	console.log("componentWillUpdate()"); 
    // }

    //handle flag state, to show/hide certin sections

    flagChangeHandler = event => {

        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value)

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
        // console.log(this.state);
        // const data = new FormData(event.target);
        // console.log(data);
        // console.log(JSON.stringify(data));
        let data = new FormData(event.target);
        for (var pair of data.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

    }

    addMedicationHistory = (event) => {
        event.preventDefault();
        // console.log("seccess");
        this.setState((prevState) => ({
            medicationHistory: [...prevState.medicationHistory, { detail: "" }],
        }));
    }

    pageHandler = (event) => {
        event.preventDefault();
        if(event.target.value == "nextPage" && this.state.currentPageNumber<6){
            this.setState({currentPageNumber: this.state.currentPageNumber + 1});
        }else if(event.target.value == "previousPage"&& this.state.currentPageNumber>1){
            this.setState({currentPageNumber: this.state.currentPageNumber- 1});
        }else{
            console.log("no");
        }

      }

    render() {

        return (
            <div>
                <div className="background">
                    <Container>
                        <div className="centering-container">
                            <Row>
                                <Col xs={1}>
                                    <div className="left-button">
                                        <button className="button button-prev" onClick={this.pageHandler} value="previousPage">Prev</button>
                                    </div>
                                </Col>
                                <Col xs={10}>
                                    <div className="center-form">
                                        <form onSubmit={this.formSubmitHandler}>
                                            {/* page-1 General Health */}
                                            <div className={this.state.currentPageNumber==1 ? "page-1" : "hide-page"}> 
                                            
                                                <Container>
                                                    <Row> 
                                                        <label>Have you experienced significant changes in Weight, Health or Finances ? (select that all apply)</label>
                                                    </Row>
                                                    {/* three buttons for clicking */}
                                                    <Row>
                                                        <Col >
                                                            <button className="button button-push" value="health" type="button" onClick={this.flagChangeHandler}>health</button>
                                                        </Col>
                                                        <Col >
                                                            <button className="button button-push" value="weight" type="button" onClick={this.flagChangeHandler}>Weight</button>
                                                        </Col>
                                                        <Col >
                                                            <button className="button button-push" value="finance" type="button" onClick={this.flagChangeHandler}>finance</button>
                                                        </Col>
                                                    </Row>
                        
                                                    {/* Health Change Detail */}{/* show error of meeting requirement */}
                                                    {this.state.visibilityFlag.health &&
                                                            <Row>
                                                                <Col>
                                                                    <TextInput type="text" name="healthChangeDetail" placeholder={this.state.formControls.healthChangeDetail.placeholder} onChange={this.changeHandler} />
                                                                </Col>
                                                            </Row>       
                                                    }
                                                    {(!this.state.formControls.healthChangeDetail.valid && this.state.formControls.healthChangeDetail.touched) 
                                                        ? (<Row>Input not fullfill requirement</Row>) : null
                                                    }

                                                    {/* Weight Change Detail */}{/* show error of meeting requirement */}
                                                    {
                                                        this.state.visibilityFlag.weight &&
                                                        <Row>
                                                                <Col>
                                                                    <TextInput type="text" name="weightChangeDetail" placeholder={this.state.formControls.weightChangeDetail.placeholder} onChange={this.changeHandler} />
                                                                </Col>
                                                            </Row>
                                                    }
                                                    {(!this.state.formControls.weightChangeDetail.valid && this.state.formControls.weightChangeDetail.touched)
                                                        ? (<Row>Input not fullfill requirement</Row>) : null
                                                    }

                                                    {/* finance Change Detail */}{/* show error of meeting requirement */}
                                                    {
                                                        this.state.visibilityFlag.finance &&
                                                        <Row>
                                                            <Col>
                                                                <TextInput type="text" name="financeChangeDetail" placeholder={this.state.formControls.financeChangeDetail.placeholder} onChange={this.changeHandler} />
                                                            </Col>
                                                        </Row>
                                                    }
                                                    {(!this.state.formControls.financeChangeDetail.valid && this.state.formControls.financeChangeDetail.touched) 
                                                        ? (<Row>Input not fullfill requirement</Row>) : null
                                                    }
                                                    <Row>
                                                        <label>Do you have any biological siblings?</label>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <label>Brother(s)</label>   
                                                        </Col>
                                                        <Col>
                                                            <TextInput type={tagType.number} name={tagName.numberOfBiologicalBrothers} value={this.state.formControls.numberOfBiologicalBrothers.value} placeholder={this.state.formControls.numberOfBiologicalBrothers.placeholder} onChange={this.changeHandler} />
                                                        </Col>
                                                        
                                                    </Row>
                                                    {this.state.formControls.numberOfBiologicalBrothers.value > 0 &&
                                                        <Row>
                                                            <Col>
                                                                <label>Brothers Siblings' health</label>
                                                            </Col>
                                                            <Col>
                                                                <TextInput type={tagType.text} name={tagName.healthOfBiologicalBrothers} value={this.state.formControls.healthOfBiologicalBrothers.value} placeholder={this.state.formControls.healthOfBiologicalBrothers.placeholder} onChange={this.changeHandler} />
                                                            </Col>    
                                                        </Row>
                                                    }
                                                    <Row>
                                                        <Col>
                                                            <label>Sister(s)</label>
                                                        </Col>
                                                        <Col>
                                                            <TextInput type={tagType.number} name={tagName.numberOfBiologicalSisters} value={this.state.formControls.numberOfBiologicalSisters.value} placeholder={this.state.formControls.numberOfBiologicalSisters.placeholder} onChange={this.changeHandler} />
                                                        </Col> 
                                                    </Row>
                                                    {this.state.formControls.numberOfBiologicalSisters.value > 0 &&
                                                        <Row>
                                                            <Col>
                                                                <label>Sisters Siblings' health</label>
                                                            </Col>
                                                            <Col>
                                                                <TextInput type={tagType.text} name={tagName.healthOfBiologicalSisters} value={this.state.formControls.healthOfBiologicalSisters.value} placeholder={this.state.formControls.healthOfBiologicalSisters.placeholder} onChange={this.changeHandler} />
                                                            </Col>      
                                                        </Row>
                                                    }
                                                    <Row>
                                                        <label>Biological Parents: </label>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <label>Father</label>  
                                                        </Col>
                                                        <Col>
                                                            <select name={tagName.biologicalFather} value={this.state.formControls.biologicalFather.value} onChange={this.changeHandler}  >
                                                                <option name={tagName.biologicalFather} value="Living" >Living</option>
                                                                <option name={tagName.biologicalFather} value="Deseased">Deseased</option>
                                                                <option name={tagName.biologicalFather} value="Not willing to disclosure">Not willing to disclosure</option>
                                                            </select>
                                                        </Col>
                                                    </Row>
                                                    {this.state.formControls.biologicalFather.value == "Living" &&
                                                        <Row>
                                                            <Col>
                                                                <label>Father's general health</label>
                                                            </Col>
                                                            <Col>
                                                                <TextInput name={tagName.healthOfBiologicalFather} placeholder={this.state.formControls.healthOfBiologicalFather.placeholder} value={this.state.formControls.healthOfBiologicalFather.value} onChange={this.changeHandler} />
                                                            </Col>
                                                            
                                                        </Row>
                                                    }

                                                    <Row>
                                                        <Col>
                                                            <label>Mother</label>  
                                                        </Col>
                                                        <Col>
                                                            <select name={tagName.biologicalMother} value={this.state.formControls.biologicalMother.value} onChange={this.changeHandler}  >
                                                                <option name={tagName.biologicalMother} value="Living" >Living</option>
                                                                <option name={tagName.biologicalMother} value="Deseased">Deseased</option>
                                                                <option name={tagName.biologicalMother} value="Not willing to disclosure">Not willing to disclosure</option>
                                                            </select>
                                                        </Col>
                                                    </Row>
                                                    {this.state.formControls.biologicalMother.value == "Living" &&
                                                        <Row>
                                                            <Col>
                                                                <label>Mother's general health</label>
                                                            </Col>
                                                            <Col>
                                                                <TextInput name={tagName.healthOfBiologicalMother} placeholder={this.state.formControls.healthOfBiologicalMother.placeholder} value={this.state.formControls.healthOfBiologicalMother.value} onChange={this.changeHandler} />
                                                            </Col>
                                                        </Row>
                                                    }
                                                </Container>
                                            </div>
                                            
                                            {/* page-2 Activities */}
                                            <div className={this.state.currentPageNumber==2 ? "page-2" : "hide-page"}>
                                                <Container>
                                                    <Row>
                                                        <label>Do you actively participate in any of the following activities?</label>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <input type="checkbox" name="activity-1" value="Skydiving" /> 
                                                        </Col>
                                                        <Col>
                                                            <label>Skydiving</label>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <input type="checkbox" name="activity-2" value="Flying" />
                                                        </Col>
                                                        <Col>
                                                            <label>Flying</label>
                                                        </Col>
                                                        
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <input type="checkbox" name="activity-3" value="ScubaDiving" />
                                                        </Col>
                                                        <Col>
                                                            <label>Scuba Diving</label>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <input type="checkbox" name="Rock/activity-4" value="Rock/MountainClimbing" />
                                                        </Col>
                                                        <Col>
                                                            Mountain Climbing
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <label>Do you have any other activities that not listed above?</label>
                                                    </Row>
                                                    <Row>
                                                        <TextInput type={tagType.text} name={tagName.otherActivities} value={this.state.formControls.otherActivities.value} placeholder={this.state.formControls.otherActivities.placeholder} onChange={this.changeHandler} />
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <label>Are you in the military?</label>
                                                        </Col>
                                                        <Col>
                                                            <label className="switch" >
                                                                <input type="checkbox" value="military" onClick={this.flagChangeHandler} />
                                                                <span className="slider" />
                                                            </label>
                                                        </Col>
                                                    </Row>
                                                    {this.state.visibilityFlag.military &&
                                                        <Row>
                                                            <TextInput type={tagType.text} name={tagName.militaryExperience} placeholder={this.state.formControls.militaryExperience.placeholder} onChange={this.changeHandler} />
                                                        </Row>
                                                    }

                                                    
                                                </Container>              
                                            </div>

                                            
                                            {/* page-3 Drugs/Alcohol/Tobacco */}
                                            <div className={this.state.currentPageNumber==3 ? "page-3" : "hide-page"}>
                                                <Container>
                                                    <Row>
                                                        <label>Discribe your drugs, alcohol and nicotene use:</label>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <label>Drinks per week?</label>
                                                        </Col>
                                                        <Col>
                                                            <TextInput type={tagType.number} name={tagName.drinkPerWeek} placeholder={this.state.formControls.drinkPerWeek.placeholder} onChange={this.changeHandler} />
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <label>Nocotine use in last 5 years</label>
                                                        </Col>
                                                        <Col>
                                                            <TextInput type={tagType.text} name={tagName.nicoteneLast5Years} placeholder={this.state.formControls.nicoteneLast5Years.placeholder} onChange={this.changeHandler} />
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <label>Drug user in last 5 years</label>
                                                        </Col>
                                                        <Col>
                                                            <select onChange={this.flagChangeHandler} >
                                                                <option value="drugUsage">no</option>
                                                                <option value="drugUsage">yes</option>
                                                            </select>
                                                        </Col>
                                                    </Row>
                                                    {this.state.visibilityFlag.drugUsage &&
                                                        <Row>
                                                            <Col><label>please indicate what drugs you have used in last 5 years: </label></Col>
                                                            <Col>
                                                                <TextInput type={tagType.text} name={tagName.drugUseLast5Years} placeholder={this.state.formControls.drugUseLast5Years.placeholder} onChange={this.changeHandler} />
                                                            </Col>
                                                        </Row>
                                                    }



                                                </Container>
                                            </div>

                                            {/* page-4 Health */}
                                            <div className={this.state.currentPageNumber==4 ? "page-4" : "hide-page"}>
                                                <Container>
                                                    <Row>
                                                        <label>Have you had any of the following:</label>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <input type="checkbox" name="healthIssue-1" value="GeneralInjuries" /> General Injuries
                                                        </Col>
                                                        <Col>
                                                            <input type="checkbox" name="healthIssue-2" value="Disabilities" /> Disabilities
                                                        </Col>
                                                        <Col>
                                                            <input type="checkbox" name="healthIssue-3" value="HIV" /> AIDS, HIV, Test for AIDS/HIV
                                                        </Col>
                                                        <Col>
                                                            <input type="checkbox" name="healthIssue-4" value="RestrictionActivities" /> Restriction of Activities
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <label>have you been diagnosed, treated, teasted positive for, or given medical advice?</label>
                                                        </Col>
                                                        <Col>
                                                            <label className="switch" >
                                                                <input type="checkbox" value="diagnose" onClick={this.flagChangeHandler} />
                                                                <span className="slider" />
                                                            </label>
                                                        </Col>
                                                    </Row>
                                                    {this.state.visibilityFlag.diagnose &&
                                                        <Row>
                                                            <TextInput type={tagType.text} name={tagName.diagnosedIssue} placeholder={this.state.formControls.diagnosedIssue.placeholder} onChange={this.changeHandler} />
                                                        </Row>
                                                    }
                                                </Container>
                                            </div>
                                            
                                            {/* page-5 Medications */}
                                            <div className={this.state.currentPageNumber==5 ? "page-5" : "hide-page"}>
                                                <Container>
                                                    <Row>
                                                        <Col>
                                                            <label>We see that you are cuttently perscribed, or have taken, these medications. Please confirm uncheck any that are not accurate</label>
                                                        </Col>
                                                        <Col>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="medication-1" value="Acebutolo" /> 
                                                                </Col>
                                                                <Col>
                                                                    Acebutolo (Secral)
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="medication-2" value="Valsartan" /> 
                                                                </Col>
                                                                <Col>
                                                                    Valsartan (Diovan)
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="medication-3" value="Bisoprolol" /> 
                                                                </Col>
                                                                <Col>
                                                                    Bisoprolol (Zebeta, Ziac)
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="medication-4" value="Warfarin" /> 
                                                                </Col>
                                                                <Col>
                                                                    Warfarin
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                    {this.state.medicationHistory.map((obj, idx) => {
                                                            let medicationId = `Medication-${idx}`;
                                                            return (
                                                                <Row key={idx}>
                                                                    <Col>
                                                                        <label key={medicationId}>Medication #{idx} &nbsp;</label>
                                                                    </Col>
                                                                    <Col>
                                                                        <input type="text" name={medicationId} placeholder={obj.detail } size="35"/>  
                                                                    </Col>
                                                                </Row>
                                                            )
                                                        })
                                                    }
                                                    <Row>
                                                        <Col>
                                                            <button type="button" onClick={this.addMedicationHistory}>add missing history</button>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                            
                                            {/* page-6 Conditions */}
                                            <div className={this.state.currentPageNumber==6 ? "page-6" : "hide-page"}>
                                                <Container>
                                                    <Row>
                                                        <label>Are these medicaiton related to any of the following conditions?</label>
                                                    </Row>
                                                    <Row>
                                                        {/* first column */}
                                                        <Col>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-1" value="aneurysm" />
                                                                </Col>
                                                                <Col>
                                                                    <label>Aneurysm</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-2" value="irregularHeartBeat" onChange={this.flagChangeHandler}/>
                                                                </Col>
                                                                <Col>
                                                                    <label>Irregular Hear Beat</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-3" value="bicuspidAorticValve" />
                                                                </Col>
                                                                <Col>
                                                                    <label>bicuspidAorticValve</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-4" value="coarctationOfAorta" />
                                                                </Col>
                                                                <Col>
                                                                    <label>Coarctation of Aorta</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-5" value="pericarditis" />
                                                                </Col>
                                                                <Col>
                                                                    <label>Pericarditis</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-6" value="chestPain" />
                                                                </Col>
                                                                <Col>
                                                                    <label>Chest Pain or Pressure in Chest</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col >
                                                                    <input type="checkbox" name="condition-7" value="heartValveAbnormality" />
                                                                </Col>
                                                                <Col >
                                                                    <label>Heart Valve Abnormality</label>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        {/* second column */}
                                                        <Col>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-8" value="heartFailure" />
                                                                </Col>
                                                                <Col>
                                                                    <label>Heart Failure</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-9" value="highBloodPressure"/>
                                                                </Col>
                                                                <Col>
                                                                    <label>High Blood Pressure</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-10" value="aorticStenosis" />
                                                                </Col>
                                                                <Col>
                                                                    <label>Aortic Stenosis</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-11" value="endocartitis" />
                                                                </Col>
                                                                <Col>
                                                                    <label>Endocarditis</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-12" value="heartAttack" onChange={this.flagChangeHandler}/>
                                                                </Col>
                                                                <Col>
                                                                    <label>Heart Attack</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-13" value="mitralValvaProlspse" />
                                                                </Col>
                                                                <Col>
                                                                    <label>Mitral Valve Prolapse (MVP)</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col >
                                                                    <input type="checkbox" name="condition-14" value="aorticInsufficiency" />
                                                                </Col>
                                                                <Col >
                                                                    <label>Aortic Insufficient</label>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        {/* third column */}
                                                        <Col>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-15" value="murmur" />
                                                                </Col>
                                                                <Col>
                                                                    <label>Murmur</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-16" value="mitralStenosis"/>
                                                                </Col>
                                                                <Col>
                                                                    <label>Mitral Stenosis</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-17" value="cardiomyopathy" />
                                                                </Col>
                                                                <Col>
                                                                    <label>Cardiomyopathy</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-18" value="tetralogyOfFallot" />
                                                                </Col>
                                                                <Col>
                                                                    <label>Tetralogy of Fallot</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-19" value="heartEnlargement"/>
                                                                </Col>
                                                                <Col>
                                                                    <label>Heart Enlargement</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <input type="checkbox" name="condition-20" value="pacemaker" onChange={this.flagChangeHandler}/>
                                                                </Col>
                                                                <Col>
                                                                    <label>Pacemaker</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col >
                                                                    <input type="checkbox" name="condition-21" value="congenitalCardiac" />
                                                                </Col>
                                                                <Col >
                                                                    <label>Congenital Cardiac</label>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>

                                                    {/* if irregularHeartBeat Clicked */}
                                                    {this.state.visibilityFlag.irregularHeartBeat &&
                                                        <Container>
                                                            <Row>
                                                                <label>What type of symptom(s) ? please select all</label>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <Row><input type="checkbox" /> Palpitations, Lown-Gangong-Levine Syndrome(LGL)</Row>
                                                                    <Row><input type="checkbox" /> Tachycardia(fast heartbeat)</Row>
                                                                    <Row><input type="checkbox" /> Ventricular Fibrillation</Row>
                                                                    <Row><input type="checkbox" /> premature beats</Row>   
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <label>How Many times in the past year have you experienced the condition?
                                                                    <input type="date" />
                                                                        </label>
                                                                </Col>
                                                                <Col>
                                                                    <label>In the past 12 months have you experienced syncope, dizziness shortnessof breath, fainting, chest pains or palpitations related to this condition?
                                                                        <label className="switch" >
                                                                            <input type="checkbox" />
                                                                                <span className="slider" />
                                                                        </label>
                                                                        </label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <label>When was the last time you experienced symtoms of this condition?
                                                                    <input type="date" />
                                                                    </label>
                                                                </Col>
                                                                <Col>
                                                                    <label>Where you hospitalized for this condition
                                                                    <label className="switch" >
                                                                            <input type="checkbox" value="irregularHeartBeatHospitalized" onChange={this.flagChangeHandler} />
                                                                            <span className="slider" />
                                                                        </label>
                                                                    </label>
                                                                </Col>
                                                            </Row>
                                                                
                                                        </Container>
                                                    }

                                                    {/* if hospitalization is clicked in irregular heatbeat */}
                                                    {this.state.visibilityFlag.irregularHeartBeatHospitalized &&
                                                        <Container>
                                                            <Row>
                                                                <Col>Hospitalized From <input type="date" /> to <input type="date" /></Col>
                                                                <Col>Physician's Name: <input className="underlineText" type="text" /> <button value="search" type="button" >search</button> </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>Date of Surgery <input className="underlineText" type="text" /> </Col>
                                                                <Col>Address <input className="underlineText" type="text" /> </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>Implication/Results: <input className="underlineText" type="text" /></Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>Treatments: <input className="underlineText" type="text" /></Col>
                                                            </Row>
                                                        </Container>
                                                    }

                                                    {/* expand if  Heart Attack clicked */}
                                                    {this.state.visibilityFlag.heartAttack &&
                                                        <Container>
                                                            <Row>skipped for now </Row>
                                                        </Container>
                                                    }

                                                    {/* expand if packmaker clicked */}
                                                    {this.state.visibilityFlag.pacemaker &&
                                                        <Container>
                                                            <Row>
                                                                <Col>
                                                                    <Row>
                                                                        <label>Date of Implantation
                                                                    <input type="date" />
                                                                        </label>
                                                                    </Row>
                                                                    <Row>
                                                                        <label>any diagnosis of following: sick sinus syndrome, carotid sinus syndrom, heart blocks, or post-cardiac surgery arrhythmia?
                                                                    <label className="switch" >
                                                                                <input type="checkbox" />
                                                                                <span className="slider" />
                                                                            </label>
                                                                        </label>
                                                                    </Row>
                                                                    <Row>
                                                                        <label>Have you been diagnosed with coronary artey disease or myocardial infarction(heart attack)?
                                                                    <label className="switch" >
                                                                                <input type="checkbox" />
                                                                                <span className="slider" />
                                                                            </label>
                                                                        </label>
                                                                    </Row>
                                                                    <Row>
                                                                        <label>Date of Diagnosis
                                                                    <input type="date" />
                                                                        </label>
                                                                    </Row>
                                                                    <Row>
                                                                        <label>Physician's Name:
                                                                        <input className="underlineText" type="text" />
                                                                            <button type="button" >search</button>
                                                                        </label>
                                                                    </Row>
                                                                    <Row>
                                                                        <label>Address
                                                                        <input className="underlineText" type="text" />
                                                                        </label>
                                                                    </Row>
                                                                </Col>
                                                                <Col>
                                                                        <p>what tests have been performed or advised to be performed due to this condition?</p>
                                                                        <div /><input type="checkbox" /> Pacemaker interrogation/check
                                                                    <div /><input type="checkbox" /> Angiography/Cardiac Catheterization
                                                                    <div /><input type="checkbox" /> Ultrasound, CT scan or MRI
                                                                    <div /><input type="checkbox" /> other.
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    }
                                                    <div className="submit-button">
                                                        <button className="button">Submit</button>
                                                    </div>
                                                </Container>
                                            </div>
                                        </form>
                                    </div>
                                </Col>
                                <Col xs={1}>
                                    <div className="right-button">
                                        <button className="button button-next " onClick={this.pageHandler} value="nextPage">Next</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>


        )
    }
}
export default QuoteForms;
