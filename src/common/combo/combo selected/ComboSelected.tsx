import { useAppContext } from "../../../utilities/utils/Utils";
import { useState, useEffect } from "react";
import "./styles.scss";

function ComboSelected() {
  const { state } = useAppContext();
  const { theme } = state;

  // State for position
  const [position, setPosition] = useState({
    x: window.innerWidth - 90,
    y: window.innerHeight - 150,
  });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setPosition({ x: window.innerWidth - 90, y: window.innerHeight - 150 });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle mouse press
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  // Handle mouse move
  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      setPosition((prev) => ({
        x: window.innerWidth > 900 ? e.clientX - offset.x : prev.x, // Lock x if >= 900px
        y: e.clientY - offset.y, // Always allow y movement
      }));
    }
  };

  // Handle mouse release
  const handleMouseUp = () => {
    setDragging(false);
  };

  // Handle touch press
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    setDragging(true);
    setOffset({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  // Handle touch move
  const handleTouchMove = (e: TouchEvent) => {
    if (dragging) {
      const touch = e.touches[0];
      setPosition((prev) => ({
        x: window.innerWidth > 900 ? touch.clientX - offset.x : prev.x, // Lock x if >= 900px
        y: touch.clientY - offset.y, // Always allow y movement
      }));

      // Prevent default scrolling behavior while dragging
      e.preventDefault();
    }
  };

  // Handle touch release
  const handleTouchEnd = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false }); // Prevent scrolling
      window.addEventListener("touchend", handleTouchEnd);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [dragging]);

  return (
    <div
      className={`combo_selected_float ${
        theme === "dark" ? "combo_selected_float_dark" : ""
      }`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div className="float_content l_flex">
        <div className="count l_flex">
          <span>0</span>
        </div>
        <div className="text">
          <small>Combo Selected</small>
        </div>
      </div>
    </div>
  );
}

export default ComboSelected;
