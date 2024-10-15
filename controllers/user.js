export const registerUser =(req,res,next)=>{
    res.json('Register user')
}
export const loginUser =(req,res,next)=>{
    res.json('User is Login successful')
}
export const logoutUser =(req,res,next)=>{
    res.json('User is logged out')
}

export const updatedProfile =(req,res,next)=>{
    res.json('User profile is updated')
}