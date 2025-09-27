import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type DateValue = Date | undefined;

interface PickupCalendarProps {
  initialDate?: Date;
  onDateChange?: (date: DateValue) => void;
  placeHolder?: String;
}

const PickupCalendar = ({ initialDate, onDateChange, placeHolder }: PickupCalendarProps) => {
  const [date, setDate] = useState<DateValue>(initialDate);
  const [isOpen, setIsOpen] = useState(false);

  const handleDateSelect = (newDate: DateValue) => {
    setDate(newDate); setIsOpen(false);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "pl-3 text-left font-normal",
          )}
        >
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          {date ? (
            // Muestra la fecha formateada si existe
            format(date, "PPP")
          ) : (
            <p className="font-semibold">{placeHolder}</p>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect} // Usamos nuestra función simplificada
          disabled={(calendarDate) =>
            // ⭐️ Mantuvimos la lógica de deshabilitar fechas pasadas y futuras muy lejanas
            calendarDate > new Date() || calendarDate < new Date("1900-01-01")
          }
          captionLayout="dropdown"
        />
      </PopoverContent>
    </Popover>
  );
};

export default PickupCalendar;