import React from 'react'
import Encryption from './components/Encryption'
import Decryption from './components/Decryption'
import {
    Input,
    Button,
    Row,
    Col,
    Container,
    Form
} from 'reactstrap'
import logo from './logo.svg';
import styles from './App.css';
import Background from './background.jpg'

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
            deneme: undefined,
            dict: [{ A: 1, B: 2, C: 3, Ç: 4, D: 5, E: 6 }],
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
            table2: []
        }
    }

    async componentDidMount() {
        // let letters = this.state.letters
        // let dummyTable = this.state.table2
        // this.setState({ deneme: false }, () => {
        //     for (let i = 0; i < 29; i++) {
        //         let front = letters.splice(0, 1)
        //         front.concat(letters)
        //         this.setState({ deneme: true }, () => {
        //             console.log(letters)
        //         })
        //     }
        //     this.setState({ table2: dummyTable })
        // })
    }
    render() {
        return (
            <Container className="align-items-center" >
                <Row >
                    <Col >
                        <Encryption />
                    </Col>
                    <Col>
                        <Decryption />
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default App;
