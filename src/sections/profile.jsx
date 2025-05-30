const Profile = () => {
    return (
        <div className="mx-auto mt-[30px] p-[15px] bg-[#2C2C2C] rounded-[15px] inline-block h-[80px] flex flex-col items-center justify-center">
            <div className="relative w-[50px] h-[50px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg 
                    className="absolute w-[50px] h-[50px] text-gray-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        fillRule="evenodd" 
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Profile;