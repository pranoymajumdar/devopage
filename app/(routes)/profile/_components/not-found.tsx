import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const UserNotFoundPage = () => {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md border shadow-lg">
        <CardHeader className="flex flex-col items-center space-y-2 pb-2">
          <div className="bg-secondary flex h-20 w-20 items-center justify-center rounded-full">
            <Search className="text-muted-foreground h-10 w-10" />
          </div>
          <CardTitle className="text-center text-2xl font-bold">User Not Found</CardTitle>
        </CardHeader>

        <CardContent className="text-center">
          <p className="text-muted-foreground mb-2">
            We couldn't find the developer profile you're looking for.
          </p>
          <p className="text-muted-foreground text-sm">
            The user may have changed their username or deleted their account.
          </p>
        </CardContent>

        <CardFooter className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
          <Button variant="default" className="w-full sm:w-auto">
            Go Home
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            Browse Developers
          </Button>
        </CardFooter>
      </Card>

      <div className="text-muted-foreground mt-8 text-center text-sm">
        <p>Looking for something else? Try searching in the navigation bar above.</p>
      </div>
    </div>
  );
};

export default UserNotFoundPage;
