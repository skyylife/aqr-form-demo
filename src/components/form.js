
import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import Styles from './styles';
import AutoSave from './AutoSave';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const save = async values => {
    console.log('Saving', values);
    await sleep(2000);
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { save, sleep };
    }
    render() {
        const { sleep, save, } = this.state;
        return (
            <Styles>
                <h1>All Quick Repairs </h1>
                <Form
                    onSubmit={save}
                    initialValies={{ state: 'TX' }}
                    subscription={{}/* Email subscriber will be added here*/}
                >
                    {() => (

                        
                        <div className="form">
                            <AutoSave debounce={1000} save={save} />
                            <h2> Requester Info:</h2>
                            <div>
                                <label> First Name</label>
                                <Field
                                    name="firstName"
                                    component="input"
                                    type="text"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label> Last Name</label>
                                <Field
                                    name="lastName"
                                    component="input"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <Field
                                    name="phoneNumber"
                                    component="input"
                                    type="text"
                                    placeholder="#"
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <Field
                                    name="email"
                                    componet="input"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <h2>Contact Info:</h2>
                            <div>
                                <label> First Name</label>
                                <Field
                                    name="firstName"
                                    component="input"
                                    type="text"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label> Last Name</label>
                                <Field
                                    name="lastName"
                                    component="input"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <Field
                                    name="phoneNumber"
                                    component="input"
                                    type="text"
                                    placeholder="#"
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <Field
                                    name="email"
                                    componet="input"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <h2>Property Address:</h2>
                            <div>
                                <label>Address Line:</label>
                                <Field
                                    name="addressLine"
                                    component="input"
                                    type="address"
                                    placeholder="Address"
                                />
                            </div>
                            <div>
                                <label>City:</label>
                                <Field
                                    name="city"
                                    component="input"
                                    type="city"
                                    placeholder="Texas"
                                />
                            </div>
                            <div>
                                <label>State</label>
                                <Field
                                    name="state"
                                    component="input"
                                    type="state"
                                    placeholder="TX"
                                />
                            </div>
                            <div>
                                <label>Zip Code</label>
                                <Field
                                    name="zipCode"
                                    component="input"
                                    type="zip"
                                    placeholder="11111"
                                />
                            </div>
                            <h2>Type of Problem</h2>
                            <div>
                                <label>Choose an item</label>
                                <Field
                                    name="problemType"
                                    component="select"
                                >
                                    <option />
                                    <option value="Option 1">Option 1</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                </Field>
                            </div>
                            <div>
                                <label></label>
                                <Field name="description" component="textarea" placeholder="Description of Problem" />>
                            </div>
                            <div>
                                <label></label>
                                <Field name="description" component="textarea" placeholder="Work Done By Technician" />>
                            </div>
                        </div>
                    )}
                </Form>
            </Styles>
        );
    }
}

export default App

