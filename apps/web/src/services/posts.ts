import type { TCreatePostSchema, TDeletePostSchema } from "@devopage/shared";
import type { TNewPost, TPost } from "@server/db/schema";
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

const POSTS_QUERY_KEY = ["posts"] as const;

export function usePosts() {
  return useSuspenseQuery({
    queryKey: POSTS_QUERY_KEY,
    queryFn: async () => {
      const res = await api.get<TPost[]>("/api/posts/all");
      return res.data;
    },
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ values }: { values: TCreatePostSchema }) => {
      const res = await api.post<TNewPost>("/api/posts", values);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: POSTS_QUERY_KEY,
      });
    },
  });
}

export function useDeletePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ values }: { values: TDeletePostSchema }) => {
      const res = await api.delete<string>("/api/posts", {
        data: values,
      });

      return res.data;
    },

    onSuccess: (_, { values }) => {
      queryClient.setQueryData<TPost[]>(POSTS_QUERY_KEY, (oldData) => {
        return oldData ? oldData.filter((post) => post.id !== values.postId) : [];
      });
    },
  });
}
