import { redirect } from "next/navigation";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import UserDashboard from "@/components/dashboard/UserDashboard";
import { getCurrentUser } from "@/lib/auth";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  if (user.role === "admin" || user.role === "core") {
    return <AdminDashboard user={user} />;
  }

  return <UserDashboard user={user} />;
}