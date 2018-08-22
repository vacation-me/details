FROM postgres

RUN mkdir -p /database/csv

RUN mkdir -p /docker-entrypoint-initdb.d

COPY ./csv.tar.gz /database/

COPY vacationme.sql /docker-entrypoint-initdb.d