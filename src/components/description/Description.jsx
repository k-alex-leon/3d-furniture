import { useState } from "react";
import { useStore } from "../../hooks/useStore";
import "./Description.css";

export default function Description() {
  const target = useStore((state) => state.target);
  const [isOpen, setOpen] = useState(true)

  const handleOnCloseClick = (e) => {
    setOpen(false)
  }

  return (
    <aside className={`description-container ${isOpen ? "is-visible" : "is-invisible"}`}>

        <picture onClick={handleOnCloseClick}>
            <img src="./icons/close.png"/>
        </picture>
      <div className="description-content">
        <h3>Furniture Name</h3>
        <hr />
        <p>
          The hr element is used to create a horizontal rule or divider within
          your HTML content. It visually separates sections of your page.
        </p>
      </div>
    </aside>
  );
}
