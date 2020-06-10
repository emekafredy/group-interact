import express from 'express';
import UserController from './UserController';

const Router = express.Router();

Router.get(
  '/users',
  UserController.getUsers
);

export default Router;
