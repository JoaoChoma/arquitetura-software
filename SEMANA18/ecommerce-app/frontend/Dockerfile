# Usar uma imagem base oficial do Node.js
FROM node:14

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar package.json e package-lock.json (se existirem)
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Instalar http-server globalmente
RUN npm install -g http-server

# Construir o projeto (se você tiver uma etapa de build)
# RUN npm run build

# Expor a porta na qual o app irá rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["http-server", "-p", "3000"]
