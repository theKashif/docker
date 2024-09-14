# Use the Nginx base image
FROM nginx:alpine

# Copy the HTML file to Nginx's web directory
COPY index.html /usr/share/nginx/html/

# Copy the Nginx configuration to the correct location
COPY default.conf /etc/nginx/conf.d/default.conf
