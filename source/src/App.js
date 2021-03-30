import React from 'react'
import Encryption from './components/Encryption'
import Decryption from './components/Decryption'
import AlphabetSelection from './components/AlphabetSelection'
import {
    Input,
    Button,
    Row,
    Col,
    Container,
    Form,
    Label
} from 'reactstrap'
import logo from './logo.svg';
import styles from './App.module.css';
import Background from './background.jpg'
import TypeWritter from './global/TypeWritter'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: undefined,
            key: undefined,
            keyInput: undefined,
            cipherText: undefined,
            plainText: undefined,
            encrypted: "",
            alphabet: "",
            deneme: undefined,
            dict: [{ A: 1, B: 2, C: 3, Ç: 4, D: 5, E: 6 }],
            trLetters: ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"],
            enLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            letters: undefined,
            table: []
        }

        this.rotate = (array) => {
            let dumArr = [...array]
            dumArr.push(dumArr.shift())
            return dumArr
        }

        this.createTable = () => {
            let letters = this.state.letters
            let dummyTable = this.state.table
            let times = letters.length
            for (let i = 0; i < times; i++) {
                dummyTable.push(letters)
                letters = this.rotate(letters)

            }
            this.setState({ table: dummyTable }, () => console.log(this.state.letters, this.state.table))
        }

        this.setAlphabet = (alphabet) => {
            this.setState({ alphabet: alphabet, table: [], letters: alphabet == "TR" ? this.state.trLetters : this.state.enLetters }, () => this.createTable())
            console.log(alphabet)
        }
    }

    componentDidMount() {
        this.setState({ alphabet: "TR", letters: this.state.trLetters }, () => { this.createTable() })

    }

    render() {
        return (
            <div className={styles.Banner}>
                <Container className="align-items-center">
                    <Row>
                        <Col className={styles.Input}>
                            <TypeWritter value="ISE-426 Computer Security / Vigenère Autokey System " />
                            <p className="text-white  p-0 m-0" style={{ fontStyle: "italic", fontWeight: "lighter", fontFamily: "italic" }}>Written by;</p>
                            <p className="text-white  p-0 m-0" style={{ fontWeight: "lighter", fontFamily: "italic" }}>Özer DİLEKTAŞLI - 17243510048</p>
                            <p className="text-white  p-0 m-0" style={{ fontWeight: "lighter", fontFamily: "italic" }}>Onuralp Enes ÖZ - 17243510014</p>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col className={styles.Input} xs="auto">
                            <AlphabetSelection setAlphabet={this.setAlphabet} />
                        </Col>
                    </Row>
                    <Row >
                        <Col className={styles.Input}>
                            <Encryption alphabet={this.state.alphabet} table={this.state.table} letters={this.state.letters} />
                        </Col>
                        <Col className={styles.Input}>
                            <Decryption alphabet={this.state.alphabet} table={this.state.table} letters={this.state.letters} />
                        </Col>

                    </Row>
                </Container>
                <div className={styles.Background} />
            </div >
        )
    }

}

export default App;
