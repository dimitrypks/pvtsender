#!/bin/bash

export TRACKER_HOME=$PWD

cp .env.example .env

sed -i "s/domain_here/$APP_SERVER/g" crons/crons.php 

echo -e "\033[1;32mBuilding the docker environment..Will take 5 minutes\033[0m"

docker-compose build &> /dev/null

echo -e "\033[1;32mStarting the services..\033[0m"

docker-compose up -d &> /dev/null

echo -e "\033[1;32mBuilding the depencies..\033[0m"

docker-compose exec laravel-app composer install &> /dev/null

echo -e "\033[1;32mGenerating app key..\033[0m"

docker-compose exec laravel-app php artisan key:generate &> /dev/null

echo -e "\033[1;32mGenerating the database..\033[0m"

docker-compose exec laravel-app php artisan migrate &> /dev/null

echo -e "\033[1;32mGenerating auth secret..\033[0m"

docker-compose exec laravel-app php artisan jwt:secret &> /dev/null

echo -e "\033[1;32mSeeding the database..\033[0m"

docker-compose exec laravel-app php artisan db:seed &> /dev/null

echo -e "\033[1;32mLinking storage..\033[0m"

docker-compose exec laravel-app php artisan storage:link &> /dev/null

chmod -R 777 storage

echo -e "\033[1;32mStarting supervisor..\033[0m"

docker-compose exec laravel-app service supervisor start &> /dev/null

clear
echo -e "\033[1;32mInstallation complete..Happy sending!\033[0m"

echo "APPLINK: http://$APP_SERVER/s3ndpvt2020"
echo "Phpmyadmin: http://$APP_SERVER:7000/    root:h3eShd12sa"

