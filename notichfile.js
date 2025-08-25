// notice.js

document.addEventListener("DOMContentLoaded", function () {
  let container = document.createElement("div");
  container.innerHTML = `
    <style>
      .notice-container {
        text-align: center;
        margin: 20px auto;
      }
      .notice-toggle {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        background: #4CAF50;
        color: white;
        padding: 10px 20px;
        border-radius: 50px;
        font-weight: bold;
        animation: blinkColor 1s infinite;
      }
      .bell {
        margin: 0 10px;
        animation: blink 1s infinite;
      }
      @keyframes blink {
        50% { opacity: 0; }
      }
      @keyframes blinkColor {
        0% { color: red; }
        50% { color: yellow; }
        100% { color: cyan; }
      }
      .notice-list {
        display: none;
        margin-top: 10px;
        list-style: none;
        padding: 0;
      }
      .notice-list li {
        background: #f0f0f0;
        margin: 5px 0;
        padding: 10px;
        border-radius: 8px;
      }
      .notice-list li a {
        text-decoration: none;
        color: #333;
      }
      .notice-list li a:hover {
        text-decoration: underline;
        color: #007BFF;
      }
    </style>

    <div class="notice-container">
      <div class="notice-toggle">
        <span class="bell">🔔</span>
        নোটিশ দেখুন
        <span class="bell">🔔</span>
      </div>
      <ul class="notice-list" id="noticeList">
        <li><a href="#">নোটিশ ১</a></li>
        <li><a href="#">নোটিশ ২</a></li>
        <li><a href="#">নোটিশ ৩</a></li>
      </ul>
    </div>
  `;
  document.body.prepend(container);

  const toggle = container.querySelector(".notice-toggle");
  const list = container.querySelector(".notice-list");

  toggle.addEventListener("click", () => {
    list.style.display = list.style.display === "block" ? "none" : "block";
  });
});
