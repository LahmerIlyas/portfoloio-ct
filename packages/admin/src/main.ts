import { clientDatabaseConfiguration } from '@toptal-calories-counter/database';
import * as express from 'express';
import AdminJS from 'adminjs';
import * as AdminJSExpress from '@adminjs/express';
import { Database, Resource } from '@adminjs/typeorm';
import { resources } from './resources';
import { validate } from 'class-validator';
import { createConnection } from 'typeorm';
import * as path from 'path';

Resource.validate = validate;
AdminJS.registerAdapter({ Database: Database, Resource: Resource });

const PORT = process.env.PORT || 3001;

const bootstrapApp = async () => {
  // initialize database
  // @ts-ignore
  await createConnection({
    ...clientDatabaseConfiguration,
  });

  const adminJs = new AdminJS({
    rootPath: '/',
    resources: resources,
    branding: {
      companyName: 'Product Analytica',
      softwareBrothers: false,
      favicon: '/static/favicon.ico',
      logo: '/static/logo.webp',
      theme: {
        colors: {
          primary100: '#ff6a1a',
          primary80: '#ff8b4d',
          primary60: '#ffac80',
          primary40: '#ffcdb3',
          primary20: '#ffeee5',
        },
      },
    },
  });

  const app = express();
  adminJs.watch();
  // @ts-ignore
  const router = AdminJSExpress.buildRouter(adminJs);
  app.use(adminJs.options.rootPath, router);
  app.use('/static', express.static(path.join(__dirname, '..', 'assets')));
  app.listen(PORT, () => console.log(`AdminJS is under localhost:${PORT}`));
};

void bootstrapApp();