import React from 'react';
import Container from '../../components/Container';
import Col from '../../components/Col';
import Row from '../../components/Row';
import homepageHero from '../../components/Homepage-Hero';
import Header from '../../components/Header'
import FeaturedList from '../../components/FeaturedList';
import Nav from '../../components/Nav'
const Homepage = () => {
    return (
        <Container fluid>
            <Row>
                <Col size='md-6'>
                    <Header />
                    <Nav />
                </Col>
            </Row>
            <Row>
            <FeaturedList />
            </Row>
        </Container>
    )
}

export default Homepage;