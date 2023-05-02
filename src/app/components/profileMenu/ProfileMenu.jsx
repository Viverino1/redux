import { useSelector } from 'react-redux';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, handleAuthClick, handleSignoutClick } from '../../../firebase_setup/firebase';

const ProfileMenu = () => {
    const profileMenuIsActive = useSelector((state) => state.profileMenu.isActive);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    onAuthStateChanged(auth, (user) => {
        setIsLoggedIn(user? true : false);
    })

    return(
        <div className={`${profileMenuIsActive == true ? "w-40" : "w-0"}  transition-width duration-300 overflow-clip`}>
            <div className='flex flex-col space-y-5 justify-center items-center w-full p-5 bg-NavBarColor rounded-xl'>
                <button className=' w-32 h-8 bg-BodyColor rounded-lg' onClick={ () => isLoggedIn? handleSignoutClick() : handleAuthClick() }>
                    {isLoggedIn ? "Logout" : "Login"}
                </button>
                <button className=' w-32 h-8 bg-BodyColor rounded-lg'>
                    Read
                </button>
            </div>
        </div>
    )
}

export default ProfileMenu