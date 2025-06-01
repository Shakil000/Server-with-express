
**Resource:** [Express.js Installation Guide](https://expressjs.com/en/starter/installing.html)

### Steps to Set Up an Express + TypeScript Project:

1. **Initialize Node.js Project**
   Open your terminal in any folder and run:

   ```bash
   npm init -y
   ```

2. **Create `.gitignore` File**
   Inside your project root, create a `.gitignore` file and add:

   ```
   node_modules
   ```

3. **Install TypeScript**
   Install TypeScript both as a dev dependency and globally (optional):

   ```bash
   npm install -D typescript
   npm install -g typescript
   ```

   > `-D` means it's only needed during development, not in production.

4. **Install Express**
   Install Express as a regular dependency:

   ```bash
   npm install express
   ```

5. **Initialize TypeScript Configuration**
   Generate a TypeScript config file:

   ```bash
   tsc --init
   ```

6. **Configure `tsconfig.json` Paths**
   Open the generated `tsconfig.json` file and set:

   ```json
   "rootDir": "./src",
   "outDir": "./dist",
   ```

   > Note: You'll need to manually create both `src` and `dist` folders in your root directory.

7. **Project Structure Setup**
   Inside the `src` folder, create a subfolder (e.g., `app`) and add:

   * `app.ts` – for main app logic (Express app, routes, middleware, etc.)
   * `server.ts` – entry point that imports the app and starts the server

   Example structure:

   ```
   /src
     /app
       app.ts
     server.ts
   ```

8. **Fix Express TypeScript Errors (Optional)**
   If you get type errors related to Express, install type definitions:

   ```bash
   npm install -D @types/express
   ```

9. **Import Types Properly**
   In your TypeScript files, import types like so:

   ```ts
   import express, { Application, Request, Response } from 'express';
   ```

10. **Compile TypeScript**
    Run the TypeScript compiler to generate JavaScript files in the `dist` folder:

    ```bash
    tsc
    ```

11. **Run the App**
    After compilation, run your app using Node:

    ```bash
    node ./dist/server.js
    ```

12. **Test in Browser**
    Open your browser and go to:
    [http://localhost:3000](http://localhost:3000)
    You should see: `Hello world`
    
BANGLA:

### ✅ **Resource:** [Express.js Installation Guide](https://expressjs.com/en/starter/installing.html)

---

## 🚀 Express + TypeScript প্রজেক্ট সেটআপ (English + বাংলা)

---

### 1. **Initialize Node.js Project**

**Command:**

```bash
npm init -y
```

📘 **বাংলা:**
আপনার টার্মিনালে যেকোনো ফোল্ডারে যান এবং উপরের কমান্ডটি চালান। এটি `package.json` তৈরি করবে।

---

### 2. **Create `.gitignore` File**

**Content:**

```
node_modules
```

📘 **বাংলা:**
প্রজেক্ট রুটে `.gitignore` নামে একটি ফাইল তৈরি করুন এবং তার মধ্যে `node_modules` লিখুন যাতে এটি গিট-এ ট্র্যাক না হয়।

---

### 3. **Install TypeScript**

**Commands:**

```bash
npm install -D typescript
npm install -g typescript
```

📘 **বাংলা:**
প্রথম কমান্ডটি TypeScript ডেভেলপমেন্ট ডিপেন্ডেন্সি হিসেবে ইনস্টল করে এবং দ্বিতীয়টি গ্লোবালি ইনস্টল করে (ঐচ্ছিক)।
`-D` মানে এটি শুধুমাত্র ডেভেলপমেন্টের জন্য দরকার, প্রোডাকশনে নয়।

---

### 4. **Install Express**

**Command:**

```bash
npm install express
```

📘 **বাংলা:**
Express প্রজেক্টে ব্যবহার করা হবে তাই এটি সাধারণ ডিপেন্ডেন্সি হিসেবে ইনস্টল করতে হবে।

---

### 5. **Initialize TypeScript Configuration**

**Command:**

```bash
tsc --init
```

📘 **বাংলা:**
এই কমান্ডটি `tsconfig.json` নামে একটি কনফিগারেশন ফাইল তৈরি করবে।

---

### 6. **Update `tsconfig.json` - rootDir**

```json
"rootDir": "./src",
```

📘 **বাংলা:**
`tsconfig.json` ফাইলে `rootDir`-কে `./src` সেট করুন। এটি আপনার TypeScript সোর্স ফোল্ডার হবে। `src` ফোল্ডারটি ম্যানুয়ালি তৈরি করতে হবে।

---

### 7. **Update `tsconfig.json` - outDir**

```json
"outDir": "./dist",
```

📘 **বাংলা:**
`outDir` মানে কম্পাইল করার পর JavaScript ফাইলগুলো কোথায় যাবে। আমরা `dist` নামের ফোল্ডার ব্যবহার করব। এটিও ম্যানুয়ালি তৈরি করুন।

---

### 8. **Create Project Files**

📁 **Structure:**

```
/src
  /app
    app.ts
  server.ts
```

📘 **বাংলা:**
`src` ফোল্ডারের ভিতরে `app` নামে একটি সাবফোল্ডার তৈরি করুন।

* `app.ts` → Express অ্যাপ, রাউটস ইত্যাদি।
* `server.ts` → সার্ভার চালানোর জন্য এন্ট্রি পয়েন্ট।

---

### 9. **Install Express Types (If Error Occurs)**

**Command:**

```bash
npm install -D @types/express
```

📘 **বাংলা:**
যদি টাইপ সংক্রান্ত কোনো এরর আসে, তাহলে `@types/express` ইনস্টল করুন।

---

### 10. **Use Proper Type Imports**

```ts
import express, { Application, Request, Response } from 'express';
```

📘 **বাংলা:**
`Application`, `Request`, এবং `Response` টাইপগুলোর জন্য Express থেকেই ইম্পোর্ট করুন।

---

### 11. **Compile TypeScript to JavaScript**

**Command:**

```bash
tsc
```

📘 **বাংলা:**
এই কমান্ডটি TypeScript ফাইলগুলোকে JavaScript-এ রূপান্তর করবে এবং `dist` ফোল্ডারে সংরক্ষণ করবে।

---

### 12. **Run the Server**

**Command:**

```bash
node ./dist/server.js
```

📘 **বাংলা:**
কম্পাইলের পর এই কমান্ড চালিয়ে সার্ভার চালু করুন।

---

### 13. **Test in Browser**

🔗 Visit: [http://localhost:3000](http://localhost:3000)
📘 **বাংলা:**
ব্রাউজারে ওপরে দেওয়া URL-এ গেলে আপনি দেখতে পাবেন: `Hello world`

---

✅ **Note:** আপনি ভিডিও বা রেকর্ডেড গাইড দেখলে সেখানে বলা হতে পারে "Start from 16:50 second" – সেটি ভিডিওর নির্দিষ্ট অংশ বোঝানোর জন্য।


