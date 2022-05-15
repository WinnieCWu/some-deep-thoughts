const {User, Thought} = require('../models');

const resolvers = {
    Query: {
      //get all thoughts by one user
      thoughts: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Thought.find(params).sort({ createdAt: -1 });
      },
      //get a single thought by a user
      thought: async (parent, { _id }) => {
        return Thought.findOne({ _id });
      },
      // get all users
      users: async () => {
        return User.find()
        //omit user pw using '__v'
          .select('-__v -password')
          .populate('friends')
          .populate('thoughts');
      },
      // get a user by username
      user: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-__v -password')
          .populate('friends')
          .populate('thoughts');
      },
  }
};

module.exports = resolvers;