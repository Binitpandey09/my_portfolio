# Use lightweight nginx server
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from dist/ to nginx folder
COPY dist/ /usr/share/nginx/html/

# Expose port 80 inside container
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
