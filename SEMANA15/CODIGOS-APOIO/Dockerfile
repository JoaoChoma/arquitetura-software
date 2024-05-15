# Usa uma imagem base Python
FROM python:3.8-slim

# Define o diretório de trabalho no contêiner
WORKDIR /code

# Instala as dependências do Flask
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copia o código fonte para o contêiner
COPY . .

# Expõe a porta 5000
EXPOSE 5000

# Define o comando padrão para rodar o aplicativo
CMD ["flask", "run", "--host=0.0.0.0"]
