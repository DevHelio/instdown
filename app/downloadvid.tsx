"use server";

import puppeteer from "puppeteer";

async function getVideoDownload(url: string) {
  const website = "https://sssinstagram.com/video-downloader";
  //Server action, download video

  console.log("Starting...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(website);

  await page.waitForSelector(".form__input");
  await page.type(".form__input", url);
  await page.click(
    `html body.body-en div#app main section div.form-block div.form-block__wrapper form.form.search-form button.form__submit`
  );

  //Get element by xpath
  let el = await page.waitForSelector(
    `html body.body-en div#app main section div.form-block div.form-block__wrapper div.search-result div.output-component div.output-list ul.output-list__list.output-list__list--one-item li.output-list__item a.button.button--filled`
  );

  let downloadLink = await page.$eval(
    "html body.body-en div#app main section div.form-block div.form-block__wrapper div.search-result div.output-component div.output-list ul.output-list__list.output-list__list--one-item li.output-list__item a.button.button--filled",
    (el) => el.getAttribute("href")
  );

  console.log(downloadLink);
  await browser.close();

  console.log("End...");
  return downloadLink;
}

export default getVideoDownload;
