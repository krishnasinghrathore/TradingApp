import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody, Table, Label, Badge, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledTooltip, Pagination, PaginationItem, PaginationLink } from "reactstrap";

// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// action
import {  getProductCategories } from "../../store/actions";
import {  addProductCategory } from "../../store/actions";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

import img4 from "../../assets/images/product/img-4.png";
import img7 from "../../assets/images/product/img-7.png";





class ProductCategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        modal: false
        }
    // handleAddProductCategoryClick
    this.handleAddProductCategoryClick = this.handleAddProductCategoryClick.bind(this);
        this.togglemodal.bind(this);

        // this.handleDelseteProductCategory = this.handleDeleteProductCategory.bind(this);
    }
    componentDidMount() {
        debugger;
        this.props.getProductCategories(this.props.history);
      }
      
    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    // handleAddProductCategoryClick
    handleAddProductCategoryClick(event, values) {
        this.props.history.push('ecommerce-add-product');
    }
    handleDeleteProductCategoryClick(event, values) {
        // this.props.addProductCategory({ id: 0, name: productCategory.product_category_name },this.props.history);

    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Ecommerce" breadcrumbItem="Product Categories" />
                        <Row>
                            <Col xs="12">
                                <Card>
                                    <CardBody>
                                        <Row className="mb-2">
                                            <Col sm="4">
                                                <div className="search-box mr-2 mb-2 d-inline-block">
                                                    <div className="position-relative">
                                                        <Input type="text" className="form-control" placeholder="Search..." />
                                                        <i className="bx bx-search-alt search-icon"></i>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm="8">
                                                <div className="text-sm-right">
                                                    <Button type="button"  onClick={this.handleAddProductCategoryClick } color="success" className="btn-rounded waves-effect waves-light mb-2 mr-2"><i className="mdi mdi-plus mr-1"></i> Add New</Button>
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="table-responsive">
                                            <Table className="table table-centered table-nowrap">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th style={{ width: "20px" }}>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                <Label className="custom-control-label" htmlFor="customCheck1">&nbsp;</Label>
                                                            </div>
                                                        </th>
                                                        <th>S. No.</th>
                                                        <th>Name</th>
                                                        <th>View Details</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    { this.props.getProductCategorySuccessResponse ? (
                                                        this.props.getProductCategorySuccessResponse.data.productCategoryList.map((productCategory, key) =>
                                                            <tr key={"_category_" + key}>
                                                                <td>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <Input type="checkbox" className="custom-control-input" id={productCategory.id} />
                                                                        <Label className="custom-control-label" htmlFor={productCategory.id}>&nbsp;</Label>
                                                                    </div>
                                                                </td>
                                                                <td><Link to="#" className="text-body font-weight-bold">{productCategory.id}</Link></td>
                                                                <td>{productCategory.name}</td>
                                                                <td>
                                                                    <Button type="button" color="primary" className="btn-sm btn-rounded" onClick={this.togglemodal}>
                                                                        View Details
                                                                    </Button>
                                                                </td>
                                                                <td>
                                                                    <Link to="#" className="mr-3 text-primary">
                                                                        <i className="mdi mdi-pencil font-size-18 mr-3" id="edittooltip"></i>
                                                                        <UncontrolledTooltip placement="top" target="edittooltip">
                                                                            Edit
                                                                        </UncontrolledTooltip >
                                                                    </Link>
                                                                    <Link to="#" className="text-danger" onClick={this.handleDeleteProductCategoryClick } >
                                                                        <i className="mdi mdi-close font-size-18 mr-3" id="deletetooltip"></i>
                                                                        <UncontrolledTooltip placement="top" target="deletetooltip">
                                                                            Delete
                                                                        </UncontrolledTooltip >
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        )
                                                    ):null
                                                    }

                                                </tbody>
                                            </Table>
                                        </div>
                                        <Pagination className="pagination pagination-rounded justify-content-end mb-2">
                                            <PaginationItem disabled>
                                                <PaginationLink previous href="#" />
                                            </PaginationItem>
                                            <PaginationItem active>
                                                <PaginationLink href="#">
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                          
                                        </Pagination>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Modal isOpen={this.state.modal} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabindex="-1" toggle={this.togglemodal}>
                    <div className="modal-content">
                        <ModalHeader toggle={this.togglemodal}>
                            Order Details
                            </ModalHeader >
                        <ModalBody>
                            <p className="mb-2">Product id: <span className="text-primary">#SK2540</span></p>
                            <p className="mb-4">Billing Name: <span className="text-primary">Neal Matthews</span></p>

                            <div className="table-responsive">
                                <Table className="table table-centered table-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div>
                                                    <img src={img7} alt="" className="avatar-sm" />
                                                </div>
                                            </th>
                                            <td>
                                                <div>
                                                    <h5 className="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                                                    <p className="text-muted mb-0">$ 225 x 1</p>
                                                </div>
                                            </td>
                                            <td>$ 255</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div>
                                                    <img src={img4} alt="" className="avatar-sm" />
                                                </div>
                                            </th>
                                            <td>
                                                <div>
                                                    <h5 className="text-truncate font-size-14">Hoodie (Blue)</h5>
                                                    <p className="text-muted mb-0">$ 145 x 1</p>
                                                </div>
                                            </td>
                                            <td>$ 145</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <h6 className="m-0 text-right">Sub Total:</h6>
                                            </td>
                                            <td>
                                                $ 400
                                                </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <h6 className="m-0 text-right">Shipping:</h6>
                                            </td>
                                            <td>
                                                Free
                                                </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <h6 className="m-0 text-right">Total:</h6>
                                            </td>
                                            <td>
                                                $ 400
                                                </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" onClick={this.togglemodal}>Close</Button>
                        </ModalFooter>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { getProductCategoryError, getProductCategorySuccessResponse } = state.ECommerce;
    return { getProductCategoryError, getProductCategorySuccessResponse };
  };
  
  export default withRouter(
    connect(mapStatetoProps, { getProductCategories })(ProductCategoryPage)
  );
  