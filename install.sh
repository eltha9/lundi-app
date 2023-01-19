#! /bin/bash

sudo cp ./lundi_app.conf /etc/nginx/sites-available
sudo ln -s /etc/nginx/sites-available/lundi_app.conf /etc/nginx/sites-enabled/

sudo service nginx restart
sudo certbot --nginx
sudo certbot renew --dry-run