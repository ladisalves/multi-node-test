FROM node:14-alpine

WORKDIR /app
ENV PORT $PORT

COPY  . .

RUN echo $PORT
RUN npm i

CMD [ "npm", "start" ]
