# Langkah 1: Gunakan image Node.js resmi sebagai base image
FROM node:18-alpine

# Langkah 2: Setel direktori kerja di dalam container
WORKDIR /app

# Langkah 3: Salin file package.json dan package-lock.json (jika ada)
# Ini dilakukan terlebih dahulu untuk memanfaatkan cache Docker
COPY package*.json ./

# Langkah 4: Install dependensi
RUN npm install

# Langkah 5: Salin seluruh kode sumber aplikasi ke dalam container
COPY . .

# Langkah 6: Ekspos port yang akan digunakan aplikasi
EXPOSE 3000

# Langkah 7: Perintah untuk menjalankan aplikasi
CMD [ "npm", "start" ]