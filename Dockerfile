FROM nginx:1.26.0-alpine

COPY . /usr/share/nginx/html
COPY site.conf /etc/nginx/nginx.conf:ro

CMD ["nginx", "-g", "daemon off;"]
