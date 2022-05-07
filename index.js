let text=""
     
 const blogList = [
{
    id: 1,
    date: '27.01.2016',
    description:'Liana Technologies and Encode Solutions merge to create unique mobile solution',
},
{
    id: 2,
    date: '28.01.2016',
    description:'From a local startup to a global player: Liana Technologies among the forerunners of digital marketing tachnology',
},
{
    id: 3,
    date: '02.07.2015',
    description:'Liana Technologies Hong Kong  launched a series of digital  marketing events in June',
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
    description:'Bosch is a multinational  engineering and electronics company.'
},
{
    id: 2,
    image: 'bodyShop.png',
    name:'The Body Shop',
    description:'The Body Shop is a global beauty brand and it has more than 3,000 stores in more than 60 countries',
},
{
    id: 3,
    image: 'laplandHotel.png',
    name:'Lapland Hotels',
    description:'Lapland Hotels is the largest and the most diverse hotel chain in Lapland',
},
{
    id: 4,
    image: 'ikea.png',
    name:'IKEA',
    description:'IKEA is a multinational furniture store',
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
    // Thank you message 

    let referData = document.querySelector('#referData')   

     referData.innerHTML=referElement

  var nextStep = document.querySelector('.btnSuscribe');

  nextStep.addEventListener('click', function (e) {
    e.preventDefault();
    // Hide first view
    document.querySelector('#textContainerS').style.display = 'none';
    document.querySelector('#input').style.display = 'none';

    // Show thank you message element
    document.getElementById('thank_you').style.display = 'flex';
  });

