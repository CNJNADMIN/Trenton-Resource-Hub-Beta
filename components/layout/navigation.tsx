"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  UserPenIcon,
  ListChecks,
  BookOpenCheck,
  FileQuestion,
  Lightbulb,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavGroup } from "@/type/navigation";

const navLinks: NavGroup[] = [
  {
    title: "",
    url: "#",
    items: [
      {
        title: "Home",
        url: "/",
        icon: HomeIcon,
      },
      {
        title: "Studio Guide",
        url: "/studio-guide",
        icon: BookOpenCheck,
      },
      {
        title: "Creator Resources",
        url: "/creator-resources",
        icon: Lightbulb,
      },
      {
        title: "Contact",
        url: "/contact",
        icon: UserPenIcon,
      },
    ],
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const replacedPathname = pathname.split("/").filter(Boolean)[0];

  return (
    <Sidebar className="!border-e-0 p-3">
      <SidebarHeader className="mb-4">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center space-x-4">
            <Avatar className="size-12">
              <AvatarImage
                className="rounded-full w-full h-full object-cover"
                src="/images/cnjn-logo.png"
              />
              <AvatarFallback>CNJN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 leading-none">
              <span className="font-semibold">Studio Resource Hub</span>
              <span className="text-sm">Trenton</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="space-y-4">
          {navLinks.map((item) => (
            <>
              {item.title ? (
                <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              ) : null}
              <SidebarGroupContent>
                <SidebarMenu>
                  {item?.items &&
                    item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          className="text-base rounded-2xl px-3 h-auto data-[active=true]:bg-background data-[active=true]:!font-semibold"
                          isActive={
                            (item.url === "/" &&
                              replacedPathname === undefined) ||
                            item.url.replace("/", "") === replacedPathname
                          }
                        >
                          <Link href={item.url} target={item.target}>
                            {item.icon && <item.icon className="!size-5" />}
                            {item.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
