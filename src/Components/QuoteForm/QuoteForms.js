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

//animation
import {CSSTransitionGroup,CSSTransition}  from 'react-transition-group';
import Switch from "react-switch";





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
    otherRacingActivities: "otherActivities",
    militaryExperience: "militaryExperience",
    drinkPerWeek: "drinkPerWeek",
    nicoteneLast5Years: "nicoteneLast5Years",
    drugUseLast5Years: "drugUseLast5Years",
    diagnosedIssue: "diagnosedIssue",
    typeOfNicoteneUse: "typeOfNicoteneUse",
    useOfFrequency: "useOfFrequency",
    addMoreConditions: "addMoreConditions",
    haveBiologicalSiblings: "haveBiologicalSiblings",
    nonPrescriptionLast5Years: "nonPrescriptionLast5Years"
};

const tagType = {
    text: "text",
    number: "number",
}

const generalHealthIssues=["Autoimmune Diseases","Allergies & Asthma", "Cancer", "Celiac Disease", "Crohn's & Colitis",
        "Heart Disease", "Infectious Diseases", "Liver Disease", "Lupus", "Multiple Sclerosis", "Relapsing Polychondrits", 
        "Rheumatoid Arthritis", "Scleroderma", "Type 1 Diabetes"];


class QuoteForms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            GeneralHealthIssues: [],

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
                nicoteneLast5Years: false,
                addMoreConditions: false,
                haveBiologicalSiblings: false,
                nonPrescriptionLast5Years: false,


                // biologicalSiblings: false,
            },
            medicationHistory: [
                { perscription: "" },

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
                otherRacingActivities: {
                    value: "",
                    placeholder: "Any kind of racing? Like Car racing, or other motorsports etc...",
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
                    placeholder: "",
                    valid: false,
                    touched: false,
                    validationRules: {
                        
                    }
                },
                typeOfNicoteneUse: {
                    value: "",
                    placeholder: "",
                    valid: false,
                    touched: false,
                    validationRules: {
                    }
                },
                useOfFrequency: {
                    value: "",
                    placeholder: "",
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
                nonPrescriptionLast5Years: {
                    value: "",
                    placeholder: "",
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
        this.generalHealthChangeHandler = this.generalHealthChangeHandler.bind(this);
        this.flagToggleSwitchHandler = this.flagToggleSwitchHandler.bind(this);
        this.removeMedicationHistory = this.removeMedicationHistory.bind(this);
        

    }

    // componentWillUpdate() 
    // { 
    // 	console.log("componentWillUpdate()"); 
    // }

    //handle flag state, to show/hide certin sections

    flagChangeHandler = event => {
        event.preventDefault();

        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value)

        let { visibilityFlag } = { ...this.state };
        let currentVisibility = visibilityFlag;
        let tagValue = event.target.value;
        currentVisibility[tagValue] = !(visibilityFlag[tagValue]);

        this.setState({ [visibilityFlag]: currentVisibility });
    }

    flagToggleSwitchHandler(tagValue){
        
        let { visibilityFlag } = { ...this.state };
        let currentVisibility = visibilityFlag;
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

    addMedicationHistory = (event) => {
        event.preventDefault();
        
        // console.log("seccess");

        this.setState((prevState) => ({
            medicationHistory: [...prevState.medicationHistory, { perscription: "" }],
        }));
    }


    removeMedicationHistory = (idx, event) => {
        event.preventDefault();
        // console.log(idx,event);

        // console.log(this.state.medicationHistory);

        let currentState = this.state.medicationHistory;
        currentState.splice(idx,1);

        this.setState({
            medicationHistory: currentState,
        });
        

    }

    // medicationHistory: [
    //     { perscription: "" },

    // ],

    handleAdditionalMedication=(idx,event) =>{
        let Content = this.state.medicationHistory;
        Content[idx].perscription=event.target.value;

        // this.setState((prevState) => ({
        //     medicationHistory: [...Content],
        // }));
        this.setState({
            medicationHistory: Content,
        });


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
    
    generalHealthChangeHandler(idx, event){
        let healthChanges = [...this.state.GeneralHealthIssues];
        if(event.target.checked){
            healthChanges[idx] = event.target.value;
            this.setState({GeneralHealthIssues: healthChanges});
        }else if(!event.target.checked){
            healthChanges[idx] = null;
            this.setState({GeneralHealthIssues: healthChanges});
        }
    };
    
    
    render() {

        return (
            <div>
                <div className="background">
                    <Container>
                        <div className="centering-container">
                            <Row>
                                
                               
                                <Col xs={10} className="CenterFormRow">
                                    <div className="center-form">
                                        <form onSubmit={this.formSubmitHandler}>
                                        

                                            {/* page-1 General Health */}
                                            <CSSTransition in={this.state.currentPageNumber==1 } timeout={500} classNames="my-node"  unmountOnExit>
                                            <div className={this.state.currentPageNumber==1 ? "page-1" : "hide-page"}> 
                                                <Container >
                                                    <Row> 
                                                        <label>Have you experienced significant changes in Weight, Health or Finances ? (select that all apply)</label>
                                                    </Row>
                                                    {/* three buttons for clicking */}
                                                    
                                                    <Row >
                                                        <Col >
                                                            <button className={this.state.visibilityFlag.health? "button button-push-after" :"button button-push"} value="health" type="button" onClick={this.flagChangeHandler}>Health</button>
                                                                {/* Health Change Detail */}{/* show error of meeting requirement */}
                                                                {/* <CSSTransition in={this.state.visibilityFlag.health} timeout={500} classNames="my-node" unmountOnExit >
                                                                    <Row>
                                                                        <Col>
                                                                            <TextInput type="text" name="healthChangeDetail" placeholder={this.state.formControls.healthChangeDetail.placeholder} onChange={this.changeHandler} />
                                                                            <textarea name="healthChangeDetail" placeholder={this.state.formControls.healthChangeDetail.placeholder} onChange={this.changeHandler}  cols="20" rows="10" />
                                                                        </Col>
                                                                    </Row>       
                                                                </CSSTransition>
                                                                <CSSTransition in={!this.state.formControls.healthChangeDetail.valid && this.state.formControls.healthChangeDetail.touched} timeout={500} classNames="my-node" unmountOnExit >
                                                                    <Row>Input not fullfill requirement</Row>
                                                                </CSSTransition> */}
                                                        </Col>
                                                        <Col >
                                                            <button className={this.state.visibilityFlag.weight? "button button-push-after" :"button button-push"} value="weight" type="button" onClick={this.flagChangeHandler}>Weight</button>
                                                                {/* Weight Change Detail */}{/* show error of meeting requirement */}
                                                                {/* <CSSTransition in={this.state.visibilityFlag.weight} timeout={500} classNames="my-node" unmountOnExit >
                                                                    <Row>
                                                                            <Col>
                                                                                <TextInput type="text" name="weightChangeDetail" placeholder={this.state.formControls.weightChangeDetail.placeholder} onChange={this.changeHandler} />
                                                                                <textarea name="weightChangeDetail" placeholder={this.state.formControls.weightChangeDetail.placeholder} onChange={this.changeHandler}  cols="20" rows="10" />
                                                                            </Col>
                                                                    </Row>
                                                                </CSSTransition>
                                                                <CSSTransition in={!this.state.formControls.weightChangeDetail.valid && this.state.formControls.weightChangeDetail.touched} timeout={500} classNames="my-node" unmountOnExit >
                                                                    <Row>Input not fullfill requirement</Row>
                                                                </CSSTransition> */}
                                                        </Col>
                                                        <Col >
                                                            <button className={this.state.visibilityFlag.finance? "button button-push-after" :"button button-push"} value="finance" type="button" onClick={this.flagChangeHandler}>Finance</button>
                                                                {/* finance Change Detail */}{/* show error of meeting requirement */}
                                                                {/* <CSSTransition in={this.state.visibilityFlag.finance} timeout={500} classNames="my-node" unmountOnExit >
                                                                    <Row>
                                                                        <Col>
                                                                            <TextInput type="text" name="financeChangeDetail" placeholder={this.state.formControls.financeChangeDetail.placeholder} onChange={this.changeHandler} />
                                                                            <textarea name="financeChangeDetail" placeholder={this.state.formControls.financeChangeDetail.placeholder} onChange={this.changeHandler}  cols="20" rows="10" />
                                                                        
                                                                        </Col>
                                                                    </Row>
                                                                </CSSTransition>
                                                                <CSSTransition in={!this.state.formControls.financeChangeDetail.valid && this.state.formControls.financeChangeDetail.touched} timeout={500} classNames="my-node" unmountOnExit >
                                                                    <Row>Input not fullfill requirement</Row>
                                                                </CSSTransition> */}
                                                        </Col>
                                                    </Row>

                                                    <Row style={{paddingTop:20}}>
                                                        <label>Do you have any biological siblings?</label>
                                                        <Switch value={tagName.haveBiologicalSiblings} checked={this.state.visibilityFlag.haveBiologicalSiblings} onChange={(e) => this.flagToggleSwitchHandler("haveBiologicalSiblings",e)} />
                                                    </Row>
                                                    <CSSTransition in={this.state.visibilityFlag.haveBiologicalSiblings} timeout={500} classNames="my-node" unmountOnExit >
                                                        <div>
                                                        <Row className="label-input-left">
                                                            <Col>
                                                                <label>Brother(s)</label>  
                                                                <TextInput type={tagType.number} name={tagName.numberOfBiologicalBrothers} value={this.state.formControls.numberOfBiologicalBrothers.value} placeholder={this.state.formControls.numberOfBiologicalBrothers.placeholder} onChange={this.changeHandler} />
                                                                
                                                            </Col>
                                                        </Row>

                                                        <CSSTransition in={this.state.formControls.numberOfBiologicalBrothers.value > 0} timeout={500} classNames="my-node" unmountOnExit >
                                                            <Row className="label-input-left" style={{paddingLeft:30}}>
                                                                    <label>Do they have any common health condition below?</label>
                                                                    <Row>
                                                                        { generalHealthIssues.map( (issue, idx) => {
                                                                            let checkBoxName=`HealthIssue-${idx}`
                                                                            return(
                                                                                <Row className="checkbox" key={idx} >
                                                                                    {/* <input   type="checkbox"  name={checkBoxName} checked={this.state.GeneralHealthIssues.includes(issue)} onChange={this.handleGeneralHealthIssues} /> */}
                                                                                    <label >
                                                                                    <input type="checkbox" value={issue} name={checkBoxName} checked={this.state.GeneralHealthIssues.includes(issue)} onChange={(e)=> this.generalHealthChangeHandler(idx,e)} />
                                                                                    {issue}
                                                                                    </label>
                                                                                </Row>
                                                                            )})
                                                                        }
                                                                    </Row>
                                                                        <label >Others that you want to mention?
                                                                        <TextInput type={tagType.text} name={tagName.healthOfBiologicalBrothers} value={this.state.formControls.healthOfBiologicalBrothers.value} placeholder={this.state.formControls.healthOfBiologicalBrothers.placeholder} onChange={this.changeHandler} />
                                                                        </label>
                                                            </Row>
                                                        </CSSTransition>
                                                        
                                                       
                                                        <Row className="label-input-left">
                                                            <Col>
                                                                <label>Sister(s)</label>
                                                                <TextInput type={tagType.number} name={tagName.numberOfBiologicalSisters} value={this.state.formControls.numberOfBiologicalSisters.value} placeholder={this.state.formControls.numberOfBiologicalSisters.placeholder} onChange={this.changeHandler} />
                                                            </Col> 
                                                        </Row>

                                                        <CSSTransition in={this.state.formControls.numberOfBiologicalSisters.value > 0} timeout={500} classNames="my-node" unmountOnExit >
                                                            <Row>
                                                                <Col className="label-input-left" style={{paddingLeft:30}}>
                                                                    <label>Sisters Siblings' health</label>
                                                                    <TextInput type={tagType.text} name={tagName.healthOfBiologicalSisters} value={this.state.formControls.healthOfBiologicalSisters.value} placeholder={this.state.formControls.healthOfBiologicalSisters.placeholder} onChange={this.changeHandler} />
                                                                </Col>      
                                                            </Row>
                                                        </CSSTransition>

                                                    </div>
                                                    
                                                    </CSSTransition>

                                                    <Row>
                                                        <label>Biological Parents: </label>
                                                    </Row>
                                                    <Row>
                                                        <Col className="label-input-left">
                                                            <label>Father</label>  
                                                            <select name={tagName.biologicalFather} value={this.state.formControls.biologicalFather.value} onChange={this.changeHandler}  >
                                                                <option name={tagName.biologicalFather} value="Living" >Living</option>
                                                                <option name={tagName.biologicalFather} value="Deseased">Deseased</option>
                                                                <option name={tagName.biologicalFather} value="Unknow">Not willing to disclosure</option>
                                                            </select>
                                                        </Col>
                                                    </Row>

                                                    <CSSTransition in={this.state.formControls.biologicalFather.value == "Living"} timeout={500} classNames="my-node" unmountOnExit >
                                                        <Row>
                                                            <Col className="label-input-left" style={{paddingLeft:30}}>
                                                                <label>Father's general health</label>
                                                                <TextInput name={tagName.healthOfBiologicalFather} placeholder={this.state.formControls.healthOfBiologicalFather.placeholder} value={this.state.formControls.healthOfBiologicalFather.value} onChange={this.changeHandler} />
                                                            </Col>
                                                            
                                                        </Row>
                                                    </CSSTransition>

                                                    <Row>
                                                        <Col className="label-input-left">
                                                            <label>Mother</label>  
                                                            <select name={tagName.biologicalMother} value={this.state.formControls.biologicalMother.value} onChange={this.changeHandler}  >
                                                                <option name={tagName.biologicalMother} value="Living" >Living</option>
                                                                <option name={tagName.biologicalMother} value="Deseased">Deseased</option>
                                                                <option name={tagName.biologicalMother} value="Unknow">Not willing to disclosure</option>
                                                            </select>
                                                        </Col>
                                                    </Row>
                                                    <CSSTransition in={this.state.formControls.biologicalMother.value == "Living"} timeout={500} classNames="my-node" unmountOnExit >
                                                        <Row>
                                                            <Col className="label-input-left" style={{paddingLeft:30}}>
                                                                <label>Mother's general health</label>
                                                                <TextInput name={tagName.healthOfBiologicalMother} placeholder={this.state.formControls.healthOfBiologicalMother.placeholder} value={this.state.formControls.healthOfBiologicalMother.value} onChange={this.changeHandler} />
                                                            </Col>
                                                        </Row>
                                                    </CSSTransition>
                                                    
                                                </Container>
                                            </div>
                                            </CSSTransition>   

                                            {/* page-2 Activities */}
                                            <CSSTransition in={this.state.currentPageNumber==2 } timeout={500} classNames="my-node" >
                                            <div className={this.state.currentPageNumber==2 ? "page-2" : "hide-page"}>
                                                <Container>
                                                    <Row>
                                                        <label>Do you actively participate in any of the following activities?</label>
                                                    </Row>
                                                    <Row >
                                                        <Col>
                                                            <label> 
                                                            <input type="checkbox" name="activity-1" value="Skydiving" /> 
                                                            Skydiving</label>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <label>
                                                            <input type="checkbox" name="activity-2" value="Flying" />
                                                            Flying</label>
                                                        </Col>
                                                        
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <label>
                                                            <input type="checkbox" name="activity-3" value="ScubaDiving" />
                                                            Scuba Diving</label>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <label>
                                                            <input type="checkbox" name="activity-4" value="Rock/MountainClimbing" />
                                                            Rock/Mountain Climbing</label>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <label>
                                                            <input type="checkbox" name="activity-5" value="OtherActibities" />
                                                            Other activities such as: Rodeos, Zorbing, Bobsledding, etc...</label>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <label>
                                                            <input type="checkbox" name="activity-6" value="Racing" />
                                                            Any kind of racing? Like Car racing, or other motorsports etc...</label>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <label>Do you have any other activities that not listed above?</label>
                                                    </Row>
                                                    <Row style={{paddingBottom:20}}>
                                                        <input type={tagType.text} />
                                                    </Row>
                                                    
                                                    <Row>
                                                        <Col>
                                                            <label>Are you in the military?</label>
                                                        </Col>
                                                        <Col>
                                                            <label className="switch" >
                                                                {/* <input type="checkbox" value="military" onClick={this.flagChangeHandler} />
                                                                <span className="slider" /> */}
                                                                <Switch value="military" checked={this.state.visibilityFlag.military} onChange={(e) => this.flagToggleSwitchHandler("military",e)} />
                                                                
                                                            </label>
                                                        </Col>
                                                    </Row>
                                                    <CSSTransition in={this.state.visibilityFlag.military} timeout={500} classNames="my-node" unmountOnExit >
                                                        <Row>
                                                            <TextInput type={tagType.text} name={tagName.militaryExperience} placeholder={this.state.formControls.militaryExperience.placeholder} onChange={this.changeHandler} />
                                                        </Row>
                                                    </CSSTransition>

                                                    
                                                </Container>              
                                            </div>
                                            </CSSTransition> 
                                            
                                            {/* page-3 Drugs/Alcohol/Tobacco */}
                                            <CSSTransition in={this.state.currentPageNumber==3 } timeout={500} classNames="my-node" >
                                            <div className={this.state.currentPageNumber==3 ? "page-3" : "hide-page"}>
                                                <Container>
                                                    <Row>
                                                        <label>Discribe your drugs, alcohol and non-prescription drug use:</label>
                                                    </Row>
                                                    <Row>
                                                        <Col >
                                                            <label >Drinks per week?
                                                            <TextInput type={tagType.number} name={tagName.drinkPerWeek} placeholder={this.state.formControls.drinkPerWeek.placeholder} onChange={this.changeHandler} />
                                                            </label>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <label>Nicotene use in last 5 years</label>
                                                            <label className="switch" >
                                                            <Switch value="nicoteneLast5Years" checked={this.state.visibilityFlag.nicoteneLast5Years} onChange={(e) => this.flagToggleSwitchHandler("nicoteneLast5Years",e)} />
                                                            </label>
                                                        </Col>
                                                    </Row>
                                                    <CSSTransition in={this.state.visibilityFlag.nicoteneLast5Years} timeout={500} classNames="my-node" unmountOnExit >
                                                        <Row>
                                                            <Col className="label-input-left">
                                                                <label>Type of nicotene use: </label>
                                                                    <select name={tagName.typeOfNicoteneUse} value={this.state.formControls.typeOfNicoteneUse.value} onChange={this.changeHandler}  >
                                                                        <option name={tagName.typeOfNicoteneUse} value="" ></option>
                                                                        <option name={tagName.typeOfNicoteneUse} value="Cigar" >Cigar</option>
                                                                        <option name={tagName.typeOfNicoteneUse} value="Cigarrettes">Cigarrettes</option>
                                                                        <option name={tagName.typeOfNicoteneUse} value="Marjuana">Marjuana</option>
                                                                    </select>
                                                            </Col>
                                                        </Row>
                                                    </CSSTransition>
                                                    <CSSTransition in={this.state.formControls.typeOfNicoteneUse.value != ""} timeout={500} classNames="my-node" unmountOnExit >
                                                            <Row>
                                                                <Col className="label-input-left">
                                                                    <label>Use of frequency:</label>
                                                                        <select name={tagName.useOfFrequency} value={this.state.formControls.useOfFrequency.value} onChange={this.changeHandler}  >
                                                                            <option name={tagName.useOfFrequency} value="" ></option>
                                                                            <option name={tagName.useOfFrequency} value="Daily" >Daily</option>
                                                                            <option name={tagName.useOfFrequency} value="1-2 per week">1-2 per week</option>
                                                                            <option name={tagName.useOfFrequency} value="1 per month">1 per month</option>
                                                                        </select>
                                                                </Col>
                                                            </Row>
                                                    </CSSTransition>

                                                    <Row>
                                                        <Col>
                                                            <label>Non-prescription use in last 5 years</label>
                                                            <label className="switch" >
                                                            <Switch value="nonPrescriptionLast5Years" checked={this.state.visibilityFlag.nonPrescriptionLast5Years} onChange={(e) => this.flagToggleSwitchHandler("nonPrescriptionLast5Years",e)} />
                                                            </label>
                                                        </Col>
                                                    </Row>
                                                    <CSSTransition in={this.state.visibilityFlag.nonPrescriptionLast5Years} timeout={500} classNames="my-node" unmountOnExit >
                                                        <Row>
                                                            <Col className="label-input-left">
                                                                <label>Type of drugs used: </label>
                                                                    <select name={tagName.nonPrescriptionLast5Years} value={this.state.formControls.nonPrescriptionLast5Years.value} onChange={this.changeHandler}  >
                                                                        <option name={tagName.nonPrescriptionLast5Years} value="" ></option>
                                                                        <option name={tagName.nonPrescriptionLast5Years} value="Sedatives" >Sedatives</option>
                                                                        <option name={tagName.nonPrescriptionLast5Years} value="Amphetamines">Amphetamines</option>
                                                                        <option name={tagName.nonPrescriptionLast5Years} value="Barbiturates">Barbiturates</option>
                                                                        <option name={tagName.nonPrescriptionLast5Years} value="Opiates">Opiates</option>
                                                                        <option name={tagName.nonPrescriptionLast5Years} value="Marijuana">Marijuana</option>
                                                                        <option name={tagName.nonPrescriptionLast5Years} value="Hallucinogenic">Hallucinogenic</option>
                                                                        <option name={tagName.nonPrescriptionLast5Years} value="NarcoticDrugs">Narcotic drugs</option>
                                                                    </select>
                                                            </Col>
                                                        </Row>
                                                    </CSSTransition>


                                                </Container>
                                            </div>
                                            </CSSTransition> 

                                            {/* page-4 Health */}
                                            <CSSTransition in={this.state.currentPageNumber==4 } timeout={500} classNames="my-node" >
                                            <div className={this.state.currentPageNumber==4 ? "page-4" : "hide-page"}>
                                                <Container>
                                                    <Row>
                                                        <label>Have you had any of the following:</label>
                                                    </Row>
                                                    <Row>
                                                        <label>
                                                        <input type="checkbox" name="healthIssue-1" value="GeneralInjuries" /> 
                                                        General Injuries</label>
                                                    </Row>
                                                    <Row>
                                                        <label>
                                                        <input type="checkbox" name="healthIssue-2" value="Disabilities" /> 
                                                        Disabilities</label>
                                                    </Row>
                                                    <Row>
                                                        <label>
                                                        <input type="checkbox" name="healthIssue-3" value="HIV" /> 
                                                        AIDS, HIV, or tested positive for AIDS/HIV</label>
                                                    </Row>
                                                    <Row>
                                                        <label>
                                                        <input type="checkbox" name="healthIssue-4" value="RestrictionActivities" /> 
                                                        Restriction of Activities</label>
                                                    </Row>
                                                    <Row style={{paddingTop:30}}>
                                                            <label>Have you been diagnosed, treated, tested positive for, or given medical advice?</label>
                                                            <label className="switch" >
                                                            <Switch value="diagnose" checked={this.state.visibilityFlag.diagnose} onChange={(e) => this.flagToggleSwitchHandler("diagnose",e)} />
                                                            </label>
                                                    </Row>
                                                    {/* <CSSTransition in={this.state.visibilityFlag.diagnose} timeout={500} classNames="my-node" unmountOnExit >
                                                        <Row>
                                                            <TextInput type={tagType.text} name={tagName.diagnosedIssue} placeholder={this.state.formControls.diagnosedIssue.placeholder} onChange={this.changeHandler} />
                                                        </Row>
                                                    </CSSTransition> */}
                                                </Container>
                                            </div>
                                            </CSSTransition> 

                                            {/* page-5 Medications */}
                                            <CSSTransition in={this.state.currentPageNumber==5 } timeout={500} classNames="my-node" >
                                            <div className={this.state.currentPageNumber==5 ? "page-5" : "hide-page"}>
                                                <Container>
                                                    <Row>
                                                        <label>We see that you are currently prescribed, or have taken, these medications</label>
                                                    </Row>
                                                    <Row>
                                                        <label>Please confirm:</label>   
                                                    </Row>
                                                    <Row>
                                                        <Col style={{paddingLeft:20}}>
                                                            <Row>
                                                                <label>
                                                                <input type="checkbox" name="medication-1" value="Acebutolo" /> 
                                                                Acebutolo (Secral)
                                                                </label>
                                                            </Row>
                                                            <Row>
                                                                <label>
                                                                <input type="checkbox" name="medication-2" value="Valsartan" /> 
                                                                Valsartan (Diovan)
                                                                </label>
                                                            </Row>
                                                            <Row>
                                                                <label>
                                                                <input type="checkbox" name="medication-3" value="Bisoprolol" /> 
                                                                Bisoprolol (Zebeta, Ziac)
                                                                </label>
                                                            </Row>
                                                            <Row>
                                                                <label>
                                                                <input type="checkbox" name="medication-4" value="Warfarin" /> 
                                                                Warfarin
                                                                </label>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                    <Row style={{paddingTop:20}}>
                                                        <label>Add additional medication you are currently taking:</label>
                                                    </Row>
                                                    {this.state.medicationHistory.map((obj, idx) => {
                                                            let medicationId = `Medication-${idx}`;
                                                            return (
                                                                <Row key={idx}>
                                                                    <Col>
                                                                        <label key={medicationId}>Medication #{idx} 
                                                                        <input type="text" name={medicationId} value={this.state.medicationHistory[idx].perscription} onChange={(e)=>this.handleAdditionalMedication(idx,e)} size="35"/>
                                                                        </label>  
                                                                        <button type="button" id="button-close" onClick={(e)=>this.removeMedicationHistory(idx,e)}>x</button>
                                                                        {/* <a id="button-close" onClick={(e)=>this.removeMedicationHistory(idx,e)}/> */}
                                                                    </Col>
                                                                </Row>

                                                            )
                                                        })
                                                    }
                                                    <Row>
                                                        <Col>
                                                            <button className="button button-push" type="button" onClick={this.addMedicationHistory}>add missing history</button>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                            </CSSTransition> 

                                            {/* page-6 Conditions */}
                                            <CSSTransition in={this.state.currentPageNumber==6 } timeout={500} classNames="my-node" >
                                            <div  className={this.state.currentPageNumber==6 ? "page-6" : "hide-page"}>
                                                <Container>
                                                    <Row>
                                                        <label>Are these medicaiton related to any of the following conditions?</label>
                                                    </Row>
                                                    <Row >
                                                        {/* first column */}
                                                        <Col>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-1" value="aneurysm" />
                                                                </Col>
                                                                <Col >
                                                                    <label className="borderexample ">Aneurysm</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-2" value="irregularHeartBeat"  onChange={this.flagChangeHandler}/>
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">Irregular Hear Beat</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-3" value="bicuspidAorticValve" />
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">bicuspidAorticValve</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-4" value="coarctationOfAorta" />
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">Coarctation of Aorta</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-5" value="pericarditis" />
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">Pericarditis</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-6" value="chestPain" />
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">Chest Pain or Pressure in Chest</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col  lg={1}>
                                                                    <input type="checkbox" name="condition-7" value="heartValveAbnormality" />
                                                                </Col>
                                                                <Col >
                                                                    <label className="borderexample ">Heart Valve Abnormality</label>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        {/* second column */}
                                                        <Col>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-8" value="heartFailure" />
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">Heart Failure</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-9" value="highBloodPressure"/>
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">High Blood Pressure</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-10" value="aorticStenosis" />
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">Aortic Stenosis</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-11" value="endocartitis" />
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">Endocarditis</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-12" value="heartAttack" onChange={this.flagChangeHandler}/>
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">Heart Attack</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-13" value="mitralValvaProlspse" />
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">Mitral Valve Prolapse (MVP)</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col  lg={1}>
                                                                    <input type="checkbox" name="condition-14" value="aorticInsufficiency" />
                                                                </Col>
                                                                <Col >
                                                                    <label className="borderexample ">Aortic Insufficient</label>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        {/* third column */}
                                                        <Col>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-15" value="murmur" />
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">Murmur</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-16" value="mitralStenosis"/>
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">Mitral Stenosis</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-17" value="cardiomyopathy" />
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">Cardiomyopathy</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-18" value="tetralogyOfFallot" />
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">Tetralogy of Fallot</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-19" value="heartEnlargement"/>
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">Heart Enlargement</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={1}>
                                                                    <input type="checkbox" name="condition-20" value="pacemaker" onChange={this.flagChangeHandler}/>
                                                                </Col>
                                                                <Col>
                                                                    <label className="borderexample ">Pacemaker</label>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col  lg={1}>
                                                                    <input type="checkbox" name="condition-21" value="congenitalCardiac" />
                                                                </Col>
                                                                <Col >
                                                                    <label className="borderexample ">Congenital Cardiac</label>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row >
                                                    <Row>
                                                        <button className={this.state.visibilityFlag.addMoreConditions? "button-click-after":"button-click-before"} value="addMoreConditions" onClick={this.flagChangeHandler}>None of above </button>
                                                    </Row>
                                                    <CSSTransition in={this.state.visibilityFlag.addMoreConditions} timeout={500} classNames="my-node" unmountOnExit >
                                                        <Row>
                                                            <label>
                                                                Additional conditions you want to tell us
                                                                <input type="text"/> 
                                                            </label>
                                                        </Row>
                                                    </CSSTransition>

                                                    {/* if irregularHeartBeat Clicked */}
                                                    <CSSTransition in={this.state.visibilityFlag.irregularHeartBeat} timeout={500} classNames="my-node" unmountOnExit >
                                                        <Container style={{paddingTop:20}} >
                                                            <Row >
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
                                                        </CSSTransition>

                                                    {/* if hospitalization is clicked in irregular heatbeat */}
                                                    <CSSTransition in={this.state.visibilityFlag.irregularHeartBeatHospitalized} timeout={500} classNames="my-node" unmountOnExit >
                                                        <Container style={{paddingTop:20}}>
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
                                                        </CSSTransition>


                                                        <CSSTransition in={this.state.visibilityFlag.heartAttack} timeout={500} classNames="my-node" unmountOnExit >
                                                    {/* expand if  Heart Attack clicked */}
                                                        <Container>
                                                            <Row>skipped for now </Row>
                                                        </Container>
                                                        </CSSTransition>
                                                    
                                                    <CSSTransition  in={this.state.visibilityFlag.pacemaker} timeout={500} classNames="my-node" unmountOnExit >
                                                    {/* expand if packmaker clicked */}
                                                        <Container style={{paddingTop:20}}>
                                                            <Row>
                                                                <Col>
                                                                    <Row>
                                                                        <label>Date of Implantation
                                                                    <input type="date" />
                                                                        </label>
                                                                    </Row>
                                                                    <Row>
                                                                        <label >any diagnosis of following: sick sinus syndrome, carotid sinus syndrom, heart blocks, or post-cardiac surgery arrhythmia?
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
                                                        </CSSTransition>
                                                    
                                                    <div className="submit-button">
                                                        <button className="button">Submit</button>
                                                    </div>
                                                </Container>
                                            </div>
                                            </CSSTransition> 
                                        </form>
                                    </div>
                                </Col>
                                
                                {/* left arrow */}
                                <Col xs={1} className="noPadding">
                                        <button className="button button-prev" onClick={this.pageHandler} value="previousPage"><i className="left"></i></button>

                                </Col>
                                {/* right arrow */}
                                <Col xs={1} className="noPadding">
                                        <button className="button button-next " onClick={this.pageHandler} value="nextPage"><i className="right"></i></button>
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
