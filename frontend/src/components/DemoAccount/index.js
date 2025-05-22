import {useDispatch} from "react-redux"
import * as sessionActions from "../../store/session";
import "./DemoAccount.css"

    const DemoAccount = () => {

        const dispatch = useDispatch();

        const handleClick = (e) => {
            e.preventDefault()
            const email = "demo@user.io"
            const password = "password"
            dispatch(sessionActions.login({email, password}));
        }

        return (
            <button className="demo-login" onClick={(e) => handleClick(e)}>
                Login Demo
            </button>
        )

    }

    export default DemoAccount;
