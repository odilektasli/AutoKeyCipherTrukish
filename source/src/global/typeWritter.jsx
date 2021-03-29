// React Base Component
import React from 'react'

// CSS Module
import styles from './modules/TypeWritter.module.css'

class TypeWritter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: "",
            cursor: true
        }

        this.reveal = (loop) => {
            if (0 < loop) {
                this.setState({
                    value: this.state.value + this.props.value.charAt(this.state.index),
                    index: this.state.index + 1
                }, () => {
                    setTimeout(() => {
                        this.reveal(loop - 1)
                    }, 50)
                })
            } else {
                this.flashingCursor()
            }
        }

        this.flashingCursor = () => {
            this.setState({ cursor: !this.state.cursor }, () => {
                setTimeout(() => {
                    this.flashingCursor()
                }, 500)
            })
        }
    }

    componentDidMount() {
        this.setState({
            index: 0,
            width: typeof this.props.value === 'string' ? this.props.value.length : 0
        }, () => {
            setTimeout(() => {
                this.reveal(this.state.width)
            }, 500);
        })
    }

    render() {
        return (
            <p className={styles.TypeWritter + " px-2 pt-3 mb-5 mt-5 mx-auto text-center text-sm-left"} style={{ width: (this.state.width + 3) + "ch", fontSize: "25pt" }}>
                {[this.state.value, (this.state.cursor ? '|' : <span>&nbsp;</span>)]}
            </p>
        )
    }
}

export default TypeWritter
