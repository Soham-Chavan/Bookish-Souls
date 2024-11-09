export default function SignUp() {
    return(
        <div>
            <form>
                <label>Username: </label>
                <input type="text"/>
                <label>Create a password: </label>
                <input type="password"/>
                <label>Re-enter the password to confirm: </label>
                <input type="password"/>
            </form>
        </div>
    )
}