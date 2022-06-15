// This is simple user-defined react component for a button
// It is exported, and used by many other components in the Main App
const Button = (props) => {

    return (
        <div className='btn-block'>
            <button className='btn' onClick={props.onClick} onClickCapture={props.onSet}>
                {props.title}
            </button>
        </div>
    )
}
Button.defaultProps = {
    title: 'Login'
}
export default Button