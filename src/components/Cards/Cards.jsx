import React, {useState} from "react";
import "./cards.css"
let IMG1 = 'https://images.unsplash.com/photo-1651557611163-d1a35cc9cf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
let IMG2 = 'https://images.unsplash.com/photo-1606225457115-9b0de873c5db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
let IMG3 = 'https://images.unsplash.com/photo-1651547628439-0b693fdd6b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
let IMG4 = 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
let IMG5 = 'https://images.unsplash.com/photo-1651520014835-1ccc6cee7b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60';

const data = [ {
    id: 1,
    h3: "Mexico",
    src: IMG1,
    active: false,
},{
    id: 2,
    h3: "London",
    src: IMG2,
    active: false,
},{
    id: 3,
    h3: "New York",
    src: IMG3,
    active: false,
},{
    id: 4,
    h3: "Paris",
    src: IMG4,
    active: false,
},{
    id: 5,
    h3: "Moscow",
    src: IMG5,
    active: false,
}]
 
const Cards = () => {
    
    const [data, setData] = useState([
        {
            id: 1,
            h3: "Mexico",
            src: IMG1,
            active: false,
        },{
            id: 2,
            h3: "London",
            src: IMG2,
            active: false,
        },{
            id: 3,
            h3: "New York",
            src: IMG3,
            active: false,
        },{
            id: 4,
            h3: "Paris",
            src: IMG4,
            active: false,
        },{
            id: 5,
            h3: "Moscow",
            src: IMG5,
            active: false,
        }
    ])
    
    const onHandleClick = (elem) => {

        let newElem = elem;

        let newData = data.map(el => {
            if (el.id === newElem.id){
                if (el.active === true) {
                    el.active = false;
                } else {
                    el.active = true;
                }
                return el;
            } else {
                el.active = false;
                return el;
            }
        })

        setData(newData)
    }

    const activeClass = (index) => {
        if(data[index].active){
            return "panel active";
        } else {
            return "panel";
        }
    }

    return <div className="container" >
        {
            data.map((elem, index) => {
                return (
                <div 
                 onClick={() => onHandleClick(elem)} 
                 key={elem.id}
                 className={activeClass(index)}
                 style={{backgroundImage: `url(${elem.src})`}}
                 >
                    <h3>{elem.h3}</h3>
                </div>
                )
            })
        }
        
    </div>
}

export {Cards}