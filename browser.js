import puppeteer from "puppeteer";

const startBrowser = async () => {
  let browser;
  try {
    browser = await puppeteer.launch({
      // hiển thị ui trình duyệt
      headless: true,
      // loại bỏ sandbox
      args: ["--disable-setuid-sandbox"],
      // bỏ qua các lỗi bảo mật
      ignoreHTTPSErrors: true,
    });
    console.log("🚀 ~ file: browser.js:14 ~ startBrowser ~ browser:", browser);
  } catch (error) {
    console.log("khong tao duoc o browser" + error);
  }
  return browser;
};
// console.log("🚀 ~ file: browser.js:20 ~ startBrowser ~ browser:", browser)

export default startBrowser;
