FROM node:18-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = ${secrets.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
ENV CLERK_SECRET_KEY = ${secrets.CLERK_SECRET_KEY}
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]