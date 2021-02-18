import React, { useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import update from "immutability-helper";
import KanbanColumn from "./kanban_column";
import KanbanItem from "./kanban_item";
import { tasksList, channels, labelsMap } from "./constants";
import { MdMoreHoriz } from "react-icons/md";

import "./styles.css";

const classes = {
  board: {
    display: "flex",
    margin: "0 auto",
    width: "80vw",
    fontFamily: 'Arial, "Helvetica Neue", sans-serif',
  },
  column: {
    minWidth: 200,
    width: "20vw",
    height: "80vh",
    margin: "0 auto",
  },
  columnHead: {
    textAlign: "left",
    padding: 10,
    marginLeft: 10,
    fontSize: "1.4em",
  },
  row_space_bw: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    paddingRight: "20px",
    paddingTop: "20px",
  },
};

const Kanban = () => {
  const [tasks, setTaskStatus] = useState(tasksList);

  const changeTaskStatus = useCallback(
    (id, status) => {
      let task = tasks.find((task) => task._id === id);
      const taskIndex = tasks.indexOf(task);
      task = { ...task, status };
      let newTasks = update(tasks, {
        [taskIndex]: { $set: task },
      });
      setTaskStatus(newTasks);
    },
    [tasks]
  );

  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <section style={classes.board}>
          {channels.map((channel) => (
            <KanbanColumn
              key={channel}
              status={channel}
              changeTaskStatus={changeTaskStatus}
            >
              <div style={classes.column}>
                <div style={classes.row_space_bw}>
                  <div style={classes.columnHead}>{labelsMap[channel]}</div>
                  <MdMoreHoriz
                    fontSize="20px"
                    color="#B8B8B8"
                    style={classes.icon}
                  />
                </div>
                <div>
                  {tasks
                    .filter((item) => item.status === channel)
                    .map((item) => (
                      <KanbanItem key={item._id} id={item._id} data={item} />
                    ))}
                </div>
              </div>
            </KanbanColumn>
          ))}
        </section>
      </DndProvider>
    </main>
  );
};

export default Kanban;
