import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Card, CardBody, CardTitle, CardSubtitle, Button, Label ,Alert} from "reactstrap";
import Select from 'react-select';
import Dropzone from 'react-dropzone';

// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
// action
import {  addProductCategory } from "../../store/actions";

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

class AddProductCategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
        this.handleAddProductCategory = this.handleAddProductCategory.bind(this);

    }

    handleAddProductCategory (event,productCategory) {
       debugger;
        this.props.addProductCategory({ id: 0, name: productCategory.product_category_name },this.props.history);

        // this.setState({ selectedFiles: files });
        // console.log(this.state.selectedFiles)
    }


    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Ecommerce" breadcrumbItem="Add Product Category" />

                        <Row>
                            <Col xs="12">
                                <Card>
                                    <CardBody>

                                        <CardTitle>Basic Information</CardTitle>
                                        <CardSubtitle className="mb-3">Fill all information below</CardSubtitle>

                                        <AvForm onValidSubmit={this.handleAddProductCategory}>
                                            
                                        {this.props.addProductCategoryError && this.props.addProductCategoryError ? <Alert color="danger">{this.props.addProductCategoryError}</Alert> : null}

                                            <Row>
                                                <Col sm="6">
                                                <AvField name="product_category_name" label="Product Category Name" value="" className="form-control" placeholder="Enter Name" type="text" required />
                                                </Col>

                                                <Col sm="6">

                                                </Col>
                                            </Row>

                                            <Button type="submit"  color="primary"  className="mr-1 waves-effect waves-light">Save Changes</Button>
                                            <Button type="submit" color="secondary" className="waves-effect">Cancel</Button>
                                        </AvForm>

                                    </CardBody>
                                </Card>

                             

                             
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}
const mapStatetoProps = state => {
    const { addProductCategoryError, addProductCategorySuccessResponse } = state.ECommerce;
    return { addProductCategoryError, addProductCategorySuccessResponse };
  };
  
  export default withRouter(
    connect(mapStatetoProps, { addProductCategory })(AddProductCategoryPage)
  );
