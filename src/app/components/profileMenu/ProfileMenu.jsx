import { useSelector } from 'react-redux'

const ProfileMenu = () => {
    const profileMenuIsActive = ((state) => state.profileMenu.isActive)
    return(
        <div className="w-64 h-64 bg-NavBarColor flex justify-center items-center invisible">
            Profile
        </div>
    )
}

export default ProfileMenu