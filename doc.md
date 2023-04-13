.
+ scape demo 
+ cài npn init -y (setup nodejs)
+ npm i puppeteer 
+ tạo browser.js ()
+ scrapeController.js (điều hướng)
+ scaper.js (tạo hàm cào data)


+ browser.js
    + import puppeteer 
    + tạo biến startBrowser = async () => {...}
        + let browser
        + try {...} catch(error){...} 
            + browser = await puppeteer.launch({...})
                + headless : false 
                        -> true : chạy ngầm code
                        -> false : trình duyệt chạy và nhìn thấy
                + args: ["--disable-setuid-sandbox"]
                        -> chrome sử dụng sandbox để ngăn trình duyệt k đáng tin cậy 
                        -> sử dụng để loại sandbox lấy content
                + "ignoreHTTPSErrors" : true 
                        -> bỏ qua các lỗi bảo mật
            + log ("khong tao duoc : " + error)
        + return startBrowser 


+  scrapeController 
    + const scrapeController = async(browserInstance) => {
        try{
            let browser = await browserInstance 
        }catch(e){
            log("lỗi ở controller" + e)
        }
    }
    + export ...

+ index 
    + import startBrowser && scrapeController
    + let browser = startBrowser
    + scrapeController(browser)

+ scaper.js
    + const scrapeCategory = (browser, url) => new Promise(resolve , reject) => {...}
        + try{...}catch(error){...}
            + let page = await browser.newPage()
                    -> mở trình duyệt mới
            + await page.goto(url)
                    -> hàm lấy url
            + await page.waitforSelector("class || id")
                    -> chọn selctor
            + resolve()

            + log("lỗi ở scrape category: " +error)
            + reject(error)
    + export 

+ scrapeController
    + import scaper
            -> import lại hàm scaper
    + const url = "..."
            -> lấy url 
            -> vì ở scaper lấy 2 gtri 
    + try{...}
        + let categories = scrapers.scrapeCategory(browser , url)

        + const dataCategory = await page.$$eval("#navbar-menu > ul > li" , els =>{...} )
                --> lấy data trong dataCategory
            +  dataCategory = els.map(el => return{...} )
                + category : el.querySelector("a").innerText,
                + link : el.querySelector("a").href
            + return dataCategory

        + console.log(dataCategory)
        
        + await page.close()
                --> tắt trình duyệt

