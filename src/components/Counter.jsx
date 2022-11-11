import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialValue: 0,
            developer: this.props.developerName
        }
    }

    componentDidMount() {
        console.log("%c Se montó el componente ", "background:green");
    }

    componentDidUpdate() {
        console.log("%c Se actualizó el componente ", "background:orange");
    }

    componentWillUnmount() {
        console.log("%c Se desmontó el componente ", "background:red");
    }

    increment() {
        const actualValue = this.state.initialValue;
        if(actualValue === 15){
            console.log("Llegamos a 15");
            console.log("Dejamos de sumar");
            return;
        }
        this.setState({ initialValue: actualValue + 1 })
    }

    decrement() {
        const actualValue = this.state.initialValue;
        if(actualValue === 0){
            console.log("Llegamos a 0");
            console.log("Dejamos de restar");
            return;
        }
        this.setState({ initialValue: actualValue - 1 })
    }

    changeDeveloperName(name) {
        this.setState({ developer: name });
    }

    render() {
        const { initialValue, developer } = this.state;
        const { subject } = this.props;
        return(
            <>
                <hr/>
                <h2 onMouseOver={ () => console.log("Pasaste el mouse")}>Contador</h2>
                <p>El valor del contador es: { initialValue }</p>
                <button onClick={ () => this.increment() }>Incrementar</button>
                <button onClick={ () => this.decrement() }>Decrementar</button>
                <button onClick={ () => this.changeDeveloperName("Peter") }>Cambiar nombre del developer</button>
                <em>El developer es { developer } y le encanta programar en { subject }</em>
                <hr/>
            </>
        )
    }
}

export default Counter;