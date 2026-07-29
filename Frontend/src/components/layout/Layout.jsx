import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: "1200px",
          margin: "30px auto",
          padding: "20px",
        }}
      >
        {children}
      </main>
    </>
  );
}

export default Layout;
