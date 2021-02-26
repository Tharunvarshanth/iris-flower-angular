FROM node:latest as node
#RUN mkdir -p /iris-flower-frondend
WORKDIR /app
#COPY package.json /iris-flower-frondend
COPY . .
RUN npm install
#COPY . /iris-flower-frondend
RUN npm run build --prod

# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/iris-flower-frondend /usr/share/nginx/html

