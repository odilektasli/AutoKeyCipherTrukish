import React from 'react'

import ReactCountryFlag from 'react-country-flag'
import {
    Input,
    Button,
    Row,
    Col,
    Container,
    Form,
    Label
} from 'reactstrap'

class AlphabetSelection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alphabet: "Turkish"
        }

        this.setAlphabet = (alphabet) => {
            this.props.setAlphabet(alphabet)
            this.setState({ alphabet: alphabet === "TR" ? "Turkish" : "English" })
        }

    }
    render() {
        return (
            <Row className="d-flex justify-content-center">
                <p className="text-white text-center p-0" style={{ fontSize: "35px" }}>Select the alphabet</p>
                <Col xs="auto">
                    <ReactCountryFlag onClick={() => this.setAlphabet("TR")}
                        countryCode="TR"
                        svg
                        style={{
                            width: '7em',
                            height: 'em',
                            borderRadius: '20%',
                            cursor: 'pointer'
                        }}
                        title="TR"
                    />
                </Col>
                <Col xs="auto">
                    <ReactCountryFlag onClick={() => this.setAlphabet("EN")}
                        countryCode="US"
                        svg
                        style={{
                            width: '7em',
                            height: 'em',
                            borderRadius: '20%',
                            cursor: 'pointer'
                        }}
                        title="US"
                    />
                </Col>
                <p className="text-white text-center mt-3" style={{ fontStyle: "italic", fontSize: "25px" }}>Selected alphabet is {this.state.alphabet}</p>
            </Row>
        )
    }
}

export default AlphabetSelection