import React from 'react'
import {
    Input,
    Button,
    Row,
    Col,
    Form,
    Label,
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
            alphabet: this.props.alphabet,
            enError: ['Q', 'W', 'X'],
            trError: ['Ğ', 'Ü', 'Ş', 'İ', 'Ö', 'Ç']
        }

        this.decryption = () => {
            if (!this.state.keyInput || !this.state.cipherText) {
                alert("Text or key could not be empty!")
            } else if (this.state.keyInput.includes(" ") || this.state.cipherText.includes(" ")) {
                alert("Please be sure that there is no blank space in key or text")
            } else if (this.state.alphabet == "TR" && (this.state.enError.some(el => this.state.keyInput.includes(el)) || this.state.enError.some(el => this.state.cipherText.includes(el)))) {
                alert("Please switch alphabet to English to make this decryption")
                window.location.reload()
            } else if (this.state.alphabet == "EN" && (this.state.trError.some(el => this.state.keyInput.includes(el)) || this.state.trError.some(el => this.state.cipherText.includes(el)))) {
                alert("Please switch alphabet to Turkish to make this decryption")
                window.location.reload()
            } else {
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

    }

    componentDidUpdate(oldProps) {
        if (oldProps.alphabet !== this.props.alphabet) {
            this.setState({ letters: this.props.letters, table: this.props.table, alphabet: this.props.alphabet })
        }
    }

    render() {
        return (
            <Form>
                <h1 className="text-center" style={{ color: "white" }}>Decryption</h1>
                <Label className="text-white" style={{ fontSize: "20px" }}>Enter key:</Label>
                <Input className="my-3" id="key" style={{ fontSize: "25px" }} onChange={(event) => this.setState({ keyInput: this.state.alphabet == "TR" ? event.target.value.toLocaleUpperCase('tr-TR') : event.target.value.toUpperCase() })} placeholder="Key giriniz..."></Input>
                <Label className="text-white" style={{ fontSize: "20px" }}>Enter cipher text:</Label>
                <Input className="my-3" style={{ fontSize: "25px" }} type="textarea" onChange={(event) => this.setState({ cipherText: this.state.alphabet == "TR" ? event.target.value.toLocaleUpperCase('tr-TR') : event.target.value.toUpperCase() })} placeholder="Text giriniz..."></Input>
                <Row className="d-flex justify-content-center">
                    <Col xs="auto my-1">
                        <Button color="success" className="text-white" style={{ fontSize: "25px", borderRadius: "10%" }} onClick={() => { this.decryption() }}>Decrypt</Button>
                    </Col>
                </Row>
                {
                    this.state.plainText ? (
                        <div>
                            <Label className="text-white mb-2" style={{ fontSize: "20px" }}>Decrypted text:</Label>
                            <Input type="textarea" style={{ fontSize: "25px" }} disabled value={this.state.plainText} />
                        </div>
                    ) : null
                }
            </Form>
        )
    }
}

export default Decryption