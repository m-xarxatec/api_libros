import express from 'express';

const app = express();
const PORT = 6969;


const libros = [{id: 1, title: 'ender game', writer: 'orson scott'}, {id:2, title: 'king sorrow', writer: 'joe hill'}]

app.get('/', (req, res) =>{
    res.send("la api esta funcionando");
});

app.get('/api/v1/books', (req, res) => {
})

app.get('/api/v1/books/:id', (req, res)=>{
    let libro = libros.find(b => b.id == req.params.id);
    if (!libro) {
        res.status(404).json('oe, ese libro no existe cabron')
    }
    res.json(libro)
})

app.get('/api/v1/books/writer/:writer', (req, res)=>{
    let libro = libros.find(w => w.writer == req.params.writer);
    if (!libro) {
        res.status(404).json('oe, ese autor no existe cabron')
    }
    res.json(libro)
})

app.listen(PORT, ()=>{
    console.log(`el servidor esta escuchando en el puerto ${PORT}`)
})