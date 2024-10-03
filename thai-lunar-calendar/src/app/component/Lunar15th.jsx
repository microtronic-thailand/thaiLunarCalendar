"use client"

import React, { useState } from 'react';
import { format } from 'date-fns';
import { enUS, th } from 'date-fns/locale'; // นำเข้า locale สำหรับภาษาไทย

function Lunar15th() {
    const today = new Date();

    // คำนวณปีพุทธศักราช
    const buddhistYear = today.getFullYear() + 543;

    // จัดรูปแบบวันที่และเวลา โดยแสดงวันในสัปดาห์เป็นภาษาไทย
    const formattedDateTime = format(today, "EEEE dd MMMM yyyy (พ.ศ. yyyy) HH:mm:ss", { locale: th });

    return (
        <div>
            <p>วันนี้เป็นวัน {formattedDateTime}</p>
        </div>
    );
}

export default Lunar15th;