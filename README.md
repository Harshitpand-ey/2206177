# Social Media Analytics HTTP Microservice

## Installation
1. Clone the repository:
   bash
   git clone https://github.com/your-username/social-media-microservice.git
   
2. Install dependencies:
   bash
   npm install
   
3. Start the server:
   bash
   npm start
   

## API Routes
### 1. Get Top Users
*Method:* GET  
*Route:* /users  
*Headers:*
- Authorization: Bearer <your_token>

### 2. Get Popular/Latest Posts
*Method:* GET  
*Route:* /posts?type=popular or /posts?type=latest  
*Headers:*
- Authorization: Bearer <your_token>

## Postman Collection
![TopUsers](https://github.com/user-attachments/assets/579d6fe7-c43d-433e-bdbf-03b3ea266d8b)

![latestPost](https://github.com/user-attachments/assets/c759929c-2165-4803-ac5f-6ae2937f5b7f)

