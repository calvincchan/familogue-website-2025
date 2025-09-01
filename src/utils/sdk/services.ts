import { ServiceRecord } from "@/types";


export async function getServices(locale): Promise<ServiceRecord[]> {
  if (locale === "zh") {
    return [
      {
        "title": "中文互動讀寫班",
        "content": "讀寫班課程以螺絲式分級閱讀教學方式，帶領小朋友由淺入深累積識字量，開心學中文。配合有趣繪本丶延伸活動互動教學，提升書面語閱讀能力，陪養孩子自主閱讀。"
      },
      {
        "title": "互動中文故事小教室",
        "content": "「小教室」舉辦為時60分鐘的互動語境活動，包括故事分享丶語文遊戲丶中文識字等沉浸式學習中文環節。因應時節，設計生活化主題內容，讓小朋友學習日常生活的中文用語。"
      }
    ];
  } else if (locale === "en") {
    return [
      {
        "title": "Interactive Chinese Literacy Class",
        "content": "These levelled literacy classes use a spiral reading approach to help children gradually build character recognition while enjoying Chinese learning. Engaging picture books and interactive activities enhance formal reading skills and foster independent reading habits."
      },
      {
        "title": "Language Experience Zone",
        "content": "These 60-minute immersive sessions include storytelling, language games, and character learning. Themed around everyday life and seasonal topics, they help children learn practical Cantonese expressions."
      }
    ];
  } else {
    return [];
  }
}