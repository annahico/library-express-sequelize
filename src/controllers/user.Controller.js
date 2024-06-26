const { User } = require("../models");
const bcrypt = require("bcrypt");
const userController = {};

userController.getAll = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ["createdAt", "updatedAt", "password"] },
        });

        res.status(200).json({
            success: true,
            message: "Users retreived successfully",
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retreiving users",
            error: error.message,
        });
    }
};

userController.getById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findByPk(userId, {
            attributes: { exclude: ["createdAt", "updatedAt", "password"] },
        });

        if (!user) {
            return res.status(404).json({
                success: true,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "User retreived successfully",
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retreinving user",
            error: error.message,
        });
    }
};

userController.update = async (req, res) => {
    const userId = req.params.id;
    const { password, role_id, ...restUserData } = req.body;

    try {
        const userToUpdate = await User.findByPk(userId);

        if (!userToUpdate) {
            return res.status(404).json({
                success: true,
                message: "User not found",
            });
        }

        if (password) {
            const hashedPassword = bcrypt.hashSync(password, 10);
            userToUpdate.password = hashedPassword;
        }

        userToUpdate.set({
            ...userToUpdate,
            ...restUserData,
        });

        await userToUpdate.save();

        res.status(200).json({
            success: true,
            message: "User updated successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating user",
            error: error.message,
        });
    }
};

userController.delete = async (req, res) => {
    const userId = req.params.id;

    try {
        const deleteResult = await User.destroy({
            where: {
                id: userId,
            },
        });

        if (deleteResult === 0) {
            return res.status(404).json({
                success: true,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting user",
            error: error.message,
        });
    }
};

module.exports = userController;