import "./Navigation.css";
import { Link } from "react-router-dom";

export function Navigation(){
  return(
    <div className="nav">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </div>
  );
}