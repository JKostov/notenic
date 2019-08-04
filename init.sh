#!/bin/sh

cd ./notenic-api/
git checkout master
git pull origin master
cp .env.example .env.development

cd ../notenic-frontend/
git checkout master
git pull origin master
cd ..

docker-compose up --build
