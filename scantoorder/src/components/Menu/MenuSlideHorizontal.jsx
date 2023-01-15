
import React from 'react';
import Card from 'react-bootstrap/Card'
import './MenuSlide.css'

const menu = [
    {id:1, name:"Dimsum", price: 5000, image:"../../../public/assets/Dimsum.jpeg"},
    {id:2, name:"Dimsum", price: 5000, image:"../../../public/assets/Dimsum.jpeg"},
    {id:3, name:"Dimsum", price: 5000, image:"../../../public/assets/Dimsum.jpeg"},
    {id:4, name:"Dimsum", price: 5000, image:"../../../public/assets/Dimsum.jpeg"},
]
function MenuSlideHorizontal(){
    return(
        <div className='MenuContainer'>
            <header className='Headline-menu'>
                <p>Paling banyak dipesan!</p>
            </header>
            <div style={{ overflow: "scroll" , display:"flex", whiteSpace: 'nowrap', paddingTop:'10px', paddingBottom: '30px'}}>
                {menu.map((item) => (
                    <Card style={{minWidth: '200px', maxWidth: '200px', marginLeft: '10px', marginRight: '10px'}} className="text-left">
                    <Card.Img src={item.image} />
                    <Card.Body >
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            <strong>{item.price}</strong>
                            <small> /pax</small>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    ))}
            </div>
        </div>
    );
}

export default MenuSlideHorizontal;