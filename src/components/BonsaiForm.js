import React, { useState, useEffect } from "react";

function BonsaiForm({ addNewBonsai }){

    const [name, setName] = useState([])
    const [image, setImage] = useState([])
    const [family, setFamily] = useState([])
    const [genus, setGenus] = useState([])
    const [size, setSize] = useState([])

    const newBonsai ={
        name: name,
        image: image,
        family: family,
        genus: genus,
        size: size
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/bonsais", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newBonsai)
          })
            .then((r) => r.json())
            .then((newItem)=> addNewBonsai(newItem))
    }

    return (
        <div>
            <h2>Add a new Bonsai to my collection!</h2>
            <form onSubmit={handleSubmit}>
                <input           
                type="text"
                name="name"
                placeholder="Bonsai name"
                onChange={(e) => setName(e.target.value)}
                />
                <input           
                type="text"
                name="image"
                placeholder="Image"
                onChange={(e) => setImage(e.target.value)}
                />
                <input           
                type="text"
                name="family"
                placeholder="Family"
                onChange={(e) => setFamily(e.target.value)}
                />
                <input           
                type="text"
                name="genus"
                placeholder="Genus + Species"
                onChange={(e) => setGenus(e.target.value)}
                />
                <input           
                type="text"
                name="size"
                placeholder="Mature size"
                onChange={(e) => setSize(e.target.value)}
                />
                <button type="submit">Add Bonsai</button>
            </form>
        </div>
    )
}

export default BonsaiForm 