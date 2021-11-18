# multi-node-test

```
npm i
npm run start
```

## docker

```
sudo docker build . -t multi-process-test
sudo docker run -d -p4000:4000 -p5000:5000 -it multi-process-test
```

# heroku

```
heroku login
heroku container:login
heroku container:push multi-process-test -a multi-process-test
heroku container:release multi-process-test -a multi-process-test
```
