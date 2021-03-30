import React from 'react'
import {
    Input,
    Button,
    Row,
    Col,
    Container,
    Form
} from 'reactstrap'
class Encryption extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: undefined,
            key: undefined,
            loading: false,
            encrypted: "",
            letters: this.props.letters,
            table: this.props.table
        }

        this.encryption = (event) => {
            event.preventDefault()
            console.log("key", this.state.key, "text", this.state.text, "deneme", this.state.deneme)
            let dummyText = this.state.text
            let dummyKey = this.state.key
            let addedLength = this.state.text.length - this.state.key.length
            if (this.state.text.length > this.state.key.length) {
                dummyKey = dummyKey.concat(dummyText.slice(0, addedLength))
                console.log("ifDummyKey", dummyKey)
            }
            this.setState({ loading: true }, () => {
                let dummyEncrypt = ""
                for (let i = 0; i < dummyKey.length; i++) {
                    let keyChar = dummyKey.slice(i, i + 1)
                    let textChar = this.state.text.slice(i, i + 1)
                    let keyIndex = this.state.letters.indexOf(keyChar)
                    let textIndex = this.state.letters.indexOf(textChar)
                    dummyEncrypt = dummyEncrypt.concat(this.state.table[keyIndex][textIndex])
                }
                console.log("dummyText", dummyText, "dummyKey", dummyKey, "dummyEncrypt", dummyEncrypt)
                this.setState({ encrypted: dummyEncrypt })
            })
        }

    }

    componentDidUpdate(oldProps) {
        if (oldProps.alphabet !== this.props.alphabet) {
            this.setState({ letters: this.props.letters, table: this.props.table })
        }
    }


    render() {
        return (
            <Form id="submit-form" onSubmit={this.encryption}>
                <h1 className="text-center" style={{ color: "white" }}>Encryption</h1>
                <Input className="my-3" onChange={(event) => this.setState({ key: this.state.alphabet == "TR" ? event.target.value.toLocaleUpperCase('tr-TR') : event.target.value.toUpperCase(), deneme: this.state.alphabet == "TR" ? event.target.value.toLocaleUpperCase('tr-TR') : event.target.value.toUpperCase() })} placeholder="Key giriniz..."></Input>
                <Input className="my-3" onChange={(event) => this.setState({ text: this.state.alphabet == "TR" ? event.target.value.toLocaleUpperCase('tr-TR') : event.target.value.toUpperCase() })} placeholder="Text giriniz..."></Input>
                <Row className="d-flex justify-content-center">
                    <Col xs="auto my-1">
                        <Button form="submit-form">Encrypt</Button>
                    </Col>
                </Row>
                {
                    this.state.encrypted ? (
                        <Input disabled value={this.state.encrypted} />
                    ) : null
                }
            </Form>
        )
    }
}

export default Encryption