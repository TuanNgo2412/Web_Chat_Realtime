import { router as LoginRouter } from './login';

function route(app) {
  app.use('/', LoginRouter);
}

export default route;
