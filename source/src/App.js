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
import TypeWritter from './global/typeWritter'

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
            // table: [
            //     ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"],
            //     ["B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A"],
            //     ["C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B"],
            //     ["Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C"],
            //     ["D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç"],
            //     ["E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D"],
            //     ["F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E"],
            //     ["G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F"],
            //     ["Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G"],
            //     ["H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ"],
            //     ["I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H"],
            //     ["İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I"],
            //     ["J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ"],
            //     ["K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J"],
            //     ["L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K"],
            //     ["M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L"],
            //     ["N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M"],
            //     ["O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N"],
            //     ["Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O"],
            //     ["P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö"],
            //     ["R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P"],
            //     ["S", "Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R"],
            //     ["Ş", "T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S"],
            //     ["T", "U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş"],
            //     ["U", "Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T"],
            //     ["Ü", "V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U"],
            //     ["V", "Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü"],
            //     ["Y", "Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V"],
            //     ["Z", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y"],
            // ],
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
            </div>
        )
    }

}

export default App;
