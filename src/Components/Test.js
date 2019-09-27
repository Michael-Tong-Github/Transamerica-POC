import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

class Test extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target);
        const data = new FormData(event.target);
        for (var key of data.keys()) {
            console.log("key is", key);
        }
        for (var value of data.values()) {
            console.log("value is", value);
        }


    }

    render() {
        return (
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Check this switch"
                />
                <Form.Check
                    disabled
                    type="switch"
                    label="disabled switch"
                    id="disabled-custom-switch"
                />
            </Form>
        );
    }
}
export default Test;
