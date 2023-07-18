function submitForm(e){
    e.preventDefault();
    alert('Form submitted');
}

const Form = () => {
    return (
        <div>
            <h3>Registration Form</h3>
            <form onSubmit={submitForm}>
                <input type="text" />
                <button>submit</button>
            </form>
        </div>
    );
};

export default Form;