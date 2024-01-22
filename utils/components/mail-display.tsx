import { useEffect } from "react";

import addDays from "date-fns/addDays";
import addHours from "date-fns/addHours";
import format from "date-fns/format";
import nextSaturday from "date-fns/nextSaturday";
import { Archive, ArchiveX, Clock, Forward, MoreVertical, Reply, ReplyAll, Trash2, Mail as MailIcon, Phone } from "lucide-react";

import { DropdownMenuContent, DropdownMenuItem, DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Mail } from "../data";

interface MailDisplayProps {
    mail: Mail | null
}

export function MailDisplay({ mail }: MailDisplayProps) {

    const today = new Date();

    useEffect(() => {
        const container = document.getElementById('message-container'); // Thay 'yourContainerId' bằng id của container

        if (container) {
            container.scrollTop = container.scrollHeight;
        };
    }, [mail]);

    return (
        <div className="flex h-full flex-col">
            <div className="flex w-full">
                <div className="flex flex-col border-r border-rgb(226,232,241) w-[70%]">
                    <div className="flex items-center p-[6px]">
                        <div className="flex items-center gap-2">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" disabled={!mail}>
                                        <Archive className="h-4 w-4" />
                                        <span className="sr-only">Archive</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Archive</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" disabled={!mail}>
                                        <ArchiveX className="h-4 w-4" />
                                        <span className="sr-only">Move to junk</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Move to junk</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" disabled={!mail}>
                                        <Trash2 className="h-4 w-4" />
                                        <span className="sr-only">Move to trash</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Move to trash</TooltipContent>
                            </Tooltip>
                            <Separator orientation="vertical" className="mx-1 h-6" />
                            <Tooltip>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <TooltipTrigger asChild>
                                            <Button variant="ghost" size="icon" disabled={!mail}>
                                                <Clock className="h-4 w-4" />
                                                <span className="sr-only">Snooze</span>
                                            </Button>
                                        </TooltipTrigger>
                                    </PopoverTrigger>
                                    <PopoverContent className="flex w-[535px] p-0">
                                        <div className="flex flex-col gap-2 border-r px-2 py-4">
                                            <div className="px-4 text-sm font-medium">Snooze until</div>
                                            <div className="grid min-w-[250px] gap-1">
                                                <Button
                                                    variant="ghost"
                                                    className="justify-start font-normal"
                                                >
                                                    Later today{" "}
                                                    <span className="ml-auto text-muted-foreground">
                                                        {/* {format(addHours(today, 4), "E, h:m b")} */}
                                                    </span>
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    className="justify-start font-normal"
                                                >
                                                    Tomorrow
                                                    <span className="ml-auto text-muted-foreground">
                                                        {/* {format(addDays(today, 1), "E, h:m b")} */}
                                                    </span>
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    className="justify-start font-normal"
                                                >
                                                    This weekend
                                                    <span className="ml-auto text-muted-foreground">
                                                        {/* {format(nextSaturday(today), "E, h:m b")} */}
                                                    </span>
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    className="justify-start font-normal"
                                                >
                                                    Next week
                                                    <span className="ml-auto text-muted-foreground">
                                                        {/* {format(addDays(today, 7), "E, h:m b")} */}
                                                    </span>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="p-2"> <Calendar /> </div>
                                    </PopoverContent>
                                </Popover>
                                <TooltipContent>Snooze</TooltipContent>
                            </Tooltip>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" disabled={!mail}>
                                        <Reply className="h-4 w-4" />
                                        <span className="sr-only">Reply</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Reply</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" disabled={!mail}>
                                        <ReplyAll className="h-4 w-4" />
                                        <span className="sr-only">Reply all</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Reply all</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" disabled={!mail}>
                                        <Forward className="h-4 w-4" />
                                        <span className="sr-only">Forward</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Forward</TooltipContent>
                            </Tooltip>
                        </div>
                        <Separator orientation="vertical" className="mx-2 h-6" />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" disabled={!mail}>
                                    <MoreVertical className="h-4 w-4" />
                                    <span className="sr-only">More</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Mark as unread</DropdownMenuItem>
                                <DropdownMenuItem>Star thread</DropdownMenuItem>
                                <DropdownMenuItem>Add label</DropdownMenuItem>
                                <DropdownMenuItem>Mute thread</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <Separator />
                    {mail ? (
                        <div className="flex flex-col">
                            <div id="message-container" className="flex flex-col sticky bottom-0 gap-2 items-start p-4 overflow-y-auto" style={{height: 'calc(100vh - 210px)'}}>
                                {mail.message?.map((item, index) => {
                                    return (
                                        <div key={`mail-mess-${index}`} className={`flex w-full items-center gap-2 text-sm ${item.senderId === 1 ? 'justify-end' : 'justify-start'}`}>
                                            {item.senderId === 1 && (
                                                <div className="p-2 bg-[rgb(43,97,255)] text-white rounded-xl max-w-60">{item.message}</div>
                                            )}
                                            <Avatar>
                                                <AvatarFallback>
                                                    {item.name
                                                        .split(" ")
                                                        .map((chunk) => chunk[0])
                                                        .join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            {item.senderId === 2 && (
                                                <div className="p-2 bg-[rgb(63,64,65)] text-white rounded-xl max-w-60">{item.message}</div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                            <Separator className="mt-auto" />
                            <div className="p-4">
                                <form>
                                    <div className="grid gap-4">
                                        <Textarea
                                            className="p-4"
                                            placeholder={`Reply ${mail.name}...`}
                                        />
                                        <div className="flex items-center">
                                            <Label
                                                htmlFor="mute"
                                                className="flex items-center gap-2 text-xs font-normal"
                                            >
                                                <Switch id="mute" aria-label="Mute thread" /> Mute this thread
                                            </Label>
                                            <Button
                                                onClick={(e) => e.preventDefault()}
                                                size="sm"
                                                className="ml-auto"
                                            >
                                                Send
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className="p-8 text-center text-muted-foreground">
                            No message selected
                        </div>
                    )}
                </div>
                <div className="w-[30%]">
                    {mail && (
                        <div className="flex flex-col">
                            <div className="h-[53px] flex items-center px-4 font-semibold tracking-wide border-b border-[rgb(226,232,241)]">Profile</div>
                            <div className="flex flex-col items-center gap-2 p-2 border-b border-[rgb(226,232,241)]">
                                {!mail.avt && (
                                    <Avatar className="w-[80%] h-[193px] text-2xl">
                                        <AvatarFallback>
                                            {mail.name.split(" ").map((chunk) => chunk[0]).join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                )}
                                {mail.avt && (
                                    <Avatar className="w-[80%] h-[193px] text-2xl">
                                        <AvatarImage src={mail.avt}/>
                                    </Avatar>
                                )}
                                <div className="text-xl font-bold tracking-wider">{mail.name}</div>
                            </div>
                            <div className="p-2">
                                <div className="text-sm font-semibold mb-5">Contact information</div>
                                {mail.email && (
                                    <div className="flex items-center text-xs gap-3 mb-3">
                                        <MailIcon className="w-[18px]"/>
                                        <div className="flex flex-col">
                                            <div className="font-medium">Email Address</div>
                                            <div className="text-blue-400">{mail.email}</div>
                                        </div>
                                    </div>
                                )}
                                {mail.phone && (
                                    <div className="flex items-center text-xs gap-3">
                                        <Phone className="w-[18px]"/>
                                        <div className="flex flex-col">
                                            <div className="font-medium">Email Address</div>
                                            <div className="text-blue-400">{mail.phone}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};
