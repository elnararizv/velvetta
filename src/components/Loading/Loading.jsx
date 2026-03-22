import { Circles } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div style={{
      height: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Circles
        height="40"
        width="40"
        color="#738FBD"
      />
    </div>
  );
}
