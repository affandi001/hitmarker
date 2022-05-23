export default function Header() {
    return (

        <>
            <div className="">

                <div className="flex ">
                    <div className="py-12 px-20 w-[30%]">
                        <img src="../assets/logo.png" />
                    </div>
                    <div className=" mt-[50px] w-[50%] px-24 flex justify-center   text-white space-x-8 ">
                        <span>Find a job</span>
                        <span>Post a job</span>
                        <span>Career Advice</span>
                    </div>


                    <div className="w-[30%] flex justify-end">
                        <div className=" mt-[50px] text-white ">
                            <span>Login</span>

                        </div>


                        <div className=" mt-[45px] px-4    text-white ">
                            <button class="bg-orange-600 text-white px-4 py-2 hover:bg-orange-400  border border-orange-600 rounded-lg font-medium cursor-pointer">Create Account</button>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}