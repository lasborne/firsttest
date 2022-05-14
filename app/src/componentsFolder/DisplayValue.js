//This is a simple User-defined component for displaying texts to a viewer/user
const DisplayValue = (props) => {

    return (
        <p className='display-value' >
            {props.text}
        </p>
    )
}

export default DisplayValue