import UserModel from '#models/auth/UserModel.ts';

export default new class UserService {
  // Get all users
  async getAllUsers() {
    try {
      return await UserModel.find();
    } catch (err) {
      throw new Error(`Error fetching all users ${(err as Error).message}`);
    }
  }

  // Get user by ID
  async getById(id: string) {
    try {
      if (!id) {
        throw new Error('ID is required');
      }
      const user = await UserModel.findById(id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (err) {
      throw new Error(`Error fetching user by ID: ${(err as Error).message}`);
    }
  }

  // Get user by username
  async getByUsername(username: string) {
    try {
      if (!username) {
        throw new Error('Username is required');
      }
      const user = await UserModel.findOne({username});
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (err) {
      throw new Error(`Error fetching user by username: ${(err as Error).message}`);
    }
  }

  // Get user by email
  async getByEmail(email: string) {
    try {
      if (!email) {
        throw new Error('Email is required');
      }
      const user = await UserModel.findOne({email});
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (err) {
      throw new Error(`Error fetching user by email: ${(err as Error).message}`);
    }
  }

  // Create a new user
  async create(userData: {username: string, email: string, password: string}) {
    try {
      if (!userData.username || !userData.email || !userData.password) {
        throw new Error('All fields are required');
      }

      const existingUser = await UserModel.findOne({$or: [{email: userData.email}, {username: userData.username}]});
      if (existingUser) {
        throw new Error('User with this username or email already exists');
      }

      const user = new UserModel(userData);
      await user.save();
      return user;
    } catch (err) {
      throw new Error(`Error creating user: ${(err as Error).message}`);
    }
  }

  // Update user email
  async updateEmail(userId: string, newEmail: string) {
    try {
      if (!newEmail) {
        throw new Error('Email is required');
      }

      const user = await UserModel.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      const existingEmail = await UserModel.findOne({email: newEmail});
      if (existingEmail) {
        throw new Error('Email is already in use');
      }

      user.email = newEmail;
      await user.save();
      return user;
    } catch (err) {
      throw new Error(`Error updating email: ${(err as Error).message}`);
    }
  }

  // Update user username
  async updateUsername(userId: string, newUsername: string) {
    try {
      if (!newUsername) {
        throw new Error('Username is required');
      }

      const user = await UserModel.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      const existingUsername = await UserModel.findOne({username: newUsername});
      if (existingUsername) {
        throw new Error('Username is already taken');
      }

      user.username = newUsername;
      await user.save();
      return user;
    } catch (err) {
      throw new Error(`Error updating username: ${(err as Error).message}`);
    }
  }

  // Update user password
  async updatePassword(userId: string, newPassword: string) {
    try {
      if (!newPassword) {
        throw new Error('Password is required');
      }

      const user = await UserModel.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      user.password = newPassword;
      await user.save();
      return user;
    } catch (err) {
      throw new Error(`Error updating password: ${(err as Error).message}`);
    }
  }


  // Delete user by ID
  async deleteById(id: string) {
    try {
      if (!id) {
        throw new Error('ID is required');
      }

      const user = await UserModel.findById(id);
      if (!user) {
        throw new Error('User not found');
      }

      await user.deleteOne();
      return {message: 'User deleted successfully'};
    } catch (err) {
      throw new Error(`Error deleting user by ID: ${(err as Error).message}`);
    }
  }

  // Delete user by email
  async deleteByEmail(email: string) {
    try {
      if (!email) {
        throw new Error('Email is required');
      }

      const user = await UserModel.findOne({email});
      if (!user) {
        throw new Error('User not found');
      }

      await user.deleteOne();
      return {message: 'User deleted successfully'};
    } catch (err) {
      throw new Error(`Error deleting user by email: ${(err as Error).message}`);
    }
  }

  // Delete user by username
  async deleteByUsername(username: string) {
    try {
      if (!username) {
        throw new Error('Username is required');
      }

      const user = await UserModel.findOne({username});
      if (!user) {
        throw new Error('User not found');
      }

      await user.deleteOne();
      return {message: 'User deleted successfully'};
    } catch (err) {
      throw new Error(`Error deleting user by username: ${(err as Error).message}`);
    }

  }

  async deleteInactiveUsers() {
    try {
      const inactiveUsers = await UserModel.find({isActive: false});
      for (const user of inactiveUsers) {
        await user.deleteOne();
      }
      return {message: 'Inactive users deleted successfully'};
    } catch (err) {
      throw new Error(`Error deleting inactive users: ${(err as Error).message}`);
    }

  };
};
