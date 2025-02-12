// components/JobFilters.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useTransition } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function JobFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value && value !== "all") {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Input
        placeholder="Search jobs..."
        defaultValue={searchParams.get("search") ?? ""}
        onChange={(e) => {
          startTransition(() => {
            router.push(`?${createQueryString("search", e.target.value)}`);
          });
        }}
      />

      <Select
        defaultValue={searchParams.get("category") ?? "all"}
        onValueChange={(value) => {
          startTransition(() => {
            router.push(`?${createQueryString("category", value)}`);
          });
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="engineering">Engineering</SelectItem>
          <SelectItem value="design">Design</SelectItem>
          <SelectItem value="marketing">Marketing</SelectItem>
          <SelectItem value="sales">Sales</SelectItem>
        </SelectContent>
      </Select>

      <Select
        defaultValue={searchParams.get("location") ?? "all"}
        onValueChange={(value) => {
          startTransition(() => {
            router.push(`?${createQueryString("location", value)}`);
          });
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Locations</SelectItem>
          <SelectItem value="remote">Remote</SelectItem>
          <SelectItem value="onsite">Onsite</SelectItem>
          <SelectItem value="hybrid">Hybrid</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
