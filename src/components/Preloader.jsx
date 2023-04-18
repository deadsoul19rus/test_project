import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Preloader() {
    
    return (

        <Row className="justify-content-md-center mb-3">
            <Col xs lg="2">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            </Col>
        </Row>
        
    );
}

export { Preloader };