// EditableEdge.js
import React from "react";
import { BaseEdge, BezierEdge } from "@xyflow/react";

const EditableEdge = ({ id, sourceX, sourceY, targetX, targetY, style, data, markerEnd }) => {
  return (
    <g>
      <BaseEdge
        path={'M' + sourceX + ' ' + sourceY + 'L' + targetX + ' ' + targetY}
        markerEnd={markerEnd}
        style={style}
        data={data}
      />
      <BezierEdge
        id={id}
        sourceX={sourceX}
        sourceY={sourceY}
        targetX={targetX}
        targetY={targetY}
        style={style}
        data={data}
        markerEnd={markerEnd}
        isInteractive
      />
    </g>
  );
};

export default EditableEdge;
