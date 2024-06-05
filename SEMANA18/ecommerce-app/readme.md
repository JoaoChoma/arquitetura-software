# Construir a imagem do contêiner
docker build -t backend-products .

# Executar o contêiner
docker run -p 8080:8080 backend-products


docker-compose up --build


docker-compose logs frontend


docker-compose up -d



docker-compose down
