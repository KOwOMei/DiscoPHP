FROM python:3.12-slim

WORKDIR /app

COPY . /app 

EXPOSE 4500

CMD ["python3", "-m", "http.server", "4500"]
