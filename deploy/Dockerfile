FROM python:3.11

RUN apt update && apt install nginx -y
COPY deploy/nginx/default /etc/nginx/sites-enabled/
RUN pip install --no-cache-dir uvicorn

WORKDIR /app

COPY deploy/entry.sh /app

COPY app/ .

RUN pip install --no-cache-dir -r requirements.txt
RUN mkdir -p /app/database
RUN chown -R root:root /app/database
RUN python manage.py makemigrations
RUN python manage.py migrate

EXPOSE 80

CMD ["/bin/bash", "/app/entry.sh"]
