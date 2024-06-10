const today = new Date();

const year = today.getFullYear();  // 年
const month = today.getMonth() + 1; // 月（
const date = today.getDate();      // 日付

const formattedDate = `${year}年${month}月${date}日`;

console.log(formattedDate); 
