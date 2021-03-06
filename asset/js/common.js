
fetch('asset/json/main.json')
.then((response) => {
  return response.json();
})
.then((data) => {
  
  data.gnbMenu.forEach(function(el) {
    let li = document.createElement('li')
    let a = document.createElement('a');

    a.setAttribute("href", "");

    if (el.title != null) {
      a.append(el.title);
    } else {
      let blind = document.createElement('span')
      blind.classList.add('blind');
      a.append(blind);
      if (el.svg != null) {
        a.innerHTML = el.svg;
        blind.append(el.blind);
      } else {
        a.classList.add('img-title');
        a.style.width = el.width;
        a.style.height = el.height;
        a.style.backgroundPosition = el.position;
        blind.append(el.blind);
      }
    }
    
    if (el.beta != null) {
      let beta = document.createElement('i');
      a.append(beta);
    }

    li.append(a);
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
      won.append("???");

      smallTxtWrap.append(wrap);
    } else if (el.other != null) {
      let other = document.createElement('p');
      other.append(el.other);
      smallTxtWrap.prepend(other);
    }

    $('.sc-liveCalendar .content-box').append(li);
  })

  data.trend.forEach(function(el){
    let li = document.createElement('li');
    let a = document.createElement('a');
    let title = document.createElement('em');

    a.setAttribute("href", "");

    li.append(a);
    a.append(title);
    a.style.backgroundImage = "url("+el.src+")"
    title.append(el.title);

    $('.sc-trend ul').append(li);
  })
  
  data.shopMall.forEach(function(el){
    let li = document.createElement('li');
    let btn = document.createElement('button');
    let imgWrap = document.createElement('div');
    let img = document.createElement('img');
    let title = document.createElement('em');

    imgWrap.classList.add('img-wrap');
    img.setAttribute("src", el.src);
    img.setAttribute("alt", el.title);
    
    li.append(btn);
    btn.append(imgWrap);
    btn.append(title);
    imgWrap.append(img);
    title.append(el.title);
    
    $('.sc-toptop .btn-more').before(li);
  })

  data.shopMallItem.forEach(function(el){
    let li = document.createElement('li');
    let a = document.createElement('a');
    let imgWrap = document.createElement('div');
    let img = document.createElement('img');
    let txtWrap = document.createElement('div');
    let price = document.createElement('em');
    let title = document.createElement('strong');

    a.setAttribute("href", "");
    imgWrap.classList.add('img-wrap');
    img.setAttribute("src", el.src);
    img.setAttribute("alt", el.title);
    txtWrap.classList.add('txt-wrap');
    
    li.append(a);
    a.append(imgWrap);
    a.append(txtWrap);
    imgWrap.append(img);
    txtWrap.append(price);
    txtWrap.append(title);
    price.append(el.price);
    title.append(el.title);

    if (el.stamp != null) {
      let stamp = document.createElement('span');
      stamp.classList.add('stamp');
      imgWrap.append(stamp);
      stamp.append(el.stamp);
    }

    $('.sc-toptop .item-wrap').append(li);
  });

  data.rank.forEach(function(el){
    let li = document.createElement('li');
    let a = document.createElement('a');
    let title = document.createElement('span');

    a.setAttribute("href", "");
    a.style.backgroundImage = "url("+el.src+")"

    li.append(a);
    a.append(title);
    title.append(el.title);

    $('.content-rank ul').append(li);
  });

  data.best.forEach(function(el){
    let li = document.createElement('li');
    let a = document.createElement('a');
    let imgWrap = document.createElement('div');
    let img = document.createElement('img');
    let num = document.createElement('span');
    let txtWrap = document.createElement('div');
    let title = document.createElement('strong');
    let price = document.createElement('em');
    let won = document.createElement('span');

    a.setAttribute("href", "");
    imgWrap.classList.add('img-wrap');
    img.setAttribute("src", el.src);
    img.setAttribute("alt", el.title);
    txtWrap.classList.add('txt-box');
    
    li.append(a);
    a.append(imgWrap);
    a.append(txtWrap);
    imgWrap.append(img);
    imgWrap.append(num);
    num.append(el.num);
    txtWrap.append(title);
    txtWrap.append(price);
    title.append(el.title);
    price.append(el.price);
    price.append(won);
    won.append("???");

    $('.content-best ul').append(li);
  });

  data.brand.forEach(function(el){
    let li = document.createElement('li');
    let a = document.createElement('a');
    let imgWrap = document.createElement('div');
    let img = document.createElement('img');
    let title = document.createElement('em');

    a.setAttribute("href", "");
    imgWrap.classList.add('img-wrap');
    img.setAttribute("src", el.src);
    img.setAttribute("alt", el.title);
    
    li.append(a);
    a.append(imgWrap);
    a.append(title);
    imgWrap.append(img);
    title.append(el.title);

    $('.sc-brand ul').append(li);
  });

  data.hotDeal.forEach(function(el){
    let li = document.createElement('li');
    let a = document.createElement('a');
    let imgWrap = document.createElement('div');
    let img = document.createElement('img');
    let stamp = document.createElement('div');
    let per = document.createElement('span');
    let txtWrap = document.createElement('div');
    let time = document.createElement('p');
    let title = document.createElement('strong');
    let price = document.createElement('em');
    let won = document.createElement('span');

    imgWrap.classList.add("img-wrap");
    img.setAttribute("src", el.src);
    img.setAttribute("alt", el.title);
    stamp.classList.add("discount-stamp");
    txtWrap.classList.add("txt-wrap");
    
    li.append(a);
    a.append(imgWrap);
    a.append(txtWrap);
    imgWrap.append(img);
    imgWrap.append(stamp);
    stamp.append(el.discount);
    stamp.append(per);
    per.append("%");
    txtWrap.append(time);
    txtWrap.append(title);
    txtWrap.append(price);
    time.append("???????????? 00: 00: 00")
    title.append(el.title);
    price.append(el.price);
    price.append(won);
    won.append("???");

    $('.sc-hotDeal ul').append(li);
  
  });

  data.category.forEach(function(el){
    let li = document.createElement('li');
    let a = document.createElement('a');
    let i = document.createElement('i');


    a.setAttribute("href", "");
    i.style.backgroundImage = "url("+el.src+")";

    li.append(a);
    a.append(i);
    a.append(el.title);

    $('.category-area ul').append(li);
  });

  data.service.forEach(function(el){
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.setAttribute("href", "");

    li.append(a);

    if (el.title != null) {
      let i = document.createElement('i');
      a.append(i);
      a.append(el.title);
      i.innerHTML = el.svg;
    } else {
      a.innerHTML = el.svg + el.titleSVG;
    }

    $('.service-area ul').append(li);
  });

    let brandImg = document.createElement('img');
    let itemImg = document.createElement('img');
    let brand = document.createElement('em');
    let pickCount = document.createElement('span');
    let title = document.createElement('h2');
    let reviewCount = document.createElement('span');
    let disPer = document.createElement('em');
    let del = document.createElement('em');
    let priceWon = document.createElement('span');
    let price = document.createElement('em');
    let stackPoint = document.createElement('em');
    let stackWon = document.createElement('span');
    let oriPoint = document.createElement('span');
    let maxPoint = document.createElement('span');
    let fiveperPoint = document.createElement('em');
    let cardPoint = document.createElement('em');
    let chargePoint = document.createElement('em');

    brandImg.setAttribute("src", data.itemPage[0].brandSrc);
    brandImg.setAttribute("alt", data.itemPage[0].brand);
    brandImg.style.maxWidth = data.itemPage[0].maxWidth;
    brandImg.style.maxHeight = data.itemPage[0].maxHeight;
    itemImg.setAttribute("src", data.itemPage[0].itemSrc);
    itemImg.setAttribute("alt", data.itemPage[0].title);
    brandImg.classList.add('brand-title');
    del.classList.add('del');
    price.classList.add('discount-price');
    maxPoint.classList.add('max-point');
    brand.append(data.itemPage[0].brand);
    pickCount.append(data.itemPage[0].pickCount);
    title.append(data.itemPage[0].title);
    reviewCount.append(data.itemPage[0].reviewCount);
    disPer.append(data.itemPage[0].disPer);
    del.append(data.itemPage[0].del);
    price.append(data.itemPage[0].price);
    priceWon.append("???")
    price.append(priceWon);
    stackPoint.append(data.itemPage[0].stackPoint);
    stackWon.append("???")
    stackPoint.append(stackWon);
    oriPoint.append(data.itemPage[0].oriPoint);
    maxPoint.append(data.itemPage[0].maxPoint);
    fiveperPoint.append(data.itemPage[0].fiveperPoint);
    cardPoint.append(data.itemPage[0].cardPoint);
    chargePoint.append(data.itemPage[0].chargePoint);

    $('.header-sub .logo-area').append(brandImg);
    $('.sc-item .img-area .img-wrap').append(itemImg);
    $('.pick-area').prepend(brand);
    $('.pick').append(pickCount);
    $('.sc-item .item-info').prepend(title);
    $('.more-review').prepend(reviewCount);
    $('.discount-area').append(disPer);
    $('.discount-area').append(del);
    $('.item-info').append(price);
    $('.discount-price').append(priceWon);
    $('.stack-point').append(stackPoint);
    $('.tip-box .origin').append(oriPoint);
    $('.maxPoint-area').append(maxPoint);
    $('.maxPoint-area').append("???");
    $('.fiveperPoint').append(fiveperPoint);
    $('.cardPoint').append(cardPoint);
    $('.chargePoint').append(chargePoint);
}).catch(function(error){
  console.error("gnbMenu ??????");
})