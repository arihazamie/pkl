"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DatePickerProps {
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ date, onDateChange }) => {
  const [dateData, setDateData] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal text-Headline rounded-xl",
            !date && "text-muted-foreground"
          )}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="flex w-auto flex-col space-y-2 p-2 text-white bg-Background">
        <Select
          onValueChange={(value) =>
            setDateData(addDays(new Date(), parseInt(value)))
          }>
          <SelectTrigger className="rounded-xl">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent
            position="popper"
            className="rounded-xl text-white bg-Background">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">In a Day</SelectItem>
            <SelectItem value="-7">In a Week</SelectItem>
            <SelectItem value="30">In a Month</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-xl border">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => {
              setDateData(newDate);
              onDateChange(newDate);
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
