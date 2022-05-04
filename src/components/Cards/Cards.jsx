import React, {useState} from "react";
import "./cards.css"
import IMG6 from "../../pictures/sim.jpg";

const IMG1 = 'https://images.unsplash.com/photo-1651557611163-d1a35cc9cf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
const IMG2 = 'https://images.unsplash.com/photo-1606225457115-9b0de873c5db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
const IMG3 = 'https://images.unsplash.com/photo-1651547628439-0b693fdd6b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
const IMG4 = 'https://images.unsplash.com/photo-1651557611141-8acfee13a029?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
const IMG5 = 'https://images.unsplash.com/photo-1651520014835-1ccc6cee7b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60';


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
            h3: "Sim Land",
            src: IMG6,
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