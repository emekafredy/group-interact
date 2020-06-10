class UserController {
  static async getUsers(req, res) {
    try {
      const users = [
        { id: 1, name: 'Emeka Chinedu', username: 'Sammy' },
        { id: 2, name: 'John Doe', username: 'Johnny' },
        { id: 3, name: 'Jane Smith', username: 'Jannie' },
      ];

      return res.status(200).json({
        success: true,
        message: 'Users retrieved',
        users
      });
    } catch (error) {
      console.log(error, 500, res);
    }
  }
}

export default UserController;
