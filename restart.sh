#!/bin/bash

echo -e "\033[1;32mStoping services..\033[0m"

docker-compose down &> /dev/null

echo -e "\033[1;32mRebuilding the project..\033[0m"

docker-compose build &> /dev/null

echo -e "\033[1;32mStarting services..\033[0m"

docker-compose up -d &> /dev/null


echo -e "\033[1;32mWaiting for mysql to start..\033[0m"

sleep 5

docker-compose exec laravel-app service supervisor start  &> /dev/null

echo -e "\033[1;32mServices are running..\033[0m"
