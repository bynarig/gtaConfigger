import {Schema, model} from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: String,
        unique: true,
        default: 'USER',
      },
    ],
    createdAt: {
      type: Date,
      immutable: true,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
    language: {
      type: String,
      default: 'en',
    },
    avatar: {
      type: String,
      default: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },

  },
  {timestamps: true},
);

export default model('User', UserSchema);
