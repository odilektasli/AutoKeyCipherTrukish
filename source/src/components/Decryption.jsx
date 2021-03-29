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

        this.decryption = () => {
            let keyInput = this.state.keyInput
            let text = " "
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
    render() {
        return (
            <Form>
                <h1 className="text-center text-white">Decryption</h1>
                <Input className="my-3" id="key" onChange={(event) => this.setState({ keyInput: event.target.value.toLocaleUpperCase('tr-TR') })} placeholder="Key giriniz..."></Input>
                <Input className="my-3" onChange={(event) => this.setState({ cipherText: event.target.value.toLocaleUpperCase('tr-TR') })} placeholder="Text giriniz..."></Input>
                <Button onClick={() => { this.decryption() }}>Decrypt</Button>
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