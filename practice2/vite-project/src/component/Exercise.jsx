const cities = ['Dhaka', 'Rangpur', 'Dinajpur', 'Rajshahi'];
const onboard = (status) => {
    return status?'Oboard Done': 'Onboard ongoing';
};

const adult = true;




const Exercise = () => {
    // const isLoggedIn = true;
    // switch (isLoggedIn){
    //     case true:
    //         return <button>Logout</button>;
    //     case false:
    //         return <button>Login</button>;
    //     default:
    //         null;
    // }
    return (
        <div>
            {/* Loop */}
            {/* <ul>
                {
                    cities.map((item, i) => {                    
                        return <li key={i.toString()}>{item}</li>                  
                    })
                }
            </ul> */}

            {/* Conditional rendering */}
            {/* <h3>Onboard of Client: { onboard(false) }</h3> */}

            {/* logical AND && */}
            {/* <h1>Status</h1>
            {
                adult && <button>You are adult</button>
            } */}
            
        </div>
    )
}
export default Exercise;