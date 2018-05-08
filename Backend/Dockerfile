FROM node:8-alpine

ENV source="./Backend"
ENV target="/home"

EXPOSE 3030

COPY ${source} ${target}
COPY ${gitSource} ${gitTarget}

RUN cd ${target} && yarn && yarn cache clean

CMD cd ${target} && \
    yarn start && \
    tail -f /dev/null
