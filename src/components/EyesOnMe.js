// Code EyesOnMe Component Here
function EyesOnMe() {


    function handleFocusEvent() {
        console.log('Good!')
    }
    function handleBlurEvent() {
        console.log('Hey! Eyes on me!')
    }

    return (
        <div>
            <button onFocus={handleFocusEvent} onBlur={handleBlurEvent}>Eyes on me</button>
        </div>
    )

}


export default EyesOnMe;