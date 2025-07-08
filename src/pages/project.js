"use client";
import { useSearchParams } from "next/navigation";
import ProjectDesc from "@/sections/project_desc";
import ProjectImg from "@/sections/project_img";
import Chat from "@/sections/chat";
import Profile from "@/sections/profile";

export default function Project() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen px-[40px]">
      <div className="flex flex-col md:flex-row justify-between">
        <Profile />
        <ProjectDesc projectId={projectId} />
        <Chat />
      </div>
      <ProjectImg projectId={projectId} />
    </div>
  );
}
