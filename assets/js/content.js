var content = {
  pages : {
    index : {
      typeOfItem:{
        standard : [
          {
            cardBgImg:'assets/img/images7.jpg',
            cardFrontImg:'assets/img/images8.jpg',
            title:'Pani Puri',
          },
          {
            cardBgImg:'assets/img/images (7).jpg',
            cardFrontImg:'assets/img/download.jpg',
            title:'Pizza',
          },
          {
            cardBgImg:'assets/img/images (8).jpg',
            cardFrontImg:'assets/img/download (3).jpg',
            title:'Sandwich',
          },
          {
            cardBgImg:'assets/img/images (2).jpg',
            cardFrontImg:'assets/img/download (2).jpg',
            title:'Burger',
          },
        ],
        lunchdinner : [
          {
            cardBgImg:'assets/img/images (4).jpg',
            cardFrontImg:'assets/img/images (9).jpg',
            title:'Special indian thali',
          },
          {
            cardBgImg:'assets/img/download (7).jpg',
            cardFrontImg:'assets/img/download (8).jpg',
            title:'Chola Bhatura',
          },
          {
            cardBgImg:'assets/img/download (9).jpg',
            cardFrontImg:'assets/img/aloo-paratha-1.jpg',
            title:'Aloo Paratha',
          },
          {
            cardBgImg:'assets/img/download (6).jpg',
            cardFrontImg:'assets/img/download (4).jpg',
            title:'Tanduri Thali',
          },
        ],
        shakes : [
          {
            cardBgImg:'assets/img/images (14).jpg',
            cardFrontImg:'assets/img/download (15).jpg',
            title:'Strawberry Milk Shake',
          },
          {
            cardBgImg:'assets/img/download (11).jpg',
            cardFrontImg:'assets/img/download (10).jpg',
            title:'Chocolate Milk Shake',
          },
          {
            cardBgImg:'assets/img/download (13).jpg',
            cardFrontImg:'assets/img/images (3).jpg',
            title:'Ice Creame Shake',
          },
          {
            cardBgImg:'assets/img/images (12).jpg',
            cardFrontImg:'assets/img/images (6).jpg',
            title:'Mango Shake',
          },
        ]
      }
    },
  }
}

// in index page, add data to "standard" container
{
  let html = "";
  const htmldata = content.pages.index.typeOfItem.standard;
  for(let i=0;i<htmldata.length;i++){
    html += `<div class="card">
    <div class="image1" style="background: url('${htmldata[i].cardBgImg}');">
      <img src="${htmldata[i].cardFrontImg}">
    </div>
    <div class="title">
      <h3><b>${htmldata[i].title}</b></h3>
    </div>
    <center><a href="paymentpage.html"><button class="btn primary-btn butt1">Add to cart</button></a></center>
  </div>`;
  }
  $('#standard-container').html(html);
}

// in index page, add data to "lunchdinner" container
{
  let html = "";
  const htmldata = content.pages.index.typeOfItem.lunchdinner;
  for(let i=0;i<htmldata.length;i++){
    html += `<div class="card">
    <div class="image1" style="background: url('${htmldata[i].cardBgImg}');">
      <img src="${htmldata[i].cardFrontImg}">
    </div>
    <div class="title">
      <h3><b>${htmldata[i].title}</b></h3>
    </div>
    <center><a href="paymentpage.html"><button class="btn primary-btn butt1">Add to cart</button></a></center>
  </div>`;
  }
  $('#lunchdinner-container').html(html);
}

// in index page, add data to "shakes" container
{
  let html = "";
  const htmldata = content.pages.index.typeOfItem.shakes;
  for(let i=0;i<htmldata.length;i++){
    html += `<div class="card">
    <div class="image1" style="background: url('${htmldata[i].cardBgImg}');">
      <img src="${htmldata[i].cardFrontImg}">
    </div>
    <div class="title">
      <h3><b>${htmldata[i].title}</b></h3>
    </div>
    <center><a href="paymentpage.html"><button class="btn primary-btn butt1">Add to cart</button></a></center>
  </div>`;
  }
  $('#shakes-container').html(html);
}