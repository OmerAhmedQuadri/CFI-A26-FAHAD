export const getAllUsers = async (req, res) => {
    const user = req.user
    res.status(200).json({
        success: true,
        message: 'Users Fetched Successfully',
        data: user
    })
}