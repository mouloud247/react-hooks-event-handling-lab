// Code Keypad Component Here

function Keypad() {
    function changeHandler() {
        console.log('Entering password...')
    }
    return (
        <div>
            <input onChange={changeHandler} type="password" name="password" placeholder="Enter password..." />
        </div>
    )
}

export default Keypad;