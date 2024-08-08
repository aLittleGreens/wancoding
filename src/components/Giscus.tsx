import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

  

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="aLittleGreens/wancoding" // 需要修改
      repoId="R_kgDOMfw_nA" // 需要修改
      category="General"
      categoryId="DIC_kwDOMfw_nM4Cheoh" // 需要修改
      mapping="title"
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={colorMode}
      lang="en"
      loading="lazy"
    />
  );
}