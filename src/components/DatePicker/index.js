import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useAtom } from 'jotai';

export default function CustomDatePicker(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={props.label}
        className="block w-full border-jade rounded-lg px-9 py-4 leading-none font-body text bg-jade/[.15] focus:bg-white focus:dark:bg-dark_grey text-black/[.6]focus:text-black  focus:ring-solid focus:ring-4 focus:ring-jade dark:focus:ring-dark_jade ring-inset ease-in duration-100 focus:outline-none peer text-black dark:text-dark_white"
        onChange={props.onChange}
      />
    </LocalizationProvider>
  );
}
