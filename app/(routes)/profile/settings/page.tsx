import { LogOutIcon, LucideBell, LucidePalette, LucideShield, LucideUser } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { AppearanceTab } from "./_components/appearance";
import { ProfileTab } from "./_components/profile";

const SettingsPage = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-x-2">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, doloremque.
          </p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="bg-secondary dark:bg-secondary/20 mx-auto w-full lg:mx-0 lg:w-[450px]">
          <TabsTrigger value="profile">
            <LucideUser size={16} className="-ms-0.5 me-1.5 opacity-60" />
            <span className="hidden md:inline-block">Profile</span>
          </TabsTrigger>
          <TabsTrigger value="privacy">
            <LucideShield size={16} className="-ms-0.5 me-1.5 opacity-60" />
            <span className="hidden md:inline-block">Privacy</span>
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <LucideBell size={16} className="-ms-0.5 me-1.5 opacity-60" />
            <span className="hidden md:inline-block">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="appearance">
            <LucidePalette size={16} className="-ms-0.5 me-1.5 opacity-60" />
            <span className="hidden md:inline-block">Appearance</span>
          </TabsTrigger>
        </TabsList>
        <ProfileTab />
        <TabsContent value="security" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Security settings content would go here</p>
              <Button variant="destructive" className="mt-4">
                <LogOutIcon className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how and when you want to be notified</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-500">Receive notifications via email</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Browser Notifications</h3>
                    <p className="text-sm text-gray-500">Receive notifications in browser</p>
                  </div>
                  <Switch />
                </div>

                <h3 className="pt-2 font-medium">Notification Types</h3>

                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Mentions</h3>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Comments on your posts</h3>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">New followers</h3>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Direct messages</h3>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">DevPage events</h3>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between pb-4">
                  <div>
                    <h3 className="font-medium">Weekly newsletter</h3>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline">Reset Defaults</Button>
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <AppearanceTab />
      </Tabs>
    </div>
  );
};

export default SettingsPage;
