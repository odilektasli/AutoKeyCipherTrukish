import React from 'react'
import {
    Input,
    Button,
    Row,
    Col,
    Form,
    Label
} from 'reactstrap'
class Encryption extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: undefined,
            key: undefined,
            loading: false,
            encrypted: "",
            alphabet: this.props.alphabet,
            letters: this.props.letters,
            table: this.props.table,
            enError: ['Q', 'W', 'X'],
            trError: ['Ğ', 'Ü', 'Ş', 'Ö', 'Ç']
        }

        this.encryption = (event) => {
            event.preventDefault()
            if (!this.state.key || !this.state.text) {
                alert("Text or key could not be empty!")
            } else if (this.state.key.includes(" ") || this.state.text.includes(" ")) {
                alert("Please be sure that there is no blank space in key or text")
            } else if (this.state.alphabet == "TR" && (this.state.enError.some(el => this.state.key.includes(el)) || this.state.enError.some(el => this.state.text.includes(el)))) {
                alert("Please switch alphabet to English to make this encryption")
                window.location.reload()
            } else if (this.state.alphabet == "EN" && (this.state.trError.some(el => this.state.key.includes(el)) || this.state.trError.some(el => this.state.text.includes(el)))) {
                alert("Please switch alphabet to Turkish to make this encryption")
                window.location.reload()
            } else {
                console.log(this.state.table)
                let dummyText = this.state.text
                let dummyKey = this.state.key
                let addedLength = this.state.text.length - this.state.key.length
                if (this.state.text.length > this.state.key.length) {
                    dummyKey = dummyKey.concat(dummyText.slice(0, addedLength))
                    console.log("ifDummyKey", dummyKey)
                }
                this.setState({ loading: true }, () => {
                    let dummyEncrypt = ""
                    for (let i = 0; i < dummyText.length; i++) {
                        let keyChar = dummyKey.slice(i, i + 1)
                        let textChar = this.state.text.slice(i, i + 1)
                        let keyIndex = this.state.letters.indexOf(keyChar)
                        let textIndex = this.state.letters.indexOf(textChar)
                        console.log(dummyEncrypt)
                        dummyEncrypt = dummyEncrypt.concat(this.state.table[keyIndex][textIndex])
                    }
                    console.log("dummyText", dummyText, "dummyKey", dummyKey, "dummyEncrypt", dummyEncrypt)
                    this.setState({ encrypted: dummyEncrypt })
                })
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
            <Form id="submit-form" onSubmit={this.encryption}>
                <h1 className="text-center" style={{ color: "white" }}>Encryption</h1>
                <Label className="text-white" style={{ fontSize: "20px" }}>Enter key:</Label>
                <Input className="my-3" style={{ fontSize: "25px" }} onChange={(event) => this.setState({ key: this.state.alphabet == "TR" ? event.target.value.toLocaleUpperCase('tr-TR') : event.target.value.toUpperCase(), deneme: this.state.alphabet == "TR" ? event.target.value.toLocaleUpperCase('tr-TR') : event.target.value.toUpperCase() })} placeholder="Enter key here..."></Input>
                <Label className="text-white" style={{ fontSize: "20px" }}>Enter plaintext:</Label>
                <Input className="my-3" type="textarea" style={{ fontSize: "25px" }} onChange={(event) => this.setState({ text: this.state.alphabet == "TR" ? event.target.value.toLocaleUpperCase('tr-TR') : event.target.value.toUpperCase() })} placeholder="Enter plaintext here..."></Input>
                <Row className="d-flex justify-content-center">
                    <Col xs="auto my-1">
                        <Button color="success" className="text-white" style={{ fontSize: "25px", borderRadius: "10%" }} form="submit-form">Encrypt</Button>
                    </Col>
                </Row>
                {
                    this.state.encrypted ? (
                        <div>
                            <Label className="text-white mb-2" style={{ fontSize: "20px" }}>Encrypted text:</Label>
                            <Input disabled type="textarea" style={{ fontSize: "25px" }} value={this.state.encrypted} />
                        </div>
                    ) : null
                }
            </Form>
        )
    }
}

export default Encryption