const { Client } = require("@notionhq/client")

const notion = new Client({ auth: process.env["NOTIONAPIKEY"] })

const databaseId = process.env["NOTIONDB"]

const pageId = process.env["NOTIONPAGEID"]

class NotionService{

  async addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

async readPage() {
  const response = await notion.pages.retrieve({ page_id: pageId });
  console.log(response);
};
  
}

const NotionInstance = new NotionService;

module.exports = NotionInstance;