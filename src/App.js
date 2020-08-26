import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <header>
        Header
      </header>
      <div className="container">
        <aside className="left">
          Left Sidebar
        </aside>
        <article className="content">
          Article
        </article>
        <aside className="right">
          Right Sidebar
        </aside>
      </div>
      <footer>
        Footer
      </footer>
    </>
  );
}
