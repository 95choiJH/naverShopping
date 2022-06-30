
fetch('asset/json/gnbMenu.json')
.then((response) => {
  return response.json();
})
.then((data) => {
  data.gnbMenu.forEach(function(el) {
    let li = document.createElement('li')
    let a = document.createElement('a');

    a.setAttribute("href", "");

    li.append(a);
    a.append(el.title);

    $('.gnb-wrap').append(li);
  })

  data.eventSlide.forEach(function(el){
    let slideWrap = document.createElement('div');
    let a = document.createElement('a');
    let img = document.createElement('img');
    let txtWrap = document.createElement('div');
    let title = document.createElement('strong');
    let desc = document.createElement('span');

    slideWrap.classList.add('swiper-slide');
    a.setAttribute("href", "");
    img.setAttribute("src", el.src);
    img.setAttribute("alt", el.title);
    txtWrap.classList.add('text-wrap');
    desc.classList.add('desc');

    slideWrap.append(a);
    a.append(img);
    a.append(txtWrap);
    txtWrap.append(title);
    txtWrap.append(desc);
    title.append(el.title);
    desc.append(el.desc);

    $('.eventSlide .swiper-wrapper').append(slideWrap);
  });
  data.shopLive.forEach(function(el){
    let slideWrap = document.createElement('div');
    let a = document.createElement('a');
    let imgWrap = document.createElement('div');
    let img = document.createElement('img');
    let txtWrap = document.createElement('div');
    let time = document.createElement('strong');
    let title = document.createElement('p');

    slideWrap.classList.add('swiper-slide');
    a.setAttribute("href", "");
    imgWrap.classList.add('img-wrap');
    img.setAttribute("src", el.src);
    img.setAttribute("alt", el.title);
    txtWrap.classList.add('text-wrap');

    slideWrap.append(a);
    a.append(imgWrap);
    a.append(txtWrap);
    imgWrap.append(img);
    txtWrap.append(time);
    txtWrap.append(title);
    time.append(el.time);
    title.append(el.title);

    $('.shopLive .swiper-wrapper').append(slideWrap);
  });
  data.liveCalendar.forEach(function(el){
    let li = document.createElement('li');
    let a = document.createElement('a');
    let imgWrap = document.createElement('div');
    let largeImg = document.createElement('img');
    let timeBox = document.createElement('div');
    let date = document.createElement('strong');
    let txtWrap = document.createElement('div');
    let txtTopBox = document.createElement('div');
    let largeTitle = document.createElement('strong');
    let smallItem = document.createElement('div');
    let smallImg = document.createElement('img');
    let smallTxtWrap = document.createElement('div');
    let smallTitle = document.createElement('strong');
    let txtBotBox = document.createElement('div');
    let mall = document.createElement('span');

    a.setAttribute("href", "");
    imgWrap.classList.add('img-wrap');
    largeImg.setAttribute("src", el.largeSrc);
    largeImg.setAttribute("alt", el.largeTitle);
    timeBox.classList.add('time-box');
    txtWrap.classList.add('txt-wrap');
    txtTopBox.classList.add('txtTop-box');
    smallItem.classList.add('small-item');
    smallImg.setAttribute("src", el.smallSrc);
    smallImg.setAttribute("alt", el.smallTitle);
    smallTxtWrap.classList.add('smallTxt-wrap');
    txtBotBox.classList.add('txtBot-box');

    li.append(a);
    a.append(imgWrap);
    a.append(txtWrap);
    imgWrap.append(largeImg);
    imgWrap.append(timeBox);
    timeBox.append(date);
    timeBox.append(el.time);
    date.append(el.date);
    txtWrap.append(txtTopBox);
    txtWrap.append(smallItem);
    txtWrap.append(txtBotBox);
    txtTopBox.append(largeTitle);
    largeTitle.append(el.largeTitle);
    smallItem.append(smallImg);
    smallItem.append(smallTxtWrap);
    smallImg.setAttribute("src", el.smallSrc);
    smallImg.setAttribute("alt", el.smallTitle);
    smallTxtWrap.append(smallTitle);
    smallTitle.append(el.smallTitle);
    txtBotBox.append(mall);
    mall.append(el.mall);

    if(el.desc != null) {
      let desc = document.createElement('span');
      desc.classList.add('desc');
      txtTopBox.append(desc);
      desc.append(el.desc);
    }
    if (el.price != null) {
      let wrap = document.createElement('div');
      let discount = document.createElement('em');
      let price = document.createElement('em');
      let won = document.createElement('span');

      wrap.classList.add('price-area')
      discount.classList.add('discount');

      wrap.append(discount);
      wrap.append(price);
      discount.append(el.discount);
      price.append(el.price);
      price.append(won);
      won.append("원");

      smallTxtWrap.append(wrap);
    } else if (el.other != null) {
      let other = document.createElement('p');
      other.append(el.other);
      smallTxtWrap.prepend(other);
    }

    $('.sc-liveCalendar .content-box').append(li);
  })
  
}).catch(function(error){
  console.error("gnbMenu 에러");
})