FROM node:8-alpine

ARG REACT_APP_BACKEND_HOST

ENV source="./frontend"
ENV target="/home"

EXPOSE 80

RUN npm -g install serve

COPY ${source} ${target}

# Prepare npm dependencies production build
RUN cd ${target} \
  && \
  yarn install --production \
  && \
  yarn cache clean
RUN cd ${target} \
  && \
  yarn run build

CMD cd ${target} \
  && \
  serve -s build \
  && \
  tail -f /dev/null
