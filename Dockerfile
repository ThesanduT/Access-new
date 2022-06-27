FROM ThesanduT/Access-new:beta 

RUN git clone https://github.com/ThesanduT/Access-new /root/access-new
WORKDIR /root/access-new/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
