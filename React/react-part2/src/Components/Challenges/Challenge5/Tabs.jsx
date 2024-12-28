import { useState } from "react";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState("html");

    return (
        <div>
            {/* Buttons to switch tabs */}
            <div>
                <button onClick={() => setActiveTab("html")}>HTML</button>
                <button onClick={() => setActiveTab("css")}>CSS</button>
                <button onClick={() => setActiveTab("js")}>JavaScript</button>
            </div>

            {/* Content of the tabs */}
            <div>
                {activeTab === "html" && (
                    <p>
                        The HyperText Markup Language or HTML is the
                        standard markup language for documents designed to
                        be displayed in a web browser.
                    </p>
                )}
                {activeTab === "css" && (
                    <p>
                        Cascading Style Sheets is a style sheet language
                        used for describing the presentation of a document
                        written in a markup language such as HTML or XML.
                    </p>
                )}
                {activeTab === "js" && (
                    <p>
                        JavaScript, often abbreviated as JS, is a
                        programming language that is one of the core
                        technologies of the World Wide Web, alongside HTML
                        and CSS.
                    </p>
                )}
            </div>
        </div>
    );
}
