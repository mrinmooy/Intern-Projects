const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()
app.use(express.json());
const PORT = 5005;

const corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions))
    
    

app.use(routes);
  


app.listen(PORT,()=>{
    console.log(`server is listening on port no. ${PORT}`);
})

