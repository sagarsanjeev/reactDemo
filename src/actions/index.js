
// export function getProducts(){
//     const output = fetch(`https://raw.githubusercontent.com/sagarsanjeev/Coursera/main/db.json`, {method:'GET'}).then((response)=> response.json())
//     return{ type:'GET_PRODUCTS', payload : output }
// }

export function getProducts(){
    const output = {
    "products": [
      {
        "Id": "jenlooper-cactus",
        "Maker": "@jenlooper",
        "img": "https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg",
        "Url": "https://www.hackster.io/agent-hawking-1/the-quantified-cactus-an-easy-plant-soil-moisture-sensor-e65393",
        "Title": "The Quantified Cactus: An Easy Plant Soil Moisture Sensor",
        "Description": "This project is a good learning project to get comfortable with soldering and programming an Arduino.",
        "Ratings": [
          5,
          5
        ]
      },
      {
        "Id": "jenlooper-light",
        "Maker": "jenlooper",
        "img": "https://user-images.githubusercontent.com/41929050/61567049-13938600-aa33-11e9-9c69-a4184bf8e524.jpeg",
        "Url": "https://www.hackster.io/agent-hawking-1/book-light-dee7e4",
        "Title": "A beautiful switch-on book light",
        "Description": "Use craft items you have around the house, plus two LEDs and a LilyPad battery holder, to create a useful book light for reading in the dark.",
        "Ratings": null
      },
      {
        "Id": "jenlooper-lightshow",
        "Maker": "@jenlooper",
        "img": "https://user-images.githubusercontent.com/41929050/61567053-13938600-aa33-11e9-9780-104fe4019659.png",
        "Url": "https://www.hackster.io/agent-hawking-1/bling-your-laptop-with-an-internet-connected-light-show-30e4db",
        "Title": "Bling your Laptop with an Internet-Connected Light Show",
        "Description": "Create a web-connected light-strip API controllable from your website, using the Particle.io.",
        "Ratings": null
      },
      {
        "Id": "jenlooper-survival",
        "Maker": "jenlooper",
        "img": "https://user-images.githubusercontent.com/41929050/61567051-13938600-aa33-11e9-8ae7-0b5c19aafab4.jpeg",
        "Url": "https://www.hackster.io/agent-hawking-1/create-a-compact-survival-kit-38bfdb",
        "Title": "Create a Compact Survival Kit with LED Track Lighting",
        "Description": "Use an Altoids tin with Chibitronics sticker LEDs to create a light-up compact that doubles as a survival kit for the young hipster",
        "Ratings": null
      }
    ]
  }
    return{ type:'GET_PRODUCTS', payload : output }
}