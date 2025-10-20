DEPLOY INSTRUCTIONS (short):
1) Frontend:
   - create React app with Vite
   - replace src/App.jsx with provided App.jsx
   - install deps: npm install
   - run: npm run dev
   - For production, build and deploy to Vercel/Netlify

2) Backend:
   - fill .env with MONGO_URI and RAZORPAY keys
   - npm install
   - npm run dev (or start)
   - Deploy backend to Render/Heroku/Railway and set env vars

3) Connect:
   - Frontend API calls should point to backend base URL (/api/products, /api/orders)
   - For payments: implement frontend razorpay flow using order_id from backend

Security: never commit SECRET keys to public repos.
