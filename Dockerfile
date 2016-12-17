FROM node:6.9-onbuild

RUN npm install -g gulp

EXPOSE 3000

CMD ["npm", "run", "start"]