const { chromium } = require('playwright');
require('dotenv').config();
const env = process.env;

(async () => {
  const browser = await chromium.launch({headless:false});
  const context = await browser.newContext();
  const page = await context.newPage();
 
  await page.goto(env.URL);
  await page.type('input[id="user_name"]', env.USERNAME); 
  await page.type('input[id="user_password"]', env.PASSWORD); 

  await Promise.all([
    page.waitForNavigation(),
    page.click('input[id="user_login"]')
  ]);

  const selector = 'table > tbody > tr > td > div > table > tbody > tr > td > a';
  const aTagAll = await page.$$(selector);
  let tagText = [];
  let indicator = "";
  for (let i = 0; i < aTagAll.length; i++) {
      tagText.push(await (await aTagAll[i].getProperty('textContent')).jsonValue())
      if(tagText[i].match(/Bizca/)){
          indicator = i;
          break;
      }
  }

  await Promise.all([
    page.waitForNavigation(),
    aTagAll[indicator].click()
  ]);
 
//  await browser.close();
})();
