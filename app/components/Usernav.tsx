import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

export function Usernav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                    <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcDBAUBAv/EADwQAAICAQIDBgIHAw0AAAAAAAABAgMEBREGITESE0FRYZFxgSIjMlKhwdEUsbIVJTNCQ1NUYmNyc8Lh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwC0gAaZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8bSTcnsl1bObres0aTSnNdu+a+rqT5v1fkiCalqmXqVjlk3ScPCpcoR+CBqwLNX02uXZlm0J+P09zYxsrGyueNfXb/ALJplVHsJShJShJxkukk9mvmU1bQIZofFVlUo0anJ2VPl3z+1H4+a9SZRlGcVKLTTSaae6a8yD0AAAAAAAAAAAAAAAAAADBm5VeFiW5N32Ko9p+voZyL8dZThjY+LH+0k5y9VHp+LAimfl252VZk3vec38kvJGuAaiAAAEv4M1VtvTb5btJunn5dV+fuRAzYeRLEy6ciHWqal7dfw3Iq1QeRkpRjKP2ZLdfA9IAAAAAAAAAAAAAAAABCeO9/5Rx14Krl7smxD+PamrsS19HGUN/VPf8AMCKAA1EAAAAPYpykkubb2SIq0tO3/k/G7XXuo7+yNg+KK+6oqr+5BR9kfZAAAAAAAAAAAAAAAAAORxVgyztJmq1vbS+9gvPbfdezOuAKkT36Ak/EnDs6bJ5eBX26Zc51RXOD80vL9xGPX12KAAGmB1uGMF52rVbr6qhq2x/DovmzSwMHI1C9U4tXblvs34R+L8CwtF0urSsRVQfbslzss227T/Qg6AAAAAAAAAAAAAAAAAAAAAAntzRoZuj6fmtyyMWuU31siuzL3QztY0/Be2RkwU/uR+lL2RxsjjPHTf7Ph3WeTskor25gbUuEtMb3j36XpP8A8MtPC+lVtOVM7GvCyba9jjPjS/flg1bf8jMlfGsuXfYEWv8AJbz/ABQNSuimvHr7qiuFda6QhHZI+zhYvFem37RtduPL/UjuvdHapuqvgp02Qsg+kovdAfYAAAAAAAAAAAAAAAABz9a1WnSsXvLNpWy5V1+Mn+gGXUdRxtNo73Jmlv8AZiubk/QhGqcSZudJwql+z0fcg+b+LObm5l+dkyyMqxzsl7JeS8kYAD5/PqACoAAobIz4uXkYc+8xLZVS6/RfX4rxMAAmuicU15LjTqCjVa9krFyhL9CTFSEl4Z4hljShh51jeO+Vc5P+j9Ph+4yqbAAAAAAAAAAAAAMeRfXjUWXXS7NcF2pP0K01bULdTzJ5Nu6W20I/dj4IkfHGe1CrArlyl9Zbt+C/P5EQAAAsSgAKAAAAAAOr2AIJrwfq7yKf2HIk3bVHety/rR8viiTFVYeTZh5VWTS9p1y7S9fT59PmWjj3QyKK762nCyKkvmRWQAAAAAAAAegMOXb3GLfd/d1Sl7LcCt9bynmark3b7pzcY+iXJGkF05834gsSgAKAAAAAAAAAAAE74KyXdpbpk93RNx5+T5r8yCEn4Dtay8unwlUp+z2/7EVNAAQAAAAAA0tae2j5zX+Hn/CABWK6AAsQABQAAAAAAAAAAAkHA7/nmxeePL+KIBKJ2ACNAACP/9k=" 
                    alt="user image" 
                    className="rounded-full h-8 w-8 hidden lg:block"/>



                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuItem>Register</DropdownMenuItem>
                <DropdownMenuItem>login</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}