const puppeteer = require('puppeteer');

(async () => {
    // Braveブラウザのパスを指定します
    const bravePath = 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'; // Braveブラウザの実行ファイルのパスを指定してください
    const newTab = 'brave://newtab';
    // const userDataPath = 'C:\\Users\\hkita\\AppData\\Local\\Temp\\puppeteer_dev_chrome_profile-XXXXXXS60rUX';
    const userDataPath = 'C:\\mytk\\brave_rewards_bot';
    // const userDataPath = 'C:\\Users\\hkita\\AppData\\Local\\BraveSoftware\\Brave-Browser\\User Data';
    // Puppeteerでブラウザを起動
    const browser = await puppeteer.launch({
        executablePath: bravePath,
        headless: false, // ヘッドレスモードで起動
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
          // '--lang=en-US' 
          // '--start-maximized'
        ],
        defaultViewport: null,
        userDataDir: userDataPath
    });

    const urlList = [
      // 'https://peraichi.com/landing_pages/view/kokokunumber1/',
      // 'https://ameblo.jp/koukoku-ippai/',
      // 'https://developer.hatenastaff.com/',
      // 'https://dev.classmethod.jp/',
      // 'https://engineering.mercari.com/',
      // 'https://blog.google/intl/ja-jp/',
      // 'https://codezine.jp/',
      // 'https://gigazine.net/',
      // 'https://gihyo.jp/',
      // 'https://www.infoq.com/jp/',
      // 'http://blog.livedoor.jp/itsoku/',
      // 'http://blog.livedoor.jp/kaikaihanno/',
      // 'http://pandora11.com/',
      // 'http://f1jouhou2.com/',
      // 'https://f1are.com/',
      // 'https://f1-gate.com/',
      // 'https://zenn.dev/magito/articles/e9f2602d5a71ce',
      // 'https://ascii.jp/elem/000/004/198/4198881/',
      // 'https://japan.cnet.com/',
      // 'https://dev.classmethod.jp/articles/blackbelt-list/'
      'http://blog.livedoor.jp/itsoku/',
      'http://blog.livedoor.jp/itsoku/archives/pc.html',
      'http://blog.livedoor.jp/itsoku/archives/mobile.html',
      'http://blog.livedoor.jp/itsoku/archives/cat_886769.html',
      'http://blog.livedoor.jp/itsoku/archives/cat_882777.html',
      'https://news.yahoo.co.jp/',
      'https://news.yahoo.co.jp/categories/domestic',
      'https://news.yahoo.co.jp/categories/world',
      'https://news.yahoo.co.jp/categories/business',
      'https://news.yahoo.co.jp/categories/entertainment',
      'https://news.yahoo.co.jp/categories/sports',
      'https://news.yahoo.co.jp/categories/it',
      'https://news.yahoo.co.jp/categories/science',
      'https://news.yahoo.co.jp/categories/life',
      'https://news.yahoo.co.jp/categories/local',
      `https://www.publickey1.jp/blog/202401.html`,
      `https://www.publickey1.jp/blog/202402.html`,
      `https://www.publickey1.jp/blog/202403.html`,
      `https://www.publickey1.jp/blog/202404.html`,
      `https://www.publickey1.jp/blog/202405.html`,
      `https://www.publickey1.jp/blog/202406.html`,
      `https://www.publickey1.jp/blog/202407.html`
    ];

    // 任意のサイトを開く
    var page = null;
    var topSite = null;
    var topSite = await browser.newPage();
    await topSite.goto(newTab);

    // while(true) {
      for (const url of urlList) {
        page = await browser.newPage();
        await page.goto(url);
        // await autoScroll(page);
        await page.close();
      }

      // トップサイトを開く
      for (let i = 0; i < 100; i++) {
        // topSite = await browser.newPage();
        // await topSite.goto(newTab);
        await topSite.reload();
        // await sleep(300);
        // await topSite.close();
      }
    // }

    // ブラウザを閉じる
    // await browser.close();
})();

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// スクロールさせる関数
async function autoScroll(page) {
   await page.evaluate(async () => {
      await new Promise((resolve, reject) => {
          let totalHeight = 0;
          const distance = 100;
          const timer = setInterval(() => {
              const scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;
              if (totalHeight >= scrollHeight) {
                  clearInterval(timer);
                  resolve();
              }
          }, 100);
      });
  });
}