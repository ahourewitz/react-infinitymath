import React, {useState} from "react";

function Sidebar(props) {
    return <div className="Sidebar" style={{
        width: props.width.toLocaleString("en", {style: "percent"})
    }}>
        <p>Contenu de la sidebar</p>
    </div>;
}

export default Sidebar;