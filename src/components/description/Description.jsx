import { useEffect, useState } from "react";
import { useStore } from "../../hooks/useStore";
import "./Description.css";

export default function Description() {
  // asking if it exist a target (an object clicked)
  const target = useStore((state) => state.target);

  return (
    <aside className={`description-container ${target.name !== '' ? "is-visible" : "is-invisible"}`}>

      <div className="description-content">
        <h3>{target.name ?? 'Furniture name'}</h3>
        <hr />
        <p>
          {target.description}
        </p>
      </div>
    </aside>
  );
}
