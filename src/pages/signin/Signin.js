import { auth, signInWithGoogle, logout } from "../../firebase_setup/firebase"

const Signin = () => {
    return(
        <div className="flex h-full text-NavBarTextColor">
            <div className="flex flex-col items-center h-full w-2/3">
                <div className="text-3xl font-bold pt-16 pb-5">Login to your account</div>
                <button className="flex justify-center space-x-5 rounded-xl items-center h-16 w-64 p-2 bg-NavBarColor" onClick={() => signInWithGoogle()}>
                    <img src="./GoogleLogo.png" className="h-10"></img>
                    <div>
                        Continue with Google
                    </div>
                </button>
            </div>
            <div className="flex flex-col items-center h-full w-1/3 bg-NavBarColor">
                <div className="text-3xl font-bold pt-16 pb-5">New Here?</div>
                <button className="flex justify-center space-x-5 rounded-xl items-center h-16 w-64 p-2 bg-BodyColor" onClick={() => signInWithGoogle()}>
                    <img src="./GoogleLogo.png" className="h-10"></img>
                    <div>
                        Signup with Google
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Signin;