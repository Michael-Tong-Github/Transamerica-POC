import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

import {CSSTransitionGroup, CSSTransition}  from 'react-transition-group';

import './Test.css';


class Test extends React.Component {

    constructor() {
        super();
        this.state = {
            haha: true,
        };
        this.handleAdd = this.handleAdd.bind(this);

    }

    handleAdd() {
        this.setState({haha: !this.state.haha});
        console.log(this.state.haha);
      }

    


    render() {

        // var component;
        // if (this.state.haha) {
        //     component = <div className="the-thing">The Thing</div>;
        // }
      
        

        return (
            <div>
                 <button onClick={this.handleAdd}>Add Item</button>
        
                
                    {/* <CSSTransitionGroup  transitionName="thing">
                        {this.state.haha &&
                            <div className="the-thing">The Thing</div>
                        }
                    </CSSTransitionGroup > */}

                    
                

            
            

            </div>
        )
    }
    
}
export default Test;
