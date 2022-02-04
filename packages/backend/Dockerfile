FROM node:14-alpine AS build
WORKDIR /app
COPY package.json ./
COPY ./packages/database/package.json packages/database/
COPY ./packages/ali-planner/package.json packages/ali-planner/
RUN NODE_ENV=development yarn install
COPY ./packages/database packages/database
COPY ./packages/ali-planner packages/ali-planner
RUN yarn build:database
RUN yarn build:ali-planner
RUN yarn install --production --ignore-scripts --prefer-offline --force


FROM node:14-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/packages/ali-planner /app/packages/ali-planner
COPY --from=build /app/packages/database /app/packages/database

EXPOSE 3000
CMD [ "yarn", "start:ali-planner" ]