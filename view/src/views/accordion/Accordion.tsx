import React, { useState, useRef, useEffect } from "react";
// import { DisplayBloodCells, IBloodCell } from '../displayBloodCells/DisplayBloodCells';
import { IBloodCell } from "../Hematopoiesis/HematopoiesisType";
// import AccordionContent from "./AccordionContent";
import cl from "./accordion.module.css";
import minusIcon from "../../assets/icons/minus.svg";
import plusIcon from "../../assets/icons/plus.svg";
import DisplayCells from "../../components/DisplayCells";

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
        <div className={cl.accordion}>
          <div className={cl.accordionHeader} onClick={() => toggleAccordion()}>
            <h2>{data.name}</h2>
            <div className={cl.imgWrapper}>
              <div>
                <img src={isOpen ? minusIcon : plusIcon} alt="" />
              </div>
            </div>
          </div>
          <div className={`${cl.accordionContent} ${isOpen ? cl.open : ""}`} ref={contentRef}>
            <DisplayCells data={data} />
          </div>
        </div>
      )}
    </>
  );
};

export default Accordion;
