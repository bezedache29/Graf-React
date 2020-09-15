const Welcome = (props) => {
    return <h1>Bonjour {props.name}</h1>
}

ReactDOM.render(<Welcome name="Ripley" />, document.querySelector('#app'))