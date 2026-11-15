import { Clock, Grid2x2, Layers, Monitor, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import type { ServiceIcon } from "@/lib/site";

export const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  window: Grid2x2,
  stairs: Layers,
  office: Monitor,
};

export const promiseIcons: Record<"quality" | "team" | "speed", LucideIcon> = {
  quality: ShieldCheck,
  team: Users,
  speed: Clock,
};
