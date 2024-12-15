import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function RightSidebar() {
  return (
    <section className="md:flex hidden md:w-[500px] lg:w-[700px]">
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
