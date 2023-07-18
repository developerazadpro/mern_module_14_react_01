const Child = (props) => {
    return (
        <div>
            <h2>My Name is: { props.firstName }</h2>
            <h3>I am {props.lastName}</h3>
            <p>id: {props.product['id']}</p>
            <p>Name: {props.product['name']}</p>
            <p>Price: {props.product['price']}</p>
        </div>
    );
};

export default Child;