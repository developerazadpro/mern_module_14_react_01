// IIF : immediately invoked function
const Iif = () => {
    return (
        <div>
            {(() => {
                    return "Immediately Invoked function called";
            })()}
            <br />

            {(() => {
                    return "I am IIF"
            })()}
        </div>

        
    )

}
export default Iif;