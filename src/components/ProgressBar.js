const ProgressBar = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(94, 94, 94, 0.2)",

        minWidth: "300px",
        paddingTop: "20px",
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "100px",
        overflow: "hidden",
      }}
    >
      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span
              style={{
                display: "flex",
                position: "relative",
                letterSpacing: "0.01px",
                font: "normal normal normal 12px/16px Mulish",
                color: "color: #FFFFFF",
                opacity: "1",
              }}
            >
              {item.day}
            </span>
            <span
              style={{
                color: "#36A546",
                font: "normal normal normal 14px/19px Mulish",
                letterSpacing: "0.01px",
              }}
            >{`${item.percentage}%`}</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",

              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${item.percentage}%`,
                backgroundColor: "#36A54680",
                border: "1px solid #36A546",
                height: "10px",
                marginBottom: "20px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
