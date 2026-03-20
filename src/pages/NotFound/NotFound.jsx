import notFound from "../../assets/image/notFound.jpg";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "#f7f7f7", 
      }}
    >
      <img
        src={notFound}
        alt="404 Not Found"
        style={{
          maxWidth: "100%",
          maxHeight: "100%", 
          objectFit: "contain", 
        }}
      />
    </div>
  );
}

export default NotFound;