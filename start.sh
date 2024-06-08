#!/bin/bash

docker rmi --force portfolio:latest

docker compose up -d
docker ps
