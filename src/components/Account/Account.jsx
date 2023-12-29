function Account (props) {

    const {name, amount, status} = props;

    return (
        <section className="account">
            <div className="account-content-wrapper">
            <h3 className="account-title">{name}</h3>
            <p className="account-amount">{amount}</p>
            <p className="account-amount-description">{status}</p>
            </div>
            <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}


export default Account;