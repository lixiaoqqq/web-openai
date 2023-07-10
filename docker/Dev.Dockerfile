FROM gmirror/gpk-main-web-node:dev

COPY . /app
# WORKDIR /app

# RUN sudo -i
# RUN sed -i 's|^mozilla\/DST_Root_CA_X3\.crt|!mozilla/DST_Root_CA_X3.crt|' /etc/ca-certificates.conf
# RUN curl -sk https://letsencrypt.org/certs/isrgrootx1.pem -o /usr/local/share/ca-certificates/ISRG_Root_X1.crt
# RUN update-ca-certificates --fresh

# RUN ls /etc/ssl/certs/DST_Root*.pem /etc/ssl/certs/ISRG_Root*.pem 2>/dev/null
# RUN awk -v cmd='openssl x509 -noout -subject' '/BEGIN/{close(cmd)};{print | cmd}' < /etc/ssl/certs/ca-certificates.crt | grep -E 'DST Root|ISRG Root'

RUN npm run build

# RUN npm i -g pm2

COPY docker/nginx.conf /etc/nginx/nginx.conf
