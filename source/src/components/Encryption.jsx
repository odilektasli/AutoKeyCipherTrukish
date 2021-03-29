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
            letters: ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"],
            table: [
                ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"],
                ["B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A"],
                ["C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B"],
                ["Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C"],
                ["D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç"],
                ["E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D"],
                ["F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E"],
                ["G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F"],
                ["Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G"],
                ["H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ"],
                ["I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H"],
                ["İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I"],
                ["J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ"],
                ["K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J"],
                ["L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K"],
                ["M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L"],
                ["N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M"],
                ["O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N"],
                ["Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O"],
                ["P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö"],
                ["R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P"],
                ["S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R"],
                ["Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S"],
                ["T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş"],
                ["U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T"],
                ["Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U"],
                ["V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü"],
                ["Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V"],
                ["Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y"],
            ],
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

    render() {
        return (
            <Form id="submit-form" onSubmit={this.encryption}>
                <h1 className="text-center">Encryption</h1>
                <Input className="my-3" onChange={(event) => this.setState({ key: event.target.value.toLocaleUpperCase('tr-TR'), deneme: event.target.value.toLocaleUpperCase('tr-TR') })} placeholder="Key giriniz..."></Input>
                <Input className="my-3" onChange={(event) => this.setState({ text: event.target.value.toLocaleUpperCase('tr-TR') })} placeholder="Text giriniz..."></Input>
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