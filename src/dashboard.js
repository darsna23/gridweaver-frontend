import { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css";

function Dashboard() {
    const [nodes, setNodes] = useState([]);

useEffect(() => {
    axios.get("http://localhost:8080/nodes")
        .then((response) => {
            setNodes(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);

  return (
    <div className="container">

      <h1>⚡ GridWeaver Smart Energy Dashboard</h1>

      <div className="top-cards">
        <div className="info-card">
          <h2>⚡ Total Power</h2>
          <p>261.0 kW</p>
        </div>

        <div className="info-card">
          <h2>🟢 Active Nodes</h2>
          <p>3 / 4</p>
        </div>

        <div className="info-card">
          <h2>🔋 Battery</h2>
          <p>89%</p>
        </div>

        <div className="info-card">
          <h2>🌍 Grid Health</h2>
          <p>Excellent</p>
        </div>
      </div>

      <h2>Microgrid Nodes</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Power</th>
          </tr>
        </thead>

        <tbody>
            {nodes.map((node) => (
            <tr key={node.id}>
            <td>{node.id}</td>
            <td>{node.status}</td>
            <td>{node.power} kW</td>
            </tr>
        ))}
        </tbody>
      </table>

      <div className="alerts">
        <h2>🚨 Live Alerts</h2>
        <ul>
          <li>⚠ Node 3 is Offline</li>
          <li>🔋 Battery level is healthy (89%)</li>
          <li>⚡ Grid load is balanced</li>
        </ul>
      </div>

    </div>
  );
}

export default Dashboard;