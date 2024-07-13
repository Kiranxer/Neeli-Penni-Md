FROM quay.io/loki-xer/jarvis-md:latest
RUN git clone https://github.com/Kiranxer/Neeli-Penni-Md /Neeli
WORKDIR /Neeli
RUN npm install
CMD ["node", "index.js"]
