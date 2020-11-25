#!/bin/bash

cp .env.example .env

echo -e "\033[1;32mBuilding the docker environment..Will take 5 minutes\033[0m"

docker-compose build &> /dev/null

echo -e "\033[1;32mStarting the services..\033[0m"

docker-compose up -d &> /dev/null

echo -e "\033[1;32mBuilding the depencies..\033[0m"

docker-compose exec laravel-app composer install 

echo -e "\033[1;32mGenerating app key..\033[0m"

docker-compose exec laravel-app php artisan key:generate 

echo -e "\033[1;32mGenerating the database..\033[0m"

sleep 10

docker-compose exec laravel-app php artisan migrate 

echo -e "\033[1;32mGenerating auth secret..\033[0m"

docker-compose exec laravel-app php artisan jwt:secret

echo -e "\033[1;32mSeeding the database..\033[0m"

docker-compose exec laravel-app php artisan db:seed

echo -e "\033[1;32mLinking storage..\033[0m"

docker-compose exec laravel-app php artisan storage:link

chmod -R 777 storage

echo -e "\033[1;32mStarting supervisor..\033[0m"

docker-compose exec laravel-app service supervisor start

clear
echo -e "\033[1;32mInstallation complete..Happy sending!\033[0m"

echo "APPLINK: http://$APP_SERVER/s3ndpvt2020"
echo "Phpmyadmin: http://$APP_SERVER:7000/    root:h3eShd12sa"

