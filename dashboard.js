import "./dashboard.css";

function Dashboard() {

  const nodes = [
    { id: 1, status: "ACTIVE", power: 95.4 },
    { id: 2, status: "ACTIVE", power: 88.7 },
    { id: 3, status: "INACTIVE", power: 0.0 },
    { id: 4, status: "ACTIVE", power: 76.9 }
  ];

  return (
    <div className="container">

      <h1>⚡ GridWeaver Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h2>{nodes.length}</h2>
          <p>Total Nodes</p>
        </div>

        <div className="card green">
          <h2>3</h2>
          <p>Active Nodes</p>
        </div>

        <div className="card red">
          <h2>1</h2>
          <p>Inactive Nodes</p>
        </div>
      </div>

      <table>

        <thead>
          <tr>
            <th>Node ID</th>
            <th>Status</th>
            <th>Power</th>
          </tr>
        </thead>

        <tbody>

          {nodes.map((node) => (
            <tr key={node.id}>
              <td>{node.id}</td>
              <td>{node.status}</td>
              <td>{node.power}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Dashboard;