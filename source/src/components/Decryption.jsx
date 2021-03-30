import React from 'react'
import {
    Input,
    Button,
    Row,
    Col,
    Container,
    Form
} from 'reactstrap'

class Decryption extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyInput: undefined,
            cipherText: undefined,
            plainText: undefined,
            letters: this.props.letters,
            table: this.props.table,
            alphabet: this.props.alphabet
        }

        this.decryption = () => {
            let keyInput = this.state.keyInput
            let text = " "
            console.log(this.state.letters)
            for (let i = 0; i < this.state.cipherText.length; i++) {
                let keyIndex = this.state.letters.indexOf(keyInput.charAt(i))
                let currentPlace = this.state.table[keyIndex].indexOf(this.state.cipherText.slice(i, i + 1))
                let plainTextLetter = this.state.letters[currentPlace]
                console.log(plainTextLetter)
                text = text.concat(plainTextLetter)
                keyInput = keyInput.concat(plainTextLetter)
            }

            this.setState({ plainText: text })


        }

    }

    componentDidUpdate(oldProps) {
        if (oldProps.alphabet !== this.props.alphabet) {
            this.setState({ letters: this.props.letters, table: this.props.table })
        }
    }

    render() {
        return (
            <Form>
                <h1 className="text-center" style={{ color: "white" }}>Decryption</h1>
                <Input className="my-3" id="key" onChange={(event) => this.setState({ keyInput: this.state.alphabet == "TR" ? event.target.value.toLocaleUpperCase('tr-TR') : event.target.value.toUpperCase() })} placeholder="Key giriniz..."></Input>
                <Input className="my-3" onChange={(event) => this.setState({ cipherText: this.state.alphabet == "TR" ? event.target.value.toLocaleUpperCase('tr-TR') : event.target.value.toUpperCase() })} placeholder="Text giriniz..."></Input>
                <Row className="d-flex justify-content-center">
                    <Col xs="auto my-1">
                        <Button onClick={() => { this.decryption() }}>Decrypt</Button>
                    </Col>
                </Row>
                {
                    this.state.plainText ? (
                        <Input disabled value={this.state.plainText} />
                    ) : null
                }
            </Form>
        )
    }
}

export default Decryption