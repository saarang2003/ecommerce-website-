const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth/authRoute");
const adminProductRouter = require('./routes/admin/productRoute');
const path = require("path");



require('dotenv').config();

const app = express();

const _dirname = path.resolve()

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "DELETE", "PUT"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
        ],
        credentials: true,
    })
);

const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use(express.json());

  mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));


app.use("/api/auth", authRouter);
app.use('/api/admin/product',adminProductRouter );

app.use(express.static(path.join(_dirname , '/frontend/dist')));
app.get('*' , (_ ,res) =>{
  res.sendFile(path.resolve(_dirname , 'frontend' , 'dist' , 'index.html'));
})


  app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));


  