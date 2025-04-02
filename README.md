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



# Average Calculator Microservice

## Routes

### User Authentication
- *POST* /signup - Register a new user.
- *POST* /login - Authenticate user and receive JWT token.

### Number Fetching & Average Calculation
- *GET* /numbers/:numberId - Fetch numbers (prime, Fibonacci, even, random) and compute average.
  - *Params*: numberId (p, f, e, r)
  - *Header*: Authorization: Bearer <token>
  
## Postman Collections
![WhatsApp Image 2025-04-02 at 19 40 03_655f9130](https://github.com/user-attachments/assets/6d9bff88-3af9-4dfe-937c-4975c2597e09)

![WhatsApp Image 2025-04-02 at 19 41 25_550476ff](https://github.com/user-attachments/assets/7bb18214-2931-482d-9734-e2f112e45534)

![WhatsApp Image 2025-04-02 at 19 42 13_a483515d](https://github.com/user-attachments/assets/039a56d1-517c-4671-a1f9-d829b2361e1f)

![WhatsApp Image 2025-04-02 at 19 42 59_82f59f64](https://github.com/user-attachments/assets/cad6c591-83d8-4835-9e4d-7257eaf38408)

![WhatsApp Image 2025-04-02 at 19 48 43_8c2d0ff3](https://github.com/user-attachments/assets/3678ed08-50af-4814-a97c-34d4ae5f3b6d)






