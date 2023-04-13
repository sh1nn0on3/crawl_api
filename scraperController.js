const scrapeController = async (browserInstance) => {
  const url = "https://phongtro123.com/";
  try {
    let browser = await browserInstance;
    console.log(
      "🚀 ~ file: scraperController.js:7 ~ scrapeController ~ browser:",
      browser
    );
    // gọi hàm cạo ở file scrape
    let categories = scrapeCategory(browser, url);
  } catch (error) {
    console.log("lỗi ở controller " + error);
  }
};

export default scrapeController;
