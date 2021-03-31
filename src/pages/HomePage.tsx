export default function HomePage() {
  return (
    <div>
      <div
        style={{
          margin: 20,
          marginTop: 200,
          fontSize: 25,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "teal",
        }}
      >
        <h1>Hi welcome to unlimited movie app!</h1>
        <p>
          You can find your favourite movie in discover page..so lets start
          discover your favourite one!{" "}
        </p>
      </div>
      <div>
        <img
          src="https://blog.tubikstudio.com/wp-content/uploads/2017/10/logo_animation_tubik_design-1.gif"
          alt=""
        />
      </div>
    </div>
  );
}
