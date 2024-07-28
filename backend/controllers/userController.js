import asyncHandler from "express-async-handler";

// @desc Auth user/set token
// route POST /api/users/auth
// @access Public

const authUser =  asyncHandler((req, res) => {

    res.status(401)
    throw new Error('Something went wrong!')

    res.status(200).json({ message: "Auth user" });
})

export { authUser}
