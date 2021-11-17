let text=""
     
 const blogList = [
{
    id: 1,
    date: '27.01.2016',
    description:'Liana Technologies and Encode<br>Solutions merge to create<br>unique mobile solution',
},
{
    id: 2,
    date: '28.01.2016',
    description:'From a local startup to a global<br> player: Liana Technologies<br> among the forerunners of <br>digital marketing tachnology',
},
{
    id: 3,
    date: '02.07.2015',
    description:'Liana Technologies Hong Kong <br> launched a series of digital <br> marketing events in June',
},];

let blogElement=""
for (x = 0; x < blogList.length; x++) {
     blogElement=blogElement+`

     <div class="latestNews">
     <div class="newsBox">
     <div>
       <div class="newsDate">${blogList[x].date}</div>
       <div class="newsText"> ${blogList[x].description}
       </div>
       </div>
       </div>
     </div>`
    }
     
    let dataNews = document.querySelector('#dataNews')   

     dataNews.innerHTML=blogElement

     let references=""
     
 const referList = [
{
    id: 1,
    image: 'bosch.png',
    name:'Robert Bosch',
    description:'Bosch is a multinational <br> engineering and electronics<br> company.'
},
{
    id: 2,
    image: 'bodyShop.png',
    name:'The Body Shop',
    description:'The Body Shop is a global <br>beauty brand and it has more<br>than 3,000 stores in more<br> than 60 countries</br>',
},
{
    id: 3,
    image: 'laplandHotel.png',
    name:'Lapland Hotels',
    description:'Lapland Hotels is the largest<br> and the most diverse hotel <br> chain in Lapland</br>',
},
{
    id: 4,
    image: 'ikea.png',
    name:'IKEA',
    description:'IKEA is a multinational <br> furniture store</br>',
}];

let referElement=""
for (x = 0; x < referList.length; x++) {
     referElement=referElement+`
     <div class="refBox">
       <img id="refImg" src="img/${referList[x].image}" alt=""></img>
       <div class="refBoxText">
       <div id="refName"><b>${referList[x].name}</b></div>
       <div id="refDescription">
       ${referList[x].description}
       </div>
       </div>
     </div>
     `
    }
     
    let referData = document.querySelector('#referData')   

     referData.innerHTML=referElement

