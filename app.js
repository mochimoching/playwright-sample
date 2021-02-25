const { chromium } = require('playwright');
require('dotenv').config();
const env = process.env;

(async () => {
  const browser = await chromium.launch({headless:false});
  const context = await browser.newContext({
    httpCredentials : {
      username : env.USERNAME_PROXY,
      password : env.PASSWORD_PROXY
    }
  });
  const page = await context.newPage();
  await page.goto(env.URL);
  await page.type('input[id="user_name"]', env.USERNAME_APP);
  await page.type('input[id="user_password"]', env.PASSWORD_APP);

  await Promise.all([
    page.waitForNavigation(),
    page.click('input[id="user_login"]')
  ]);

  const selector = 'table > tbody > tr > td > div > table > tbody > tr > td > a';
  const aTagAll = await page.$$(selector);
  let aTag = null;
  let tagText = null;

  for (aTag of aTagAll) {
    tagText = await (await aTag.getProperty('textContent')).jsonValue();
    if(tagText.match(/Bizca/)) {
      break;
    }
  }

  await Promise.all([
    page.waitForNavigation(),
    aTag.click()
  ]);

//  await browser.close();
})();
