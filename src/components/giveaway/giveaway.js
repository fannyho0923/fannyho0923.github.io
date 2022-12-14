import React, { Fragment, useState } from "react";
import Breadcrumb from "../../components/common/breadcrumb.js";

import data from "../../assets/data/productTypes";
import { ToastContainer, toast } from "react-toastify";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Label,
  Input,
  FormGroup,
  Table,
} from "reactstrap";
import { Tab } from "react-bootstrap";

const ProductType = () => {
  const [open, setOpen] = useState(false);
  const [productTypes, setProductTypes] = useState(data);
  const [product, setProduct] = useState(null);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onChange = (v) => {
    setProduct(v.target.value);
  };

  // const handleRemoveRow = () => {
  //   const updatedData = myData.filter(function (el) {
  //     return checkedValues.indexOf(el.number) < 0;
  //   });
  //   setData([...updatedData]);
  //   toast.success("Successfully Deleted !");
  // };

  const arr = [
    { number: 111, name: "aaa" },
    { number: 222, name: "bbb" },
    { number: 333, name: "ccc" },
  ];

  const handleAdd = () => {
    const del = data;
    del.push({
      number: "#",
      name: product,
    });
    setProductTypes([...del]);
    console.log(product);
    toast.success("Successfully Added !");
  };

  const onCloseModal = (data) => {
    if (data === "add") {
      handleAdd();
      // setProductTypes(
      //   productTypes.push({
      //     number: "test",
      //     name: data,
      //   })
      // );
    }
    setOpen(false);
  };

  return (
    <Fragment>
      <Breadcrumb title="贈品後台" parent="Sales" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>贈品清單</h5>
              </CardHeader>
              <CardBody className="order-datatable">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>贈品資訊</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arr.map((v) => (
                      <tr>
                        <td style={{ display: "flex" }}>
                          {v.number + " " + v.name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                <Button
                  className="mt-4 btn btn-primary btn-square bootstrap-touchspin-down"
                  type="button"
                  onClick={onOpenModal}
                >
                  ＋ 新增贈品
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal
          isOpen={open}
          toggle={onCloseModal}
          style={{ overlay: { opacity: 0.1 } }}
        >
          <ModalHeader toggle={onCloseModal}>
            <h5 className="modal-title f-w-600" id="exampleModalLabel2">
              新增贈品
            </h5>
          </ModalHeader>
          <ModalBody>
            {/* <Form
                      className="needs-validation add-product-form"
                      onSubmit={handleValidSubmit}
                    >
                      <div className="form form-label-center"> */}

            <Form>
              <FormGroup className="form-group mb-3 row">
                <Label htmlFor="recipient-name" className="col-form-label">
                  商品ID :
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  onChange={onChange}
                  style={{ width: "70%" }}
                />
                <Label htmlFor="message-text" className="col-form-label">
                  印單用，建議填寫長度較短的中英文字串
                  <br />
                  勿超過3個字
                </Label>
              </FormGroup>
              <FormGroup className="form-group mb-3 row">
                <Label htmlFor="recipient-name" className="col-form-label">
                  贈品名稱 :
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  onChange={onChange}
                  style={{ width: "70%" }}
                />
                <Label htmlFor="message-text" className="col-form-label">
                  範例:強效美白面膜
                </Label>
              </FormGroup>
              <FormGroup className="form-group mb-3 row">
                <Label htmlFor="recipient-name" className="col-form-label">
                  庫存量 :
                </Label>
                <Input
                  type="number"
                  className="form-control"
                  onChange={onChange}
                  style={{ width: "70%" }}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="primary"
              onClick={() => onCloseModal("add")}
            >
              Update
            </Button>
            <Button
              type="button"
              color="secondary"
              onClick={() => onCloseModal("VaryingMdo")}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
      <ToastContainer />
    </Fragment>
  );
};

export default ProductType;
