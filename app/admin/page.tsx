"use client";
import dynamic from "next/dynamic";
import SkeletonAdmin from "@/components/skeletons/skeletonAdmin";
const Admin = dynamic(() => import("@/components/admin"), {
  ssr: false,
  loading: () => <SkeletonAdmin />,
});
function AdminPage() {
  return <Admin />;
}

export default AdminPage;
