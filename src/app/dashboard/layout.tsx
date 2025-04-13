import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ChartNoAxesCombined, Database, FileText, Users } from "lucide-react";
import Link from "next/link";

const navigationList = [
  {
    title: "Overview",
    path: "/dashboard",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Transactions",
    path: "/dashboard/transactions",
    icon: Database,
  },
  {
    title: "Invoices",
    path: "/dashboard/invoices",
    icon: FileText,
  },
  {
    title: "Customers",
    path: "/dashboard/customers",
    icon: Users,
  },
];

export default function DashboardLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigationList.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild>
                      <Link href={item.path}>
                        <item.icon className="size-4" />
                        <span className="font-medium text-sm">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <main className="flex gap-x-2 p-2">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
