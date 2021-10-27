FROM nginx:stable-alpine
COPY build /usr/share/nginx/html
COPY /ngnix/ngnix.conf /etc/nginx/conf.d/default.conf

EXPOSE 80