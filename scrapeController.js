const scrapers = require('./scrape')

const scrapeController = async (browserInstance) => {
    const url = 'https://phongtro123.com/'
    try {
        let browser = await browserInstance
        // gọi hàm cạo ở file s scrape
        const categories = await scrapers.scrapeCategory(browser, url)
        
    } catch (e) {
        console.log('Lỗi ở scrape controller: ' + e);
    }
}

module.exports = scrapeController