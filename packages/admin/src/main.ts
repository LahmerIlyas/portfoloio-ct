import * as AdminJSExpress from '@adminjs/express';
import { Database, Resource } from '@adminjs/typeorm';
import {
  clientDatabaseConfiguration,
  UserEntity,
  UserRole,
} from '@toptal-calories-counter/database';
import AdminJS from 'adminjs';
import * as bcrypt from 'bcrypt';
import { validate } from 'class-validator';
import * as express from 'express';
import * as path from 'path';
import { createConnection } from 'typeorm';
import { fetchDashboardStatistics } from './pages/dashboard/fetch-dashboard-statistics';
import { resources } from './resources';

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
    rootPath: '/admin',
    resources: resources,
    dashboard: {
      handler: fetchDashboardStatistics,
      component: AdminJS.bundle('./pages/dashboard/index.tsx'),
    },
    branding: {
      companyName: 'Toptal Calories Tracker',
      softwareBrothers: false,
      favicon: '/static/favicon.ico',
      logo: '/static/logo.webp',
      theme: {
        colors: {
          primary100: '#91C788',
          primary80: '#8fc686',
          primary60: '#afd6a8',
          primary40: '#cfe7cb',
          primary20: '#eff7ee',
        },
      },
    },
  });

  const app = express();
  adminJs.watch();
  // @ts-ignore
  const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
    authenticate: async (email, password) => {
      const user = await UserEntity.findOne({ where: { email } });
      if (user && [UserRole.SUPER_ADMIN, UserRole.ADMIN].includes(user.role)) {
        const matched = await bcrypt.compare(password, user.hashed_password);
        if (matched) {
          return user;
        }
      }
      return false;
    },
    cookiePassword: 'some-secret',
  });
  app.use(adminJs.options.rootPath, router);
  app.use('/static', express.static(path.join(__dirname, '..', 'assets')));
  app.get('/', (req, res) => {
    res.redirect('/admin');
  });
  console.log(await fetchDashboardStatistics());
  app.listen(PORT, () => console.log(`AdminJS is under localhost:${PORT}`));
};

void bootstrapApp();
