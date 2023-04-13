const scrapeCategory =async (browser, url) =>{
    try {
        let page = await browser.newPage();
        console.log(">> mở trình duyệt mới");
        await page.goto(url);
        console.log(">> truy cập vào" + url);
        await page.waitForSelector("#webpage");
        console.log(">> web đã lấy xog data");
  
        const dataCategory = await page.$$eval(
          "#navbar-menu > ul > li",
          (els) => {
            dataCategory = els.map((el) => {
              return {
                category: el.querySelector("a").innerText,
                link: el.querySelector("a").href,
              };
            });
            
            return dataCategory;
          }
        );
        console.log(dataCategory);
  
        await page.close()
        // res();
      } catch (error) {
        console.log("lỗi ở scrape category : " + error);
        // rej(error);
      }
}



export default scrapeCategory;
