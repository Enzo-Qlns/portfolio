#!/bin/bash

docker compose down
docker rmi --force portfolio:latest

docker compose up -d
docker ps
