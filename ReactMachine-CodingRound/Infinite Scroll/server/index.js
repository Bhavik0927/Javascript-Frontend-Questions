const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 1280;
app.use(cors());

const POSTS = Array.from({ length:200 }, (_, i) => ({
    id: i + 1,
    content: `Post number ${i + 1}`
}))

app.get('/feed', (req,res) =>{
    const cursor = Number(req.query.cursor) || 0;
    const limit = 10;

    const startIndex = cursor;
    const endIndex = cursor + limit;

    const items = POSTS.slice(startIndex, endIndex);
    const nextCursor = endIndex < POSTS.length ? endIndex : null;

    setTimeout(() =>{
        res.json({
            items,
            nextCursor
        })
    }, 500)
})

app.listen(PORT, () =>{
    console.log(`Port is listening on ${PORT}`)
});