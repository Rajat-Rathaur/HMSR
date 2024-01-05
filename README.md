
# DASK homecoming

DASK is a  platform web application that combines advanced development skills with a user-friendly interface, offering features of hostel management. 


![Pic1](assets/pic1.png)

This README provides information on setting up and running the DASK project, which is organized into two main folders : `frontend` and `Backend`.
Certainly! Here's an enhanced version:

## Technologies Used

- **MERN STACK**: Leveraging the power of MySQL, Express.js, React, and Node.js for a robust and efficient stack.
- **Powered by Tailwind**: Utilizing Tailwind to enhance the user interface and provide a modern and cohesive design.

## Features

- **Minimalistic Designs**
- **Fully Responsive** 
- **Mess, Laundry, Payments , Attendance**

# Configuring Project
## Backend

1. Create a `config.env` file in the **Backend** folder with the following content:

   ```dotenv
   Replace placeholder values with your actual credentials.

   # MySQL connection string
   URL=YOUR_MySQL_CONNECTION_STRING

   # Port for the server
   PORT=4000

   # JWT secret for token generation
   SECRET=YOUR_JWT_SECRET


   ```

  - If you haven't set up an account on Backblaze B2 yet, you can [create one here](https://www.backblaze.com)

---

**Note:** If you encounter CORS issues during deployment, ensure that the CORS policy is set up using the BlackBlaze CLI. Use the following command (for windows only):

```bash
b2-windows.exe update-bucket --corsRules "[{\"corsRuleName\":\"downloadFromAnyOrigin\",
\"allowedOrigins\": [\"https\"], \"allowedHeaders\": [\"range\"],
\"allowedOperations\": [\"s3_delete\", \"s3_get\", \"s3_head\", \"s3_post\", \"s3_put\"],
\"exposeHeaders\": [\"x-bz-content-sha1\"],
\"maxAgeSeconds\": 3600
}]" bucket_Name allPublic
```
---


3. Installation:

   ```bash
   cd Backend
   ```

   ```
   npm install
   ```

   ```
   nodemon index.js or node index.js
   ```


## frontend

1. Create a `.env` file in the `frontend` folder with the following content:

   ```dotenv
   # API URL for server communication
   REACT_APP_SERVER_URL='http://localhost:4000'
   
   ```

2. Installation:

   ```bash
   cd frontend
   ```
   ```
   npm install
   ```
   ```
   npm start
   ```

## Contributing

Contributions to DASK are welcome! Feel free to open issues or pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


## Different Views
![Pic3](assets/pic3.png)

![Pic4](assets/picw1.png)

![Pic4](assets/snap.png)
