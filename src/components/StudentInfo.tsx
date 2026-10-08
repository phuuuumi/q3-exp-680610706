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
      <DrawerTrigger render={<Button className="bg-blue-50 text-blue-700 hover:bg-blue-100"/>}>Phumiphat Thanoi</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>student information</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <Card>
            <CardContent className="flex flex-col gap-5 p-0">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/564585457_2021697801741043_8821260023939152011_n.jpg?stp=dst-jpg_tt6&cstp=mx828x828&ctp=s828x828&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7-GQtSY1sq8Q7kNvwGjwGAY&_nc_oc=AdqOl7E46wj7-HsgM0-Ny7UijqJtzOT3e2iLGSXDtPqXVNOY8iLDF_a-eaX5ggar0QI&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=F8yON6aSXmCEf9PD80hJBQ&_nc_ss=7b2a8&oh=00_AQP7e-vDRzSBe2YQGyNAY2XkfXY_rdoetyRwih__90VKOA&oe=6ACCD3DC"
                  alt="16:9"
                  width={1000}
                  height={800}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col  gap-4 p-6 pt-0">
                <h2 className="text-xl">Phumiphat Thanoi</h2>
                <p className="text-foreground  text-sm">
                  นักศึกษาวิศวกรรมคอมพิวเตอร์ปีที่ 2 มหาวิทยาลัยเชียงใหม่
                </p>
                <span className="flex gap-2">
                  <Badge className="bg-green-50 text-green-700">Hobbies</Badge> <p>เล่นเกม, เดินเล่น</p>
                </span>
                <span  className="flex gap-2">
                  <Badge className="bg-purple-50 text-purple-700">Email</Badge> <p>phumiphat_th@cmu.ac.th</p>
                </span >
                <span  className="flex gap-2">
                  <Badge className="bg-blue-50 text-blue-700">Social</Badge> <p>FB:Phumiphat Thanoi</p>
                </span>
              </div>
            </CardContent>
            <CardFooter>
              รหัสนักศึกษา 680610706
            </CardFooter>
          </Card>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
