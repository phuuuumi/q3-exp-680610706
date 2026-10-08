import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    // <div className="flex-1 p-4">
    //   <button className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
    //     Phumiphat Thanoi
    //   </button>
    // </div>
    <Drawer swipeDirection="left">
      <DrawerTrigger render={<Button/>}>Phumiphat Thanoi</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>student information</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <Card>
            <CardContent className="flex flex-col gap-5 p-0">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="https://picsum.photos/1000/800?grayscale&random=52"
                  alt="16:9"
                  width={1000}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col  gap-4 p-6 pt-0">
                <h2 className="text-xl">Phumiphat Thanoi</h2>
                <p className="text-foreground  text-sm">
                  นักศึกษาวิศวกรรมคอมพิวเตอร์ปีที่2 มหาวิทยาลัยเชียงใหม่
                </p>
                <span className="flex gap-2">
                  <Badge>Hobbies</Badge> <p>เล่นเกม</p>
                </span>
                <span  className="flex gap-2">
                  <Badge>Email</Badge> <p>phumiphat_th@cmu.ac.th</p>
                </span >
                <span  className="flex gap-2">
                  <Badge>Social</Badge> <p>FB:Phumiphat Thanoi</p>
                </span>
              </div>
            </CardContent>
            <CardFooter>
              รหัสนักศึกษา 680610706
            </CardFooter>
          </Card>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
