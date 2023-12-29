import { useSelector } from "react-redux";
import Account from "../../components/Account/Account"
import EditNameForm from "../../components/EditNameForm/EditNameForm";
import { useState } from "react";


function UserPage () {

    const ACCOUNTS_DATAS = [{
        name: "Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        status: "Available Balance"
    },{
        name: "Argent Bank Savings (x6712)",
        amount: "$10,928.42",
        status: "Available Balance"
    },{
        name: "Argent Bank Credit Card (x8349)",
        amount: "$184.30",
        status: "Current Balance"
    }];

    const firstName = useSelector((state)=>state.auth.userFirstName);
    const lastName = useSelector((state)=>state.auth.userLastName);

    const [showEditName, setShowEditName] = useState(false);

    function handleEdit () {
        setShowEditName(true);
    }

    function handleCancel() {
        setShowEditName(false);
    }

    return(
        <main className="main bg-dark">
            {
                showEditName ? 
                    <div className="header">
                        <h1>Welcome back</h1>
                        <EditNameForm firstName={firstName} lastName={lastName} hideEdit={handleCancel} />
                    </div>
                :
                    <div className="header">
                        <h1>Welcome back<br />{firstName} {lastName} !</h1>
                        <button className="edit-button" onClick={handleEdit}>Edit Name</button>
                    </div>
            }
            <h2 className="sr-only">Accounts</h2>
            {
                ACCOUNTS_DATAS.map((account, index)=>(
                    <Account name={account.name} amount={account.amount} status={account.status} key={index}/>
                ))
            }
        </main>
    )
}


export default UserPage;