import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  // FormGroup,
  // CustomInput,

} from "reactstrap";
import { Route } from "react-router-dom";
// import { history } from "../../../history";
// import axiosConfig from "../../../../axiosConfig";
import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";



export class AddBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner_title:"",
      banner_img: "",
      status: "",
    };
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post("/addbanner", this.state, {
        // headers: {
        //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
        // },
      })
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/homebanner/bannerlist");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // const { dealer } = this.state;
    return (
      <div>
        <Breadcrumbs
            breadCrumbTitle="Add Banner"
            breadCrumbParent="Home"
            breadCrumbActive="Add Banner"
          />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Banner
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/bannerhome/bannerlist")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
          <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Banner Name</Label>
                  <Input

                    type="text"
                    name="banner_title"
                    placeholder="Enter First Name"
                    value={this.state.banner_title}
                    onChange={this.changeHandler}>

                  </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Banner Image</Label>
                  <Input
                    required
                    type="file"
                    name="banner_img"
                    className="form-control"
                    value={this.state.banner_img}
                    onChange={this.changeHandler}>
                  </Input>
                </Col>


                {/* <Col lg="12" md="12" sm="12" className="mb-2">
                  <Label>Description</Label>
                   <textarea className="form-control" placeholder="Description...">

                   </textarea>
                </Col> */}


            </Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Inactive"
                    />
                    <span style={{ marginRight: "3px" }}>Inactive</span>
                  </div>
                </Col>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1">
                    Save
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddBanner;
