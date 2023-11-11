FROM node:20.7-alpine

RUN mkdir -p /myapp

WORKDIR /myapp

COPY . /myapp
