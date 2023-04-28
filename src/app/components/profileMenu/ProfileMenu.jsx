import { useSelector } from 'react-redux';

const ProfileMenu = () => {
    const profileMenuIsActive = useSelector((state) => state.profileMenu.isActive);
    const isLoggedIn = useSelector((state) => state.profileMenu.isLoggedIn);

    return(
        <div className={`${profileMenuIsActive == true ? "w-40" : "w-0"}  transition-width duration-300 overflow-clip`}>
            <div className='flex flex-col space-y-5 justify-center items-center w-full p-5 bg-NavBarColor rounded-xl'>
                {/* <button className=' w-32 h-8 bg-BodyColor rounded-lg' onClick={ !isLoggedIn? handleAuthClick : handleSignoutClick}>
                    {isLoggedIn ? "Logout" : "Login"}
                </button> */}
                <button className=' w-32 h-8 bg-BodyColor rounded-lg'>
                    Login
                </button>
                <button className=' w-32 h-8 bg-BodyColor rounded-lg'>
                    Logout
                </button>
                <button className=' w-32 h-8 bg-BodyColor rounded-lg'>
                    Read
                </button>
            </div>
        </div>
    )
}

export default ProfileMenu