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
                paceMaker: false,

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


    render() {

        //     <Container>
        //     <Row>
        //       <Col></Col>
        //     </Row>

        //   </Container>

        return (
            // section for health, weight, finance changing 



            <div className="Transamerica-LifeInsuranceDemo">

                <Container className="content">
                    
                
                <form onSubmit={this.formSubmitHandler}>
                    <Container>
                        {/* Section one, General Health */}
                        {/*  Have you experienced significant changes in Weight, Health, or Finances"? (select all that apply)*/}

                        <div>
                            <div>Have you experienced significant changes in Weight, Health or Finances ? (select that all apply)</div>
                            <div>
                                <Row>
                                    <Col xs={6} md={2}>
                                        <button value="health" type="button" onClick={this.flagChangeHandler}>health</button>
                                    </Col>
                                    <Col md={2}>
                                        <button value="weight" type="button" onClick={this.flagChangeHandler}>Weight</button>
                                    </Col>
                                    <Col md={2}>
                                        <button value="finance" type="button" onClick={this.flagChangeHandler}>finance</button>
                                    </Col>
                                </Row>
                            </div>
                            {/* Weight Change Detail */}

                            {
                                this.state.visibilityFlag.weight &&
                                <div>
                                    <Row>
                                        <div>
                                            <TextInput type="text" name="weightChangeDetail" placeholder={this.state.formControls.weightChangeDetail.placeholder} onChange={this.changeHandler} />
                                        </div>
                                        {/* show error of meeting requirement */}
                                        {(!this.state.formControls.weightChangeDetail.valid && this.state.formControls.weightChangeDetail.touched) ? (<p>Input not fullfill requirement</p>) : null}
                                    </Row>
                                </div>
                            }


                            {/* Health Change Detail */}
                            {
                                this.state.visibilityFlag.health &&
                                <div>
                                    <Row>
                                        <div>
                                            <TextInput type="text" name="healthChangeDetail" placeholder={this.state.formControls.healthChangeDetail.placeholder} onChange={this.changeHandler} />
                                        </div>
                                        {/* show error of meeting requirement */}
                                        {(!this.state.formControls.healthChangeDetail.valid && this.state.formControls.healthChangeDetail.touched) ? (<p>Input not fullfill requirement</p>) : null}
                                    </Row>
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

                    </Container>

                    {/*  Biological siblings  */}
                    <div>
                        <div>
                            <div>Do you have any biological siblings? </div>
                            <div>
                                <label>Brother(s)
                                    <TextInput type={tagType.number} name={tagName.numberOfBiologicalBrothers} value={this.state.formControls.numberOfBiologicalBrothers.value} placeholder={this.state.formControls.numberOfBiologicalBrothers.placeholder} onChange={this.changeHandler} />
                                </label>
                                {
                                    this.state.formControls.numberOfBiologicalBrothers.value > 0 &&
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
                                    this.state.formControls.numberOfBiologicalSisters.value > 0 &&
                                    <div>
                                        <label>Sister Siblings' health
                                            <TextInput type={tagType.text} name={tagName.healthOfBiologicalSisters} value={this.state.formControls.healthOfBiologicalSisters.value} placeholder={this.state.formControls.healthOfBiologicalSisters.placeholder} onChange={this.changeHandler} />
                                        </label>
                                    </div>
                                }
                            </div>
                        </div>

                    </div>

                    {/* Biological Father&&Mother Living||Deceased  */}
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



                    {/* Section Two, Activities */}
                    {/* participate in any activities? */}
                    <div className="activities">
                        <div>
                            <input type="checkbox" name="skydiving" value="yes" />Skydiving
                            <input type="checkbox" name="Flying" value="yes" />Flying
                            <input type="checkbox" name="ScubaDiving" value="yes" />Scuba Diving
                            <input type="checkbox" name="Rock/Mountain Climbing" value="yes" /> Mountain Climbing
                            <TextInput type={tagType.text} name={tagName.otherActivities} value={this.state.formControls.otherActivities.value} placeholder={this.state.formControls.otherActivities.placeholder} onChange={this.changeHandler} />
                        </div>
                        <div>
                            <label>Are you in the military?
                                <label className="switch" >
                                    <input type="checkbox" value="military" onClick={this.flagChangeHandler} />
                                    <span className="slider" />
                                </label>
                            </label>
                        </div>
                        {this.state.visibilityFlag.military &&
                            <div>
                                <TextInput type={tagType.text} name={tagName.militaryExperience} placeholder={this.state.formControls.militaryExperience.placeholder} onChange={this.changeHandler} />
                            </div>
                        }
                    </div>

                    {/* Section three, Drugs/Alchol/Tobacco */}
                    {/* Describe your alcohol, drug use and nicotene use */}
                    <div>
                        <label>Drinks per week?
                            &nbsp;
                        <TextInput type={tagType.number} name={tagName.drinkPerWeek} placeholder={this.state.formControls.drinkPerWeek.placeholder} onChange={this.changeHandler} />
                        </label>
                    </div>
                    <div>
                        <label>Nocotine use in last 5 years
                            &nbsp;
                        <TextInput type={tagType.text} name={tagName.nicoteneLast5Years} placeholder={this.state.formControls.nicoteneLast5Years.placeholder} onChange={this.changeHandler} />
                        </label>
                    </div>
                    <div>
                        <label>Drug user in last 5 years
                            &nbsp;
                            <select onChange={this.flagChangeHandler} >
                                <option value="drugUsage">no</option>
                                <option value="drugUsage">yes</option>
                            </select>
                        </label>
                    </div>
                    {
                        this.state.visibilityFlag.drugUsage &&
                        <div>
                            <TextInput type={tagType.text} name={tagName.drugUseLast5Years} placeholder={this.state.formControls.drugUseLast5Years.placeholder} onChange={this.changeHandler} />
                        </div>
                    }

                    {/* Section four, Health */}
                    <div className="multiHealthIssue">
                        <label>Have you had any of the following:
                            <br />
                            <input type="checkbox" name="injuries" value="yes" /> injuries <br />
                            <input type="checkbox" name="disability" value="yes" /> Disability<br />
                            <input type="checkbox" name="hiv" value="yes" /> HIV<br />
                            <input type="checkbox" name="restriction" value="yes" /> Restriction on activities
                        </label>
                    </div>
                    <div>
                        <label>have you been diagnosed, treated, teasted positive for, or given medical advice?
                                <label className="switch" >
                                <input type="checkbox" value="diagnose" onClick={this.flagChangeHandler} />
                                <span className="slider" />
                            </label>
                        </label>
                        {
                            this.state.visibilityFlag.diagnose &&
                            <div>
                                <TextInput type={tagType.text} name={tagName.diagnosedIssue} placeholder={this.state.formControls.diagnosedIssue.placeholder} onChange={this.changeHandler} />
                            </div>
                        }
                    </div>

                    {/* Section five, medication */}
                    {/* this section will be replaced by vendor/providers API */}
                    <div>
                        <label>We found your current medication prescription, please confirm/uncheck any which are not appliable to you</label>
                        <div /><input type="checkbox" name="Acebutolo" value="yes" />Acebutolo./this will be replaced by Patient History Providers Info
                        <div /><input type="checkbox" name="Valsartan" value="yes" />Valsartan./this will be replaced by Patient History Providers Info
                        <div /><input type="checkbox" name="Bisoprolol" value="yes" />Bisoprolol./this will be replaced by Patient History Providers Info
                        <div /><input type="checkbox" name="Warfarin" value="yes" />Warfarin./this will be replaced by Patient History Providers Info
                    {
                            this.state.medicationHistory.map((obj, idx) => {
                                let medicationId = `Medication-${idx}`;
                                return (
                                    <div key={idx}>
                                        <label key={medicationId}>Medication #{idx} &nbsp;
                                        <input type="text" name={medicationId} placeholder={obj.detail} />
                                        </label>
                                    </div>
                                )
                            })
                        }
                        <button type="button" onClick={this.addMedicationHistory}>add missing history</button>
                    </div>

                    {/* Section six, conditions */}
                    <div>
                        <label>Are these medicaiton related to any of the following conditions?</label>
                        <div /><input type="checkbox" />Aneurysm
                        <div /><input type="checkbox" value="irregularHeartBeat" onChange={this.flagChangeHandler} /> -Iregular heart beat-
                        <div /><input type="checkbox" />Bicuspid
                        <div /><input type="checkbox" />Coarctation of Aorta
                        <div /><input type="checkbox" />Pericarditis
                        <div /><input type="checkbox" />Chest Pain or Pressure in Chest
                        <div /><input type="checkbox" />Heart Valve Abnormality
                        {/* line 2 */}
                        <div /><input type="checkbox" />Heart Failure
                        <div /><input type="checkbox" value="heartAttack" onChange={this.flagChangeHandler} />-Heart Attack-
                        <div /><input type="checkbox" />High Blood Pressure
                        <div /><input type="checkbox" />Aortic Stenosis
                        <div /><input type="checkbox" />Endocarditis
                        <div /><input type="checkbox" />Mitral Valve Prolapse(MVP)
                        <div /><input type="checkbox" />Aortic Insufficiency
                        {/* line 3 */}
                        <div /><input type="checkbox" />Heart Failure

                        <div />
                            <label>-Pacemaker-</label>
                            <input type="checkbox" value="paceMaker" onChange={this.flagChangeHandler} />
                        
                        <div /><input type="checkbox" />High Blood Pressure
                        <div /><input type="checkbox" />Aortic Stenosis
                        <div /><input type="checkbox" />Endocarditis
                        <div /><input type="checkbox" />Mitral Valve Prolapse(MVP)
                        <div /><input type="checkbox" />Aortic Insufficiency

                    </div>


                    {/* expand if irregular Heart Beat clicked */}
                    {
                        this.state.visibilityFlag.irregularHeartBeat &&

                        <div className="irregularHeartBeatDetailQuestion">  
                            <h3>What type of symptom(s) ? please select all</h3>
                            <div /><input type="checkbox" /> Palpitations, Lown-Gangong-Levine Syndrome(LGL)
                            <div /><input type="checkbox" /> Tachycardia(fast heartbeat)
                            <div /><input type="checkbox" /> Ventricular Fibrillation
                            <div /><input type="checkbox" /> premature beats

                            <div>
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
                            </div>


                        </div>

                    }
                    {/* expand if Hospitalization clicked inside of irregular hear beat */}
                    {
                        this.state.visibilityFlag.irregularHeartBeatHospitalized &&
                        <div>
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
                        </div>
                    }

                    {/* expand if  Heart Attack clicked */}
                    {
                        this.state.visibilityFlag.heartAttack &&
                        <div> <h1>skipped for now</h1> </div>
                    }

                    {/* expand if Pacemaker clicked */}
                    {
                        this.state.visibilityFlag.paceMaker &&
                        <div className="paceMakerDetailQuestion">

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

                        </div>
                    }











                    <div>
                        <button >Submit</button>
                    </div>
                </form>

                </Container>


            </div>










        )
    }
}
export default QuoteForms;
