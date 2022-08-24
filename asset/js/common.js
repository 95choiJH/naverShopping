
fetch('https://95choijh.github.io/naverShopping/asset/json/main.json')
.then((response) => {
  return response.json();
})
.then((data) => {
  
  data.gnbMenu.forEach(function(el) {
    
    html = '';

    el.title != null ? html += `<li><a href=""><em>${el.title}</em>` : el.svg != null ? html += `<li><a href=""><span class="blind">${el.blind}</span>${el.svg}` : html += `<li><a href="" class="img-title"><em><span class="img-menu" style="width: ${el.width}; height: ${el.height}; background-position: ${el.position};"></span><span class="blind">${el.blind}</span></em>`    
    el.beta != null ? html += `<i></i></a></li>` : html += `</a></li>`;

    $('.gnb-wrap').append(html);
    
  })

  data.eventSlide.forEach(function(el){
    html = '';
    html += 
    `<div class="swiper-slide">
        <a href="">
          <div class="img-wrap">
            <img src="${el.src}" alt="${el.title}">
          </div>
          <div class="text-wrap">
            <strong>${el.title}</strong>
            <span class="desc">${el.desc}</span>
          </div>
        </a>
    </div>`

    $('.eventSlide .swiper-wrapper').append(html);
  });
  data.shopLive.forEach(function(el){
    html = '';

    html += 
    `<div class="swiper-slide">
      <a href="">
        <div class="img-wrap">
          <img src="${el.src}" alt="${el.title}">
        </div>
        <div class="text-wrap">
          <strong>${el.time}</strong>
          <p>${el.title}</p>
        </div>
      </a>
    </div>`

    $('.shopLive .swiper-wrapper').append(html);
  });
  
  data.liveCalendar.forEach(function(el){
    html = '';

    html += 
    `<li>
      <a href="">
        <div class="img-wrap">
          <img src="${el.largeSrc}" alt="${el.largeTitle}">
          <strong class="time-box">${el.date}<span>${el.time}</span></strong>
        </div>
        <div class="txt-wrap">
          <div class="txtTop-box">
            <h4>${el.largeTitle}</h4>`
            el.desc != null ? html += `<p class="desc">${el.desc}</p>` : ""
html += `</div>
          <div class="small-item">
            <img src="${el.smallSrc}" alt="${el.smallTitle}">
            <div class="smallTxt-wrap">`
            el.other != null ? html += `<p>${el.other}</p>` : ""
    html += `<strong>${el.smallTitle}</strong>`
            el.price != null ? html += `<div class="price-area"><em class="discount">${el.discount}</em><em>${el.price}<pan>원</span></em></div>` : ""
    html += `</div>
          </div>
          <div class="txtBot-box">
            <span>${el.mall}</span>
          </div>
        </div>
      </a>
    </li>`

    $('.sc-liveCalendar .content-box').append(html);
  })

  data.trend.forEach(function(el){
    html = '';

    html +=
    `<li>
      <a href="" style="background-image: url(${el.src})">
        <em>${el.title}</em>
      </a>
    </li>`
    $('.sc-trend ul').append(html);
  })
  
  data.shopMall.forEach(function(el){
    html = '';

    html += 
    `<li>
      <button>
        <div class="img-wrap">
          <img src="${el.src}" alt="${el.title}">
        </div>
        <em>${el.title}</em>
      </button>
    </li>`
    
    $('.sc-toptop .btn-more').before(html);
  })

  data.shopMallItem.forEach(function(el){
    html = '';

    html += 
    `<li>
      <a href="">
        <div class="img-wrap">
          <img src="${el.src}" alt="${el.title}">`
          el.stamp != null ? html += `<span class="stamp">18%SALE</span>` : ""
    html +=
        `</div>
        <div class="txt-wrap">
          <em>${el.price}</em>
          <strong>${el.title}</strong>
        </div>
      </a>
    </li>`

    $('.sc-toptop .item-wrap').append(html);
  });

  data.rank.forEach(function(el){
    html = '';

    html += 
    `<li>
      <a href="" style="background-image: url(${el.src})">
        <div class="txt-wrap"><em>${el.title}</em></div>
      </a>
    </li>`

    $('.content-rank ul').append(html);
  });

  data.best.forEach(function(el){
    html = '';

    html +=
    `<li>
      <a href="">
        <div class="img-wrap">
          <img src="${el.src}" alt="${el.title}">
          <span>${el.num}</span>
        </div>
        <div class="txt-box">
          <h4>${el.title}</h4>
          <em>${el.price}<span>원</span></em>
        </div>
      </a>
    </li>`

    $('.content-best ul').append(html);
  });

  data.brand.forEach(function(el){
    html = '';

    html +=
    `<li>
      <a href="">
        <div class="img-wrap">
          <img src="${el.src}" alt="${el.title}">
        </div>
        <em>${el.title}</em>
      </a>
    </li>`

    $('.sc-brand ul').append(html);
  });

  data.hotDeal.forEach(function(el){
    html = '';

    html +=
    `<li>
      <a href="">
        <div class="img-wrap">
          <img src="${el.src}" alt="${el.title}">
          <div class="discount-stamp">${el.discount}<span>%</span></div>
        </div>
        <div class="txt-wrap">
          <p>남은시간 00: 00: 00</p>
          <h3>${el.title}</h3>
          <em>${el.price}<span>원</span></em>
        </div>
      </a>
    </li>`

    $('.sc-hotDeal ul').append(html);
  
  });

  data.category.forEach(function(el){
    html = '';

    html +=
    `<li>
      <a href="">
        <div class="ic-cate" style="background-image: url(${el.src})"></div>
        <h3>${el.title}</h3>
      </a>
    </li>`

    $('.category-area ul').append(html);
  });

  data.service.forEach(function(el){
    html = '';

    html += 
    `<li>
      <a href="">`
        el.title != null ? html += `<div class="ic-service">${el.svg}</div><h3>${el.title}</h3>` : html += `${el.svg} ${el.titleSVG}`
    html += 
      `</a>
    </li>`

    $('.service-area ul').append(html);
  });
}).catch(function(error){
  console.error("에러");
})
$(function(){
    
  var swiper = new Swiper(".eventSlide", {
    loopAdditionalSlides : 1,
    loopedSlides: 2,
    spaceBetween: 14,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".shopLive", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
})