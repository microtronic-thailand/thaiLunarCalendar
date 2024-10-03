# thaiLunarCalendar
 โครงการปฏิทินจันทรคติไทย

โครงการนี้สร้างขึ้นโดยการช่วยเหลือจาก AI

## สิ่งที่ต้องทำ

- [ศึกษาหลักการคำนวณวันจันทรคติ](/src/reference/ThaiLunarCalendar.md)
- [เลือกใช้ React Framework](/src/framework.md) [NEXT.js](https://nextjs.org/) ([Next14](/thai-lunar-calendar/README.md))
  - Package : [date-fns](https://www.npmjs.com/package/date-fns) NPM : `npm install date-fns --save`
  - Package : [react-calendar](https://www.npmjs.com/package/react-calendar) NPM : `npm i react-calendar`
  - Package : [lunarphase-js](https://www.npmjs.com/package/lunarphase-js)  NPM : `npm i lunarphase-js`
  - [codesandbox](https://codesandbox.io/p/sandbox/react-calendar-lunar-calendar-forked-tpq9y7?workspaceId=aad51c82-9ff1-4445-99e1-0ac15ef39a39)

## เริ่มพัฒนา

GitHub Project : [https://github.com/microtronic-thailand/thaiLunarCalendar](https://github.com/microtronic-thailand/thaiLunarCalendar)

ใน Directory > thaiLunarCalendar ติดตั้ง node_module (`npm install`)

```bash
cd thai-lunar-calendar

npm run dev
```

เปิด browser ไปที่ [http://localhost:3000](http://localhost:3000)

สมมติว่าเราต้องการคำนวณวันขึ้น 15 ค้างเดือน (วันเพ็ญ) โดยประมาณ เราสามารถใช้หลักการที่ว่า 1 เดือนจันทรคติมีประมาณ 29.5 วัน แล้วนำมาคำนวณได้ดังนี้

```JavaScript
function calculateFullMoonDay(year) {
  // สมมติว่าเริ่มต้นปีด้วยวันขึ้น 1 ค่ำ
  const daysInLunarMonth = 29.5;
  const monthsInYear = 12;
  const totalDays = year * monthsInYear * daysInLunarMonth;
  const fullMoonDays = Math.floor(totalDays / 29.5);

  return fullMoonDays;
}

const year = 2023;
const fullMoonDay = calculateFullMoonDay(year);
console.log("วันเพ็ญในปี", year, "ประมาณวันที่", fullMoonDay);
```

โค้ดข้างต้นเป็นเพียงตัวอย่างง่ายๆ การคำนวณที่แม่นยำกว่านั้นจะต้องคำนวณปฏิทินจันทรคติอย่างละเอียด ซึ่งเกี่ยวข้องกับเรื่องราหูคาบเกี่ยว และปัจจัยอื่นๆ อีกมากมาย

## สิ่งที่ต้องทำเพิ่มเติม :

- ศึกษาข้อมูลเพิ่มเติม เกี่ยวกับ Libary [date-fns](https://date-fns.org/docs/Getting-Started), [react-calendar](/src/package_react-calendar.md)
- ศึกษาอัลกอริทึม : หาข้อมูลเกี่ยวกับอัลกอริทึมที่ใช้ในการคำนวณวันจันทรคติ เช่น อัลกอริทึมของท้องถิ่น หรืออัลกอริทึมที่ใช้ในภาษาบาลี
- ทดสอบ : ทดสอบโปรแกรมของคุณกับข้อมูลจริงเพื่อตรวจสอบความถูกต้อง

หากคุณต้องการความช่วยเหลือเพิ่มเติม

- บอกรายละเอียด : บอกให้ฉันทราบว่าคุณต้องการคำนวณอะไรบ้าง เช่น วันขึ้น 15 ค่ำ, วันพระใหญ่, หรือวันสำคัญทางศาสนา
- ระดับความรู้ : บอกระดับความรู้ด้านการเขียนโปรแกรมของคุณ

## คำถามเพิ่มเติม :

- คุณมีพื้นฐานการเขียนโปรแกรม JavaScript มากน้อยแค่ไหนคะ?
- คุณต้องการคำนวณวันจันทรคติเพื่อวัตถุประสงค์อะไรคะ?
- คุณมีข้อมูลเกี่ยวกับอัลกอริทึมที่ต้องการใช้บ้างไหมคะ?

## คำแนะนำ :

- เริ่มต้นจากสิ่งง่ายๆ : ลองเขียนโปรแกรมคำนวณวันขึ้น 15 ค่ำก่อน แล้วค่อยเพิ่มความซับซ้อนทีละขั้น
- หาข้อมูลเพิ่มเติม : ค้นหาข้อมูลเกี่ยวกับปฏิทินจันทรคติและอัลกอริทึมที่เกี่ยวข้อง
- ขอคำปรึกษา : ถามคำถามในฟอรัมหรือชุมชนนักพัฒนา

ขอให้สนุกกับการเขียนโปรแกรมนะคะ!
