import React from "react";
import {
  Alert,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Card,
  ListGroup,
  Container,
  Row,
  Col,
  Accordion,
  Dropdown,
  Item,
} from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css";
import {
  FaHome,
  FaAngleDown,
  FaUserFriends,
  FaFileAlt,
  FaBell,
  FaSuitcase,
  FaRegEdit,
  FaHotel,
} from "react-icons/fa";

function App() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <ProductsContainer />
        <Row>
          <Col>
            <ListGroup
              style={{
                padding: 0,
                margin: 0,
                marginTop: 100,
                textAlign: "start",
              }}
              className="d-none d-sm-none d-md-none d-lg-none d-xl-block"
            >
              <ListGroup.Item style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={"./images/temp.jpg"}
                  style={{ width: 40, height: 40 }}
                />
                <span style={{ paddingLeft: 15 }}>Name ammmmmama</span>
              </ListGroup.Item>
              <ListGroup.Item style={{ border: "none" }}>
                <FaUserFriends color="#c5c5c5" size={40} />
                <span style={{ paddingLeft: 15 }}>My Follower</span>
              </ListGroup.Item>
              <ListGroup.Item style={{ border: "none" }}>
                <FaFileAlt color="#c5c5c5" size={40} />
                <span style={{ paddingLeft: 15 }}>News</span>
              </ListGroup.Item>
              <ListGroup.Item style={{ border: "none" }}>
                <FaBell color="#c5c5c5" size={40} />
                <span style={{ paddingLeft: 15 }}>Notification</span>
              </ListGroup.Item>
              <ListGroup.Item style={{ border: "none" }}>
                <FaSuitcase color="#c5c5c5" size={40} />
                <span style={{ paddingLeft: 15 }}>Jobs</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8} style={{ textAlign: "-webkit-center" }}>
            <div style={{ width: "80%" }}>
              <Accordion defaultActiveKey="0">
                <Card style={{ marginTop: 100 }}>
                  <Card.Header
                    style={{ backgroundColor: "#007bff", color: "#ffffff" }}
                  >
                    <Row>
                      <Col style={{ textAlign: "start" }}>
                        <span style={{ fontSize: 20 }}>Job Recommended</span>
                      </Col>
                      <Col style={{ textAlign: "end" }}>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                        >
                          <FaAngleDown color="#ffffff" size={25} />
                        </Accordion.Toggle>
                      </Col>
                    </Row>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <Row>
                            <Col>
                              <Card.Img
                                variant="top"
                                src={"./images/3186l.jpg"}
                                style={{ width: "90%" }}
                              />
                            </Col>
                            <Col
                              sm={7}
                              className="d-none d-lg-block"
                              style={{ textAlign: "start" }}
                            >
                              <div>
                                <FaSuitcase color="#000000" size={25} />
                                {"   "}
                                Ass.Construction Director/ผู้ช่วยผู้อำนวยการ
                                สายงานก่อสร้าง (บริหาร)
                              </div>
                              <div>
                                <FaHotel color="#000000" size={25} />
                                {"   "}
                                Lalin Property Public Company Limited/บริษัท
                                ลลิล พร็อพเพอร์ตี้ จำกัด(มหาชน)
                              </div>
                            </Col>
                            <Col sm style={{ textAlign: "start" }}>
                              ระยะเวลาที่โพสต์
                              <br />2 days ago
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col sm>
                              <Card.Img
                                variant="top"
                                src={"./images/27039l.jpg"}
                                style={{ width: "90%" }}
                              />
                            </Col>
                            <Col sm={7} style={{ textAlign: "start" }}>
                              <div>
                                <FaSuitcase color="#000000" size={25} />
                                {"   "}Project Manager
                              </div>
                              <div>
                                <FaHotel color="#000000" size={25} />
                                {"   "}Areeya Property Public Company Limited
                              </div>
                            </Col>
                            <Col sm style={{ textAlign: "start" }}>
                              ระยะเวลาที่โพสต์
                              <br />5 days ago
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      </ListGroup>
                      <Button variant="primary" size="lg" block>
                        SEE MORE
                      </Button>
                    </>
                  </Accordion.Collapse>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                </Card>
              </Accordion>

              <Accordion defaultActiveKey="0">
                <Card style={{ marginTop: 20, marginBottom: 20 }}>
                  <Card.Header
                    style={{ backgroundColor: "#007bff", color: "#ffffff" }}
                  >
                    <Row>
                      <Col style={{ textAlign: "start" }}>
                        <span style={{ fontSize: 20 }}>Your Follows</span>
                      </Col>
                      <Col style={{ textAlign: "end" }}>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                        >
                          <FaAngleDown color="#ffffff" size={25} />
                        </Accordion.Toggle>
                      </Col>
                    </Row>
                  </Card.Header>

                  <Accordion.Collapse eventKey="0">
                    <>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <Row>
                            <Col sm>
                              <Card.Img
                                variant="top"
                                src={"./images/37132l.jpg"}
                                style={{ width: "90%" }}
                              />
                            </Col>
                            <Col sm={9} style={{ textAlign: "start" }}>
                              <div>
                                <FaSuitcase color="#000000" size={25} />
                                {"   "}Senior Electrical Engineer
                              </div>
                              <div>
                                <FaHotel color="#000000" size={25} />
                                {"   "}PRTR Recruitment & Outsourcing
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col style={{ textAlign: "start" }}>
                              Responsibilities:
                              <ul>
                                <li>
                                  Coordinating engineering work of suppliers,
                                  subcontractors and engineering contractors in
                                  terms of quality, schedule, compliance with
                                  specification, interfaces and completeness of
                                  scope.
                                </li>
                                <li>
                                  Collaborating with other engineering
                                  disciplines, internally and externally to
                                  ensure there will be no internal or external
                                  scope gap.
                                </li>
                                <li>
                                  Reviewing and managing engineering
                                  deliverables between partners, suppliers,
                                  subcontractors, engineering contractors and
                                  customers.
                                </li>
                                <li>
                                  Managing concerned suppliers, subcontractors
                                  and engineering contractors during the project
                                  tendering phase.
                                </li>
                                <li>
                                  Monitoring electrical engineering activities
                                  in the area of responsibility.
                                </li>
                                <li>
                                  Drafting written correspondence for external
                                  project correspondence.
                                </li>
                                <li>
                                  Preparing input for internal and external
                                  progress reports.
                                </li>
                                <li>
                                  Conducting regular visits to project
                                  construction site.
                                </li>
                                <li>
                                  Supporting site operations, if necessary,
                                  through extended stays at the construction
                                  site.
                                </li>
                                <li>
                                  Performing any other tasks as delegated or
                                  requested byline or project superior.
                                </li>
                              </ul>
                              Qualifications:
                              <ul>
                                <li>
                                  Male or Female, aged between 35-45 years old
                                </li>
                                <li>
                                  Bachelor’s degree or higher in Electrical
                                  Engineering or related field
                                </li>
                                <li>
                                  Minimum 10 years of experience in designing
                                  and engineering field.
                                </li>
                                <li>
                                  Experience in Power Plant (BoP) Engineering/
                                  Designing.
                                </li>
                                <li>
                                  Consultant, Construction, Commissioning
                                  experience will be considered as additional
                                  experience.
                                </li>
                                <li>
                                  Fluent in English both written and verbal.
                                </li>
                                <li>
                                  Ability to work in upcountry and abroad.
                                </li>
                              </ul>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm>
                              <Card.Img
                                variant="top"
                                src={"./images/prtr1.jpg"}
                                style={{ width: "95%" }}
                              />
                            </Col>
                            <Col sm>
                              <Card.Img
                                variant="top"
                                src={"./images/prtr2.jpg"}
                                style={{ width: "95%" }}
                              />
                            </Col>
                          </Row>
                          <Button
                            variant="warning"
                            size="lg"
                            block
                            style={{ marginTop: 10 }}
                          >
                            สมัครงาน
                          </Button>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <Row>
                            <Col sm>
                              <Card.Img
                                variant="top"
                                src={"./images/1054l.jpg"}
                                style={{ width: "90%" }}
                              />
                            </Col>
                            <Col sm={9} style={{ textAlign: "start" }}>
                              <div>
                                <FaSuitcase color="#000000" size={25} />
                                {"   "}Quantity Surveyor (6 Months Contract)
                                (60K-80K)
                                (SDG-53332)/ผู้ประเมินราคาและวางแผนโครงการก่อสร้าง
                              </div>
                              <div>
                                <FaHotel color="#000000" size={25} />
                                {"   "}RGF HR Agent Recruitment (Thailand) Co.,
                                Ltd.
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col style={{ textAlign: "start" }}>
                              Job Responsibilities:
                              <ul>
                                <li>
                                  General Commercial and Contract(s) Management
                                  of the Project
                                </li>
                                <li>
                                  Review and advice on Contract provisions and
                                  procedures.
                                </li>
                                <li>
                                  Preparation of Contractual correspondence
                                </li>
                                <li>
                                  Management of Variation Order / Change Order
                                  Accounts, upstream and downstream
                                </li>
                                <li>
                                  Preparation of cost / time claims including
                                  gathering assessing and compiling appropriate
                                  records
                                </li>
                                <li>
                                  Ensure that the correct contractual provisions
                                  are followed to ensure that entitlement is not
                                </li>
                                <li>
                                  Other related tasks within contract
                                  administration
                                </li>
                              </ul>
                              Necessary Skill / Experience:
                              <ul>
                                <li>
                                  Thai nationality , Male/Female, age 35-45
                                  years old
                                </li>
                                <li>
                                  At least 5 years of experiences in Mechanical
                                  or Electrical Engineering work with
                                  construction industry
                                </li>
                                <li>
                                  At least 5 years of experience as a Quantity
                                  Surveyor
                                </li>
                                <li>
                                  Excellent interpersonal and communications
                                  skills
                                </li>
                                <li>
                                  Able to handle English contract and documents,
                                  also able to communicate in English with
                                  various foreign co-workers and external
                                  purposes
                                </li>
                              </ul>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm>
                              <Card.Img
                                variant="top"
                                src={"./images/33333.jpg"}
                                style={{ width: "95%" }}
                              />
                            </Col>
                            <Col sm>
                              <Card.Img
                                variant="top"
                                src={"./images/3333.jpg"}
                                style={{ width: "95%" }}
                              />
                            </Col>
                          </Row>
                          <Button
                            variant="warning"
                            size="lg"
                            block
                            style={{ marginTop: 10 }}
                          >
                            สมัครงาน
                          </Button>
                        </ListGroup.Item>
                      </ListGroup>
                    </>
                  </Accordion.Collapse>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                </Card>
              </Accordion>
            </div>
          </Col>
          <Col>
            <ListGroup
              style={{
                padding: 0,
                margin: 0,
                marginTop: 100,
                textAlign: "start",
              }}
              className="d-none d-sm-none d-md-none d-lg-none d-xl-block"
            >
              <ListGroup.Item style={{ border: "none" }}>
                <Row>
                  <Col sm={6}>
                    <Card.Img
                      variant="top"
                      src={"./images/adv1.jpg"}
                      style={{ width: "100%", height: 100 }}
                    />
                  </Col>
                  <Col sm={6} style={{ fontSize: 14 }}>
                    <span> Advertising is a means of communication</span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item style={{ border: "none" }}>
                <Row>
                  <Col sm={6}>
                    <Card.Img
                      variant="top"
                      src={"./images/adv2.png"}
                      style={{ width: "100%", height: 100 }}
                    />
                  </Col>
                  <Col sm={6} style={{ fontSize: 14 }}>
                    <span> Advertising is a means of communication</span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item style={{ border: "none" }}>
                <Row>
                  <Col sm={6}>
                    <Card.Img
                      variant="top"
                      src={"./images/adv3.jpg"}
                      style={{ width: "100%", height: 100 }}
                    />
                  </Col>
                  <Col sm={6} style={{ fontSize: 14 }}>
                    <span> Advertising is a means of communication</span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item style={{ border: "none" }}>
                <Row>
                  <Col sm={6}>
                    <Card.Img
                      variant="top"
                      src={"./images/adv4.png"}
                      style={{ width: "100%", height: 100 }}
                    />
                  </Col>
                  <Col sm={6} style={{ fontSize: 14 }}>
                    <span> Advertising is a means of communication</span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item style={{ border: "none" }}>
                <Row>
                  <Col sm={6}>
                    <Card.Img
                      variant="top"
                      src={"./images/adv5.jpg"}
                      style={{ width: "100%", height: 100 }}
                    />
                  </Col>
                  <Col sm={6} style={{ fontSize: 14 }}>
                    <span> Advertising is a means of communication</span>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
    </>
  );
}
const ProductsContainer = () => (
  <Navbar bg="primary" expand="lg" fixed="top">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Brand
      href="#home"
      style={{
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "bold",
        width: "20%",
        textAlign: "start",
      }}
    >
      Happy Labor
    </Navbar.Brand>
    <Navbar.Collapse
      id="basic-navbar-nav"
      style={{ textAlign: "center" }}
      className="justify-content-center"
    >
      <Nav>
        <Nav.Link
          href="#home"
          style={{
            color: "#ffffff",
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <FaHome color="#ffffff" size={25} />
          <br />
          Home
        </Nav.Link>
        <Nav.Link
          href="#link"
          style={{
            color: "#ffffff",
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <FaUserFriends color="#ffffff" size={25} />
          <br />
          My Follower
        </Nav.Link>
        <Nav.Link
          href="#link"
          style={{
            color: "#ffffff",
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <FaFileAlt color="#ffffff" size={25} />
          <br />
          News
        </Nav.Link>
        <Nav.Link
          href="#link"
          style={{
            color: "#ffffff",
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <FaBell color="#ffffff" size={25} />
          <br />
          Notification
        </Nav.Link>
        <Nav.Link
          href="#link"
          style={{
            color: "#ffffff",
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <FaSuitcase color="#ffffff" size={25} />
          <br />
          Jobs
        </Nav.Link>
      </Nav>

      {/* <Card.Img
        variant="top"
        src={"./images/temp.jpg"}
        style={{ width: 50, height: 50 }}
      /> */}

      {/* <Nav className="mr-auto">
        <Card.Img
          variant="top"
          src={"./images/temp.jpg"}
          style={{ width: 50, height: 50 }}
        />
        <div style={{ alignSelf: "center", paddingLeft: 10 }}>
          {"  "}Nameeeeeee{"  "}
        </div>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      </Nav> */}
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form> */}
    </Navbar.Collapse>

    <div
      style={{
        width: "20%",
      }}
    ></div>
  </Navbar>
);

export default App;
