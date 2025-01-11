import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Calendar } from "@/components/ui/calendar"
import { MapPin, Clock, Users, Hourglass } from 'lucide-react'
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export default function FilterBar() {
    const [date, setDate] = useState<Date>()
    const [location, setLocation] = useState<string>()
    const [participants, setParticipants] = useState<string>()
    const [duration, setDuration] = useState<string>()

    const locations = [
        "New York, NY",
        "Los Angeles, CA",
        "Chicago, IL",
        "Houston, TX",
        "Phoenix, AZ",
    ]

    const participantOptions = [
        "1-5 people",
        "6-10 people",
        "11-20 people",
        "21-50 people",
        "50+ people",
    ]

    const durationOptions = [
        "30 minutes",
        "1 hour",
        "2 hours",
        "Half day",
        "Full day",
    ]

    return (
        <div className="flex flex-col md:flex-row items-center justify-around mb-8 w-full max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                {/* Location Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className={cn(
                                "bg-white text-muted-foreground hover:bg-gray-50/50 h-16 px-6",
                                location && "text-foreground"
                            )}
                        >
                            <MapPin className="w-4 h-4 mr-2" />
                            {location || "Add Location"}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        {locations.map((loc) => (
                            <DropdownMenuItem
                                key={loc}
                                onClick={() => setLocation(loc)}
                            >
                                {loc}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Time Popover with Calendar */}
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className={cn(
                                "bg-white text-muted-foreground hover:bg-gray-50/50 h-16 px-6",
                                date && "text-foreground"
                            )}
                        >
                            <Clock className="w-4 h-4 mr-2" />
                            {date ? format(date, "PPP") : "Add Time"}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>

                {/* Participants Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className={cn(
                                "bg-white text-muted-foreground hover:bg-gray-50/50 h-16 px-6",
                                participants && "text-foreground"
                            )}
                        >
                            <Users className="w-4 h-4 mr-2" />
                            {participants || "Participants"}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        {participantOptions.map((option) => (
                            <DropdownMenuItem
                                key={option}
                                onClick={() => setParticipants(option)}
                            >
                                {option}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Duration Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className={cn(
                                "bg-white text-muted-foreground hover:bg-gray-50/50 h-16 px-6",
                                duration && "text-foreground"
                            )}
                        >
                            <Hourglass className="w-4 h-4 mr-2" />
                            {duration || "Add Duration"}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        {durationOptions.map((option) => (
                            <DropdownMenuItem
                                key={option}
                                onClick={() => setDuration(option)}
                            >
                                {option}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

