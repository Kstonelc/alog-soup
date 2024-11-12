import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { IoMdReturnRight } from "react-icons/io";

import { siteConfig } from "@/config/site.js";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons.jsx";
import DefaultLayout from "@/layouts/default.jsx";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>让算法更直观 更易懂</span>
          <div className={subtitle({ class: "mt-12" })}>
            从代码到视觉，让算法走出抽象，进入现实
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            <IoMdReturnRight></IoMdReturnRight>
            从这里开始
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        {/*<div className="mt-8">*/}
        {/*  <Snippet hideCopyButton hideSymbol variant="bordered">*/}
        {/*    <span>*/}
        {/*      Get started by editing{" "}*/}
        {/*      <Code color="primary">pages/index.tsx</Code>*/}
        {/*    </span>*/}
        {/*  </Snippet>*/}
        {/*</div>*/}
      </section>
    </DefaultLayout>
  );
}
