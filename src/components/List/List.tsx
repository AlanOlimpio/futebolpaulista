import { ReactNode } from "react";
import { ContentList, WrapperTitleList } from "./ListStyles";
import ModalRegister from "../ModalRegister";

interface TitleProps {
  title: string;
  children: ReactNode;
}

function List({ title, children }: TitleProps) {
  return (
    <>
      <WrapperTitleList>
        <h2>{title}</h2>
        <ModalRegister />
      </WrapperTitleList>
      <ContentList>{children}</ContentList>
    </>
  );
}
export default List;
