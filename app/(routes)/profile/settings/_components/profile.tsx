"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { useSession } from "@/lib/auth-client";

export const ProfileTab = () => {
  const { data: session } = useSession();
  if (!session) return null;
  return (
    <TabsContent value="profile" className="mt-4">
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>
            Update your profile information visible to other developers on the platform.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex flex-col items-center gap-3 rounded-lg md:items-start">
              <h2 className="text-lg font-normal md:font-medium">Profile Photo</h2>
              <Avatar className="h-20 w-20">
                <AvatarImage src={session.user.image || ""} alt={session.user.name} />
                <AvatarFallback>{session.user.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-muted-foreground text-sm">Click to upload a new photo</span>
            </div>
            <div className=""></div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
