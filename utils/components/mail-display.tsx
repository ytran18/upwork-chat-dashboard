import { useEffect, useState } from "react";

import { MoreVertical, Mail as MailIcon, Phone, ArrowLeft } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Mail } from "../data";

interface MailDisplayProps {
    mail: Mail | null,
    width: number,
    handleSelectChat: () => void
}

export function MailDisplay({ mail, width, handleSelectChat }: MailDisplayProps) {

    const [state, setState] = useState({
        isShowProfile: true,
    });

    useEffect(() => {
        const container = document.getElementById('message-container'); // Thay 'yourContainerId' bằng id của container

        if (container) {
            container.scrollTop = container.scrollHeight;
        };
    }, [mail]);

    return (
        <div className="flex h-full flex-col">
            <div className="flex w-full">
                <div className={`flex flex-col ${(state.isShowProfile && width > 1024) ? 'w-[65%] border-r border-rgb(226,232,241)' : 'w-full'}`}>
                    <div className="flex items-center justify-between md:justify-end p-[6px]">
                        <div className="flex items-center gap-2">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button onClick={handleSelectChat} className="flex md:hidden" variant="ghost" size="icon" disabled={!mail}>
                                        <ArrowLeft className="h-4 w-4" />
                                        <span className="sr-only">Archive</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Back</TooltipContent>
                            </Tooltip>
                        </div>
                        <Button onClick={() => setState(prev => ({...prev, isShowProfile: !prev.isShowProfile}))} variant="ghost" size="icon" disabled={!mail}>
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">More</span>
                        </Button>
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
                {state.isShowProfile && (
                    <div className="w-[35%] hidden lg:block">
                        {mail && (
                            <div className="flex flex-col w-full">
                                <div className="h-[53px] flex items-center px-4 font-semibold tracking-wide border-b border-[rgb(226,232,241)]">Profile</div>
                                <div className="flex flex-col items-center gap-2 p-2 border-b border-[rgb(226,232,241)]">
                                    {!mail.avt && (
                                        <Avatar className="w-[180px] h-[180px] text-2xl">
                                            <AvatarFallback>
                                                {mail.name.split(" ").map((chunk) => chunk[0]).join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                    )}
                                    {mail.avt && (
                                        <Avatar className="w-[180px] h-[180px] text-2xl">
                                            <AvatarImage src={mail.avt}/>
                                        </Avatar>
                                    )}
                                    <div className="text-xl font-bold tracking-wider">{mail.name}</div>
                                </div>
                                <div className="p-6 w-full">
                                    <div className="text-sm font-semibold mb-5">Contact information</div>
                                    {mail.email && (
                                        <div className="flex w-full items-center text-xs gap-3 mb-3">
                                            <MailIcon className="w-[18px]"/>
                                            <div className="flex flex-col">
                                                <div className="font-medium">Email Address</div>
                                                <div className="text-blue-400 truncate w-full">{mail.email}</div>
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
                )}
            </div>
        </div>
    )
};
