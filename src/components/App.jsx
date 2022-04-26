import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";
import Tabs from "./Tabs";
import Search from "./Search";
import List from "./List";
import Details from "./Details";

function App() {
    // definitions
    const [showDetails, setShowDetails] = useState(false);
    // passing to list component, then receiving the selected product. 
    const [product, setProduct] = useState({});

    // console.log("showDetails", showDetails);

    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Title />
                    <Tabs />
                </Col>
            </Row>
            <Row>
                <Col sm={3}></Col>
                <Col sm={6}>
                    <List setShowDetails={setShowDetails} setProduct={setProduct} />
                </Col>
                <Col sm={3}>
                    {
                        showDetails && 
                            <Details 
                                productName={product.productName} 
                                tags={product.tags} 
                                manufacturerUrl={product.manufacturerUrl} 
                                description={product.description} 
                                option1={product.option1} 
                                option2={product.option2} 
                            />
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default App;