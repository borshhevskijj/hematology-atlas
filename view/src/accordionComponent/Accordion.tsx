import React, { useState, useRef, useEffect } from "react";
// import { DisplayBloodCells, IBloodCell } from '../displayBloodCells/DisplayBloodCells';
import { IBloodCell } from "../HematopoiesisComponent/HematopoiesisType";
import AccordionContent from "./AccordionContent";
import cl from "./accordion.module.css";
import minusIcon from "./minus.svg";
import plusIcon from "./plus.svg";

export interface Props {
  data: IBloodCell;
}

const Accordion: React.FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      contentRef.current.style.maxHeight = isOpen ? `${contentHeight}px` : "0";
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {data && Object.keys(data).length && (
        <div className={cl.accordion} onClick={() => toggleAccordion()}>
          <div className={cl.accordionHeader}>
            <h2>{data.name}</h2>
            <div>
              <img src={isOpen ? minusIcon : plusIcon} alt="" />
            </div>
          </div>
          <div className={`${cl.accordionContent} ${isOpen ? cl.open : ""}`} ref={contentRef}>
            <AccordionContent data={data} />
          </div>
        </div>
      )}
    </>
  );
};

export default Accordion;
