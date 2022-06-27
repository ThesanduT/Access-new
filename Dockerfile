FROM aquabotwa/sanuwa-official:beta  

RUN git clone https://github.com/ThesanduT/QueenCutie01 /root/QueenCutie01
WORKDIR /root/QueenCutie01/
ENV TZ=Asia/Colombo
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
