# Package : react-calendar

Source Office Project : [projects.wojtekmaj.pl](https://projects.wojtekmaj.pl/react-calendar/), ([https://github.com/wojtekmaj/react-calendar](https://github.com/wojtekmaj/react-calendar))

นำเข้าโดยการเพิ่ม `import Calendar from 'react-calendar'`

ใช้โดยการเพิ่ม Component `<Calendar />` ใช้ `onChangeprop` เพื่อรับค่าใหม่

ตัวอย่างการใช้งานพื้นฐาน :

```JavaScript
import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyApp() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
```

NOTE : *หากคุณต้องการใช้รูปแบบ react-calendar เริ่มต้นเพื่อสร้างขึ้น คุณสามารถนำเข้ารูปแบบของ react-calendar ได้โดยใช้ :*

```JavaScript
import 'react-calendar/dist/Calendar.css';
```
