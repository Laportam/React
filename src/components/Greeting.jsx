import PropTypes from 'prop-types';

const Greeting = (props) => {
  return (
    <>
      <h2 style={{
        color: "red",
        textAlign: "center"
      }}>{props.text}</h2>
      {props.children}
    </>
  )
}

Greeting.propTypes = {
  text: PropTypes.string
}

Greeting.defaultProps = {
  text:"Default text prop"
}

export default Greeting;