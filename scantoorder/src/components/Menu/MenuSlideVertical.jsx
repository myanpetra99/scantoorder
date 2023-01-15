
import React from 'react';
import Card from 'react-bootstrap/Card'
import './MenuSlide.css'

const menu = [
    {id:1, name:"Dimsum", price: 5000, image:"../../../public/assets/Dimsum.jpeg"},
    {id:2, name:"Dimsum", price: 5000, image:"../../../public/assets/Dimsum.jpeg"},
    {id:3, name:"Dimsum", price: 5000, image:"../../../public/assets/Dimsum.jpeg"},
    {id:4, name:"Dimsum", price: 5000, image:"../../../public/assets/Dimsum.jpeg"},
    {id:5, name:"Dimsum", price: 5000, image:"../../../public/assets/Dimsum.jpeg"},
    {id:6, name:"Dimsum", price: 5000, image:"../../../public/assets/Dimsum.jpeg"},
    {id:7, name:"Dimsum", price: 5000, image:"../../../public/assets/Dimsum.jpeg"},
]
function MenuSlideVertical(){
    return(
        <div>
            <div style={{ display: "flex", flexWrap: "wrap", paddingTop:'10px', paddingBottom: '30px', justifyContent: 'space-evenly'}}>
                {menu.map((item) => (
                     <div>
                    <Card style={{minWidth: '200px', maxWidth: '200px', marginLeft: '5px', marginRight: '5px', marginBottom: '1em'}} className="text-left">
                    <Card.Img src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            <strong>{item.price}</strong>
                            <small> /pax</small>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <div class="break"></div>
                    </div>
                    ))}
            </div>
        </div>
    );
}

export default MenuSlideVertical;