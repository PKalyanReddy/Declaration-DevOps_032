// import React, { useState, useCallback } from "react";
// import {
//   ReactFlow,
//   useNodesState,
//   useEdgesState,
//   addEdge,
//   Controls,
//   MiniMap,
//   Background,
//   Handle,
//   Position,
// } from "@xyflow/react";
// import "@xyflow/react/dist/style.css";
// import {
//   CircleNode,
//   DiamondNode,
//   ParallelogramNode,
//   RectangleNode,
//   SquareNode,
// } from "../Another/Shapes";
// import { Flex } from "@chakra-ui/react";

// // const initialNodes = [
// //   { id: "1", position: { x: 100, y: 100 }, data: { label: "1" } },
// //   { id: "2", position: { x: 100, y: 200 }, data: { label: "2" } },
// // ];

// // const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

// const initialEdges = [];
// const initialNodes = [];

// const nodeTypes = {
//   rectangle: RectangleNode,
//   parallelogram: ParallelogramNode,
//   circle: CircleNode,
//   square: SquareNode,
//   diamond: DiamondNode,
// };

// const WhiteSpace = () => {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
//   const [selectedNodeId, setSelectedNodeId] = useState(null);
//   const [newLabel, setNewLabel] = useState("");

//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

//   const addNode = () => {
//     const newNode = {
//       id: `${nodes.length + 1}`,
//       position: { x: Math.random() * 400, y: Math.random() * 400 },
//       data: { label: `${nodes.length + 1}` },
//     };
//     setNodes((nds) => [...nds, newNode]);
//   };

//   const deleteNode = () => {
//     setNodes((nds) => nds.filter((node) => node.id !== selectedNodeId));
//     setEdges((eds) =>
//       eds.filter(
//         (edge) =>
//           edge.source !== selectedNodeId && edge.target !== selectedNodeId
//       )
//     );
//     setSelectedNodeId(null);
//   };

//   const handleLabelChange = (event) => {
//     setNewLabel(event.target.value);
//   };

//   const applyLabelChange = () => {
//     setNodes((nds) =>
//       nds.map((node) =>
//         node.id === selectedNodeId
//           ? { ...node, data: { ...node.data, label: newLabel } }
//           : node
//       )
//     );
//     setNewLabel("");
//     setSelectedNodeId(null);
//   };

//   return (
//     <div className="White-space">
//       <div className="sidebar" style={{ position: "relative", top: 0, left: 0, zIndex: 10 }}>
//         <h2>Tools</h2>
//         <button onClick={() => addNode("rectangle")}>Add Rectangle</button>
//         <button onClick={() => addNode("parallelogram")}>
//           Add Parallelogram
//         </button>
//         <button onClick={() => addNode("circle")}>Add Circle</button>
//         <button onClick={() => addNode("square")}>Add Square</button>
//         <button onClick={() => addNode("diamond")}>Add Diamond</button>

//         <button onClick={addNode}>Add Node</button>
//         {selectedNodeId && (
//           <>
//             <button onClick={deleteNode}>Delete Node</button>
//             <input
//               type="text"
//               value={newLabel}
//               onChange={handleLabelChange}
//               placeholder="New Label"
//             />
//             <button onClick={applyLabelChange} style={{backgroundColor:"black", color: "white"}}>Change Label</button>
//           </>
//         )}
//       </div>
//       <div style={{ width: "80%", height: "100vh", border:'1px solid' }}>
//         <ReactFlow
//           nodes={nodes}
//           edges={edges}
//           onNodesChange={onNodesChange}
//           onEdgesChange={onEdgesChange}
//           onConnect={onConnect}
//           onNodeClick={(_, node) => setSelectedNodeId(node.id)}
//         >
//           <Controls />
//           <MiniMap />
//           <Background variant="dots" gap={12} size={1} />
//         </ReactFlow>
//       </div>
//     </div>
//   );
// };

// export default WhiteSpace;



import React, { useState, useCallback } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap,
  Background,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  CircleNode,
  DiamondNode,
  ParallelogramNode,
  RectangleNode,
  SquareNode,
} from "../Another/Shapes";
import { ColorModeContext, Flex } from "@chakra-ui/react";
import ColorModeFlow from "../ColorMode/ColorModeFlow";
import { ExportButton } from "../ExportButton/ExportButton";

const initialEdges = [];
const initialNodes = [];

const nodeTypes = {
  rectangle: RectangleNode,
  parallelogram: ParallelogramNode,
  circle: CircleNode,
  square: SquareNode,
  diamond: DiamondNode,
};

const WhiteSpace = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [newLabel, setNewLabel] = useState("");
  const [colorMode, setColorMode] = useState("dark");

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNode = (shapeType) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: `${nodes.length + 1}` },
      type: shapeType,
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const deleteNode = () => {
    setNodes((nds) => nds.filter((node) => node.id !== selectedNodeId));
    setEdges((eds) =>
      eds.filter(
        (edge) => edge.source !== selectedNodeId && edge.target !== selectedNodeId
      )
    );
    setSelectedNodeId(null);
  };

  const handleLabelChange = (event) => {
    setNewLabel(event.target.value);
  };

  const applyLabelChange = () => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNodeId
          ? { ...node, data: { ...node.data, label: newLabel } }
          : node
      )
    );
    setNewLabel("");
    setSelectedNodeId(null);
  };

  return (
    <div className="White-space">
      <div className="sidebar" style={{ position: "relative", top: 0, left: 0, zIndex: 10 }}>
        <h2>Tools</h2>
        <button onClick={() => addNode("rectangle")}>Add Rectangle</button>
        <button onClick={() => addNode("parallelogram")}>Add Parallelogram</button>
        <button onClick={() => addNode("circle")}>Add Circle</button>
        <button onClick={() => addNode("square")}>Add Square</button>
        <button onClick={() => addNode("diamond")}>Add Diamond</button>

        <button onClick={addNode}>Add Node</button>
        {selectedNodeId && (
          <>
            <button onClick={deleteNode}>Delete Node</button>
            <input
              type="text"
              value={newLabel}
              onChange={handleLabelChange}
              placeholder="New Label"
            />
            <button onClick={applyLabelChange} style={{ backgroundColor: "black", color: "white" }}>
              Change Label
            </button>
          </>
        )}
      </div>
      <div id="whiteBoard" style={{ width: "80%", height: "100vh", border: "1px solid", backgroundColor: colorMode === "dark" ? "#333" : "#fff", }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={(_, node) => setSelectedNodeId(node.id)}
          nodeTypes={nodeTypes}
        >
          <Controls />
          <MiniMap style={{backgroundColor: colorMode === "dark" ? "#333" : "gray"}} />
          <Background />
          <ColorModeFlow colorMode={colorMode} setColorMode={setColorMode}/>
          <ExportButton elementId={"WhiteBoard"}/>
        </ReactFlow>
      </div>
    </div>
  );
};

export default WhiteSpace;
