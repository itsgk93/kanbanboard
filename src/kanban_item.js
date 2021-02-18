import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { backColor } from "./constants";
import { MdChatBubble, MdAttachFile, MdBorderInner } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";

const KanbanItem = ({ id, data }) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: { type: "card", id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const classes = {
    item: {
      padding: 10,
      margin: "10px 20px",
      fontSize: "0.8em",
      cursor: "pointer",
      border: "1px solid #B8B8B8",
      borderRadius: "5px",
      height: "100px",
    },
    rowC: { display: "flex", flexDirection: "row" },
    row_space_bw: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    priority: {
      padding: 2,
      marginRight: "10px",
      fontSize: "0.8em",
      backgroundColor: backColor[data.priority],
      color: "white",
      borderRadius: "3px",
    },
    id: {
      color: "#B8B8B8",
    },
    title: {
      fontSize: "1.3em",
      marginTop: 12,
      marginBottom: 12,
      //   fontWeight: "w500",
      textAlign: "left",
    },
    components: {
      fontSize: "1.1em",
      marginBottom: 12,
      color: "#14b8e0",
      textAlign: "left",
    },
    count: {
      margin: "0px 7px",
      color: "#B8B8B8",
    },
  };
  const { title, priority, day, components } = data;
  const opacity = isDragging ? 0 : 1;
  drag(ref);
  return (
    <div ref={ref} style={{ opacity }}>
      <div style={classes.item}>
        <div style={classes.row_space_bw}>
          <div style={classes.rowC}>
            <div style={classes.priority}>{priority}</div>{" "}
            <div style={classes.id}>#{id}</div>
          </div>
          <div style={classes.id}>{day} day ago</div>
        </div>
        <div style={classes.title}>{title}</div>
        <div style={classes.components}>{components}</div>
        <div style={classes.row_space_bw}>
          <div style={classes.row_space_bw}>
            <MdChatBubble fontSize="16px" color="#B8B8B8" />
            <div style={classes.count}>9</div>
            <MdAttachFile fontSize="16px" color="#B8B8B8" />
            <div style={classes.count}>5</div>
          </div>
          <div style={classes.row_space_bw}>
            <MdBorderInner fontSize="20px" color="#B8B8B8" />
            <FcBusinessman fontSize="20px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanItem;
