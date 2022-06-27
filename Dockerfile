FROM aquabotwa/sanuwa-official:beta 

RUN git clone https://github.com/ThesanduT/Access-new /root/aquabot
WORKDIR /root/access-new/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
