import "./signin.css"

export default function Signin(){
    return(
        <div>
            <h1><strong>Sign In</strong> if you have already <strong>Signed Up</strong></h1>
            <form>
                <label>User name: </label>
                <input type="text"/>
                <label>Password: </label>
                <input type="password"/>
            </form>
        </div>
    )
}