import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function RightSidebar() {
  return (
    <section className="lg:flex hidden w-[400px]">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl">Who to follow</CardTitle>
        </CardHeader>
        <CardContent>
          
        </CardContent>
      </Card>
    </section>
  )
}
