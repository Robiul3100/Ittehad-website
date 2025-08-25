document.getElementById("notice-box").innerHTML = `
  <style>
    .notice-container {
      width: 100%;
      max-width: 600px;
      margin: auto;
      font-family: 'Hind Siliguri', sans-serif;
    }

    .notice-header {
      background: #fff;
      padding: 12px 18px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: bold;
      border: 1px solid #ddd;
      gap: 10px;
      transition: background 0.3s;
    }
    .notice-header:hover { background: #f9f9f9; }

    .notice-header i {
      color: #d9534f;
      animation: blink 1.2s infinite;
      font-style: normal;
    }
    @keyframes blink {
      0%, 50%, 100% { opacity: 1; }
      25%, 75% { opacity: 0; }
    }

    .notice-text-blink {
      animation: colorChange 2s infinite;
    }
    @keyframes colorChange {
      0%   { color: #d9534f; }
      25%  { color: #007bff; }
      50%  { color: #28a745; }
      75%  { color: #ff9800; }
      100% { color: #d9534f; }
    }

    .notice-dropdown {
      max-height: 0;
      overflow: hidden;
      background: #fff;
      border-radius: 8px;
      margin-top: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      transition: max-height 0.5s ease, padding 0.3s ease;
    }
    .notice-dropdown.open {
      max-height: 500px;
      padding: 10px 0;
    }

    .notice-item {
      display: grid;
      grid-template-columns: 30px 1fr 110px;
      align-items: center;
      padding: 12px 15px;
      border-bottom: 1px solid #eee;
      transition: background 0.3s;
    }
    .notice-item:last-child { border-bottom: none; }
    .notice-item:hover { background: #f9f9f9; }

    .notice-item i {
      font-style: normal;
      font-size: 16px;
      text-align: center;
      color: #d9534f;
      animation: blink 1.2s infinite;
    }
    .notice-text a {
      text-decoration: none;
      color: #333;
      transition: color 0.3s;
    }
    .notice-text a:hover { color: #007bff; }
    .notice-date {
      text-align: right;
      font-size: 13px;
      color: #666;
    }

    @media (max-width: 500px) {
      .notice-item {
        grid-template-columns: 25px 1fr 90px;
        padding: 10px;
      }
      .notice-text a { font-size: 14px; }
      .notice-date { font-size: 12px; }
    }
  </style>

  <div class="notice-container">
    <div class="notice-header" onclick="toggleDropdown()">
      <i>🔔</i>
      <span class="notice-text-blink">নোটিশ দেখুন</span>
      <i>🔔</i>
    </div>
    <div class="notice-dropdown" id="noticeDropdown">
      লোড হচ্ছে...
    </div>
  </div>
`;

// Dropdown Toggle
function toggleDropdown() {
  document.getElementById("noticeDropdown").classList.toggle("open");
}

// আপনার ব্লগার URL দিন
const blogURL = "https://ittehadul-ummah.blogspot.com/feeds/posts/default?alt=json&max-results=3";

fetch(blogURL)
  .then(res => res.json())
  .then(data => {
    const entries = data.feed.entry;
    let html = "";

    entries.forEach(entry => {
      const title = entry.title.$t;
      const link = entry.link.find(l => l.rel === "alternate").href;
      const published = new Date(entry.published.$t);
      const date = published.toLocaleDateString("bn-BD", {
        day: "numeric", month: "long", year: "numeric"
      });

      html += `
        <div class="notice-item">
          <i>🔔</i>
          <div class="notice-text"><a href="${link}" target="_blank">${title}</a></div>
          <div class="notice-date">${date}</div>
        </div>
      `;
    });

    document.getElementById("noticeDropdown").innerHTML = html;
  })
  .catch(err => {
    document.getElementById("noticeDropdown").innerHTML = "<p style='text-align:center;color:red'>নোটিশ লোড হচ্ছে না!</p>";
    console.error(err);
  });
