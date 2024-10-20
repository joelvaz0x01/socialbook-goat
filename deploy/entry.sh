#!/bin/bash

/usr/sbin/nginx
python3 -m uvicorn project.asgi:application --host 127.0.0.1 --port 8080