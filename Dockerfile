FROM node:14-alpine
WORKDIR /app

# Input Argument
ARG CSE_KEY
ARG CSE_ID
# build ENV
ENV REACT_APP_CSE_KEY ${CSE_KEY}
ENV REACT_APP_CSE_ID ${CSE_ID}

COPY . .
RUN yarn install
RUN yarn build
RUN yarn global add serve

CMD ["serve", "-s", "build"]