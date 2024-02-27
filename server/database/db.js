



import mongoose from "mongoose"

const connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@blog-app.wtsqse2.mongodb.net/?retryWrites=true&w=majority&appName=blog-app`
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("database connected successfully")
    }
    catch (error) {
        console.log("Error while connecting with the database", error);

    }
}

export default connection;