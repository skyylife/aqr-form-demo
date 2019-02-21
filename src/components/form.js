import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import Styles from "./styles";
import AutoSave from "./AutoSave";
import Signature from "react-signature-canvas";

// Timeout for saving/debounce
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Asynce saving values
const save = async values => {
  console.log("Saving", values);
  await sleep(2000);
};

//Main Class
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { save, sleep };
  }
  render() {
    const { sleep, save } = this.state;
    return (
      <Styles>
        <h1>All Quick Repairs </h1>
        {/* Form declaration and any initial values delcared here */}
        <Form
          onSubmit={save}
          initialValies={{ state: "TX" }}
          subscription={{} /* Email subscriber will be added here*/}
        >
          {() => (
            <div className="form">
              <AutoSave debounce={1000} save={save} />
              <div>
                {/*Date and Priority Level*/}
                <label>Date:</label>
                <Field
                  name="date"
                  component="input"
                  type="text"
                  placeholder=""
                />
              </div>
              <div>
                <label>Priority Level</label>
                <div>
                  <label>
                    <Field
                      name="priorityLevel"
                      component="input"
                      type="radio"
                      value="Normal"
                    />{" "}
                    Normal
                  </label>
                  <label>
                    <Field
                      name="priorityLevel"
                      component="input"
                      type="radio"
                      value="Emergency"
                    />{" "}
                    Emergency
                  </label>
                </div>
              </div>
              {/*Section for Requester */}
              <h2> Requester Info:</h2>
              <div>
                <label> First Name</label>
                <Field
                  name="requesterFirstName"
                  component="input"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label> Last Name</label>
                <Field
                  name="requesterLastName"
                  component="input"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label>Phone Number</label>
                <Field
                  name="requesterPhoneNumber"
                  component="input"
                  type="text"
                  placeholder="#"
                />
              </div>
              <div>
                <label>Email</label>
                <Field
                  name="requesterEmail"
                  component="input"
                  type="email"
                  placeholder="Email"
                />
              </div>
              {/*Section for Contact info */}
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
                  component="input"
                  type="email"
                  placeholder="Email"
                />
              </div>
              {/*Section for Address */}
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
                  placeholder="Dallas"
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
              {/*Section for Problem description */}
              <h2>Type of Problem</h2>
              <div>
                <label>Choose an item</label>
                <Field name="problemType" component="select" multiple>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </Field>
              </div>
              <div>
                <label />
                <Field
                  name="description"
                  component="textarea"
                  placeholder="Description of Problem"
                />
              </div>
              <div>
                <label />
                <Field
                  name="description"
                  component="textarea"
                  placeholder="Work Done By Technician"
                />
              </div>
              {/*Survey section */}
              <div>
                <qLabel>Was all work complete?</qLabel>
                <div>
                  <label>
                    <Field
                      name="workComplete"
                      component="input"
                      type="radio"
                      value="Yes"
                    />{" "}
                    Yes
                  </label>
                  <label>
                    <Field
                      name="workComplete"
                      component="input"
                      type="radio"
                      value="No"
                    />{" "}
                    No
                  </label>
                </div>
              </div>
              <div>
                <qLabel>Does work performed match your standards</qLabel>
                <div>
                  <label>
                    <Field
                      name="standards"
                      component="input"
                      type="radio"
                      value="Yes"
                    />{" "}
                    Yes
                  </label>
                  <label>
                    <Field
                      name="standards"
                      component="input"
                      type="radio"
                      value="No"
                    />{" "}
                    No
                  </label>
                </div>
              </div>
              <div>
                <qLabel>Was technician prompt and responsive?</qLabel>
                <div>
                  <label>
                    <Field
                      name="techPrompt"
                      component="input"
                      type="radio"
                      value="Yes"
                    />{" "}
                    Yes
                  </label>
                  <label>
                    <Field
                      name="techPrompt"
                      component="input"
                      type="radio"
                      value="No"
                    />{" "}
                    No
                  </label>
                </div>
              </div>
              <div>
                <qLabel>Did technician explain the problem and repair?</qLabel>
                <div>
                  <label>
                    <Field
                      name="techExplain"
                      component="input"
                      type="radio"
                      value="Yes"
                    />{" "}
                    Yes
                  </label>
                  <label>
                    <Field
                      name="techExplain"
                      component="input"
                      type="radio"
                      value="No"
                    />{" "}
                    No
                  </label>
                </div>
              </div>
              <div>
                <qLabel>Would you use our service again?</qLabel>
                <div>
                  <label>
                    <Field
                      name="serviceAgain"
                      component="input"
                      type="radio"
                      value="Yes"
                    />{" "}
                    Yes
                  </label>
                  <label>
                    <Field
                      name="serviceAgain"
                      component="input"
                      type="radio"
                      value="No"
                    />{" "}
                    No
                  </label>
                </div>
              </div>
              <Signature
                penColor="green"
                canvasProps={{
                  width: 500,
                  height: 200,
                  className: "sigCanvas"
                }}
              />
            </div>
          )}
        </Form>
      </Styles>
    );
  }
}

export default App;
