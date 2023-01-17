
// we can also create backend using http but we will use express

// import http from "http"
// import { runInNewContext } from "vm"

// // http.createServer(
// //     function(req,res){
// //         res.write("API is running");
// //         res.end()
// //     }
// // ).listen(8080);



// http.createServer(

//     function(req,res){
//         res.write(req.url)
//         console.log(req.url)
//         res.end()
//     }

// ).listen(8080)

import express, { Request, Response, urlencoded } from "express"
import { router } from "./routes/route";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json())



app.use("/", router)


app.listen(8000, () => console.log("Sucessfully launched in 8000"))