<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Love Forever</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      background: #2e003e;
      height: 100vh;
      margin: 0;
      overflow: hidden;
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
    }
    .quick-link {
    

      position: fixed;
      right: 10px;
      width: 35px;
      height: 35px;
      z-index: 999;
      background: #696969;
      border-radius: 50%;
      padding: 1px;
      text-align: center;
      color: #ddd;
      text-decoration: none;
      line-height: 35px;
      font-size: 13px;
      user-select: none;
    }
    .quick-link:nth-of-type(1) { top: 10%; }
    .quick-link:nth-of-type(2) { top: 4%;  z-index: 998; }
    .quick-link:nth-of-type(3) { top: 16%; z-index: 997; }
    .quick-link:nth-of-type(4) { top: 22%; z-index: 996; }

    .center-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2.5rem;
      color: #fff;
      text-shadow: 0 0 15px #ea80b0;
      z-index: 1;
      pointer-events: none;
      text-align: center;
    }

      .center-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem; /* تم تصغير الحجم */
  color: #fff;
  text-shadow: 0 0 15px #000000;
  z-index: 1;
  pointer-events: none;
  text-align: center;
}

    #ui .love {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -200px 0 0 -300px;
      --i: 1;
      z-index: 2;
    }

    #ui .love_word {
      color: #ea80b0;
      font-size: 1.4rem;
      transform: translateY(-100%) rotateZ(-30deg);
      text-shadow: 0 0 10px #fff;
      letter-spacing: 2px;
      white-space: nowrap;
    }

    #ui .love_horizontal {
      animation: horizontal 10000ms infinite alternate ease-in-out;
      animation-delay: calc(var(--i) * -300ms);
    }
    #ui .love_vertical {
      animation: vertical 20000ms infinite linear;
      animation-delay: calc(var(--i) * -300ms);
    }

    @keyframes horizontal {
      from { transform: translateX(0px); }
      to   { transform: translateX(450px); }
    }
    @keyframes vertical {
      0%   { transform: translateY(180px); }
      10%  { transform: translateY(45px); }
      15%  { transform: translateY(4.5px); }
      18%  { transform: translateY(0px); }
      20%  { transform: translateY(4.5px); }
      22%  { transform: translateY(34.61538px); }
      24%  { transform: translateY(64.28571px); }
      25%  { transform: translateY(112.5px); }
      26%  { transform: translateY(64.28571px); }
      28%  { transform: translateY(34.61538px); }
      30%  { transform: translateY(4.5px); }
      32%  { transform: translateY(0px); }
      35%  { transform: translateY(4.5px); }
      40%  { transform: translateY(45px); }
      50%  { transform: translateY(180px); }
      71%  { transform: translateY(428.57143px); }
      72.5%{ transform: translateY(441.17647px); }
      75%  { transform: translateY(450px); }
      77.5%{ transform: translateY(441.17647px); }
      79%  { transform: translateY(428.57143px); }
      100% { transform: translateY(180px); }
    }
  </style>
</head>
<body>
  <a href="#" class="quick-link" title="Create">Create</a>
  <a href="#" class="quick-link" title="More">More</a>
  <a href="#" class="quick-link" title="Code">Code</a>
  <a href="#" class="quick-link" title="Gift">Gift</a>

  <div class="center-text">11/11 is special day just like you</div>
  <div id="ui"></div>

  <script>
    const N = 100;
    const ui = document.getElementById('ui');

    for (let i = 1; i <= N; i++) {
      const love = document.createElement('div');
      love.className = 'love';
      love.style.setProperty('--i', i);

      const h = document.createElement('div');
      h.className = 'love_horizontal';

      const v = document.createElement('div');
      v.className = 'love_vertical';

      const word = document.createElement('div');
      word.className = 'love_word';
      word.textContent = 'my special one';

      v.appendChild(word);
      h.appendChild(v);
      love.appendChild(h);
      ui.appendChild(love);
    }
  </script>
</body>
</html>
