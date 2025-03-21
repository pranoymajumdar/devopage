import { Profile } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

const fetchProfile = async (): Promise<Profile> => {
  const res = await fetch("/api/profile");
  if (!res.ok) throw new Error("Failed to fetch profile.");
  return res.json();
};

export const useProfile = () => {
  return useQuery<Profile>({
    queryKey: ["profile"],
    queryFn: fetchProfile,
    staleTime: 1000 * 60 * 5,
  });
};
