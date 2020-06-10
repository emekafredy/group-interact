import userRouter from './user';

const apiPrefix = '/api/v1';
const routes = [userRouter];

const modules = (app) => {
  routes.forEach((route) => app.use(apiPrefix, route));

  app.get('/', (req, res) => res.status(200).json({
    message: 'GROUP-INTERACTIVE',
  }));

  app.get(apiPrefix, (req, res) => res.status(200).json({
    message: 'Welcome to Group Interact app API, Version 1',
  }));

  return app;
};

export default modules;
