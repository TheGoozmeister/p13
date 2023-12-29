import { useState } from "react";
import { updateUserInfos } from "../../services/api";
import { useDispatch } from "react-redux";
import { setUserFirstName, setUserLastName } from "../../store/auth/authSlice";

function EditNameForm(props) {

    const {firstName, lastName, hideEdit} = props;
    const dispatch = useDispatch();
    const [userInfos, setUserInfos] = useState({
        firstName: "",
        lastName: ""
    });

    function handleCancelClick () {
        hideEdit();
    }

    function handleChange(input) {
        const {name, value} = input.target;
        setUserInfos(userInfos=>{
            return {
                ...userInfos,
                [name]: value
            }
        })
    }

    async function handleSaveUserDatas(e) {
        try {
            const userUpdated = await updateUserInfos(userInfos);
            console.log(userUpdated)
            if (userUpdated.status===200) {
                dispatch(setUserFirstName(userInfos.firstName));
                dispatch(setUserLastName(userInfos.lastName));
                hideEdit();
                console.log("test")
            }
            console.log(userUpdated)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="editInputs">
                <input className="editInput editFirstName" type="text" placeholder={firstName} name="firstName" onChange={handleChange}/>
                <input className="editInput editLastName" type="text" placeholder={lastName} name="lastName" onChange={handleChange}/>
            </div>
            <div>
                <button className="edit-button saveButton" onClick={handleSaveUserDatas}>Save</button>
                <button className="edit-button cancelButton" onClick={handleCancelClick}>Cancel</button>
            </div>
        </div>
    )
}


export default EditNameForm;