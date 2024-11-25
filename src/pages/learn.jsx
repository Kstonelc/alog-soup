import DefaultLayout from "@/layouts/default.jsx";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Calendar,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import {
  IoArrowForward,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";

import ProTable from "@/components/common/ProTable.jsx";

export default function Learn() {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <div className={"flex flex-row"}>
        <div className={"flex-1 flex-col"}>
          <div className={"flex justify-between mb-5"}>
            <span className={"text-xl font-bold mb-5"}>基础数据结构和算法</span>
            <div className="flex flex-wrap gap-2">
              <Button isIconOnly variant="solid">
                <IoChevronBack />
              </Button>
              <Button isIconOnly variant="solid">
                <IoChevronForward />
              </Button>
            </div>
          </div>
          <div className={"flex flex-row gap-8 mb-10"}>
            <Card className="max-w-[300px]">
              <CardHeader className="flex justify-between">
                <div className="flex flex-row items-center">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                  />
                  <p className="text-md ml-2">链表</p>
                </div>
                <Button
                  isIconOnly
                  radius={"full"}
                  variant="solid"
                  onClick={() => {
                    navigate("/algo-panel");
                  }}
                >
                  <IoArrowForward />
                </Button>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>链表是一种 线性数据结构，由一系列节点（Node）组成</p>
              </CardBody>
            </Card>
            <Card className="max-w-[300px]">
              <CardHeader className="flex justify-between">
                <div className="flex flex-row items-center">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                  />
                  <p className="text-md ml-2">数组</p>
                </div>
                <Button isIconOnly radius={"full"} variant="solid">
                  <IoArrowForward />
                </Button>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  数组的本质是一个有序列表,
                  可以通过索引（Index）快速访问其中的元素
                </p>
              </CardBody>
            </Card>
          </div>
          <div className={"flex justify-between mb-5"}>
            <span className={"text-xl font-bold "}>题库</span>
          </div>
          <ProTable />
        </div>
        <div className={"ml-4"}>
          <Calendar aria-label="Date (International Calendar)" />
        </div>
      </div>
    </DefaultLayout>
  );
}
