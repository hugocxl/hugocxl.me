import { Client } from "@notionhq/client";

const handler = async (req, res) => {
  const { id, isWatched } = req.body;

  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.pages.update({
    ROOT_PAGE_ID: id,
    properties: {
      Watched: {
        checkbox: isWatched,
      },
    },
  });

  res.send(data);
};

export default handler;
